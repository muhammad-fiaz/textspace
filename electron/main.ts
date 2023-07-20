import { app, BrowserWindow,ipcMain } from 'electron'
import path from 'node:path'

// The built directory structure
//
// ├─┬─┬ dist
// │ │ └── index.html
// │ │
// │ ├─┬ dist-electron
// │ │ ├── main.js
// │ │ └── preload.js
// │
process.env.DIST = path.join(__dirname, '../dist')
process.env.PUBLIC = app.isPackaged ? process.env.DIST : path.join(process.env.DIST, '../public')


let win: BrowserWindow | null
// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL']

function createWindow() {
  win = new BrowserWindow({
    width: 1080, // width and height is required
    height: 720, //height of the window
    frame: false,
    // transparent: true ,
    // titleBarStyle: 'hidden', also you can use this 
    icon: path.join(process.env.PUBLIC, 'electron-vite.svg'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
        contextIsolation: false,

    },
    // Limiting the window resolution
    minWidth: 900,  // Set the minimum width
    minHeight: 600, // Set the minimum height
    maxWidth: 1920, // Set the maximum width
    maxHeight: 1080, // Set the maximum height
  })

  // Test active push message to Renderer-process.
  win.webContents.on('did-finish-load', () => {
    win?.webContents.send('main-process-message', (new Date).toLocaleString())
  })

  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL)
  } else {
    // win.loadFile('dist/index.html')
    win.loadFile(path.join(process.env.DIST, 'index.html'))
  }
}

// Handle minimize event
ipcMain.on('minimize', () => {
  win?.minimize();
});

// Handle maximize event
ipcMain.on('maximize', () => {
  if (win?.isMaximized()) {
    win?.restore();
  } else {
    win?.maximize();
  }
});

// Handle quit event
ipcMain.on('quit', () => {
  app.quit();
});

app.on('window-all-closed', () => {
  win = null
})

app.whenReady().then(createWindow)
