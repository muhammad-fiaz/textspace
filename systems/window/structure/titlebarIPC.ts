

import { BrowserWindow, ipcMain, shell,dialog } from 'electron';

export const registerTitlebarIpc = (mainWindow: BrowserWindow) => {
  ipcMain.handle('window-minimize', () => {
    mainWindow.minimize();
  });

  ipcMain.handle('window-maximize', () => {
    mainWindow.maximize();
  });

  ipcMain.handle('window-toggle-maximize', () => {
    if (mainWindow.isMaximized()) {
      mainWindow.unmaximize();
    } else {
      mainWindow.maximize();
    }
  });

  ipcMain.handle('window-close', () => {
    mainWindow.close();
  });

  ipcMain.handle('web-undo', () => {
    mainWindow.webContents.undo();
  });

  ipcMain.handle('web-redo', () => {
    mainWindow.webContents.redo();
  });

  ipcMain.handle('web-cut', () => {
    mainWindow.webContents.cut();
  });

  ipcMain.handle('web-copy', () => {
    mainWindow.webContents.copy();
  });

  ipcMain.handle('web-paste', () => {
    mainWindow.webContents.paste();
  });

  ipcMain.handle('web-delete', () => {
    mainWindow.webContents.delete();
  });

  ipcMain.handle('web-select-all', () => {
    mainWindow.webContents.selectAll();
  });

  ipcMain.handle('web-reload', () => {
    mainWindow.webContents.reload();
  });

  ipcMain.handle('web-force-reload', () => {
    mainWindow.webContents.reloadIgnoringCache();
  });

  ipcMain.handle('web-toggle-devtools', () => {
    mainWindow.webContents.toggleDevTools();
  });

  ipcMain.handle('web-actual-size', () => {
    mainWindow.webContents.setZoomLevel(0);
  });

  ipcMain.handle('web-zoom-in', () => {
    mainWindow.webContents.setZoomLevel(mainWindow.webContents.zoomLevel + 0.5);
  });

  ipcMain.handle('web-zoom-out', () => {
    mainWindow.webContents.setZoomLevel(mainWindow.webContents.zoomLevel - 0.5);
  });

  ipcMain.handle('web-toggle-fullscreen', () => {
    mainWindow.setFullScreen(!mainWindow.fullScreen);
  });

  ipcMain.handle('open-url', (e, url) => {
    shell.openExternal(url);
  });

  ipcMain.handle('open-folder', async () => {
    const result = await dialog.showOpenDialog(mainWindow, {
      properties: ['openDirectory'],
    });

    // `result.canceled` will be true if the user cancels the dialog
    if (!result.canceled && result.filePaths.length > 0) {
      // `result.filePaths` contains the selected folder path
      // You can do something with the selected folder path here
      console.log('Selected folder:', result.filePaths[0]);
      // For example, you could send the folder path back to the renderer process
      // using the event.sender.send method and handle it in the renderer process.
      mainWindow.webContents.send('selected-folder', result.filePaths[0]);
    }
  });

  ipcMain.handle('open-file', async () => {
    const result = await dialog.showOpenDialog(mainWindow, {
      properties: ['openFile'],
    });

    if (!result.canceled && result.filePaths.length > 0) {

      console.log('Selected file:', result.filePaths[0]);

      mainWindow.webContents.send('selected-file', result.filePaths[0]);
    }

  });

};
