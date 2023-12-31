
export type TitlebarMenuItem = {
  name: string;
  action?: string;
  shortcut?: string;
  value?: string | number;
  items?: TitlebarMenuItem[];
};

export type TitlebarMenu = {
  name: string;
  items: TitlebarMenuItem[];
};

const titlebarMenus: TitlebarMenu[] = [
  {
    name: 'File',
    items: [
      {
        name: 'new file',
        action: 'new_file',
        shortcut: 'Ctrl+N',
      },

      {
        name: 'open file',
        action: 'open_file',
        shortcut: 'Ctrl+O',
      },
      {
        name: 'open folder',
        action: 'open_folder',
        shortcut: 'Ctrl+Shift+F',
      },
      {
        name: 'Settings',
        action: 'settings',
        shortcut: 'Ctrl+Shift+S',
      },
      {
        name: 'Exit',
        action: 'exit',
      },

    ],
  },
  {
    name: 'Edit',
    items: [
      {
        name: 'Undo',
        action: 'undo',
        shortcut: 'Ctrl+Z',
      },
      {
        name: 'Redo',
        action: 'redo',
        shortcut: 'Ctrl+Y',
      },
      {
        name: '__',
      },
      {
        name: 'Cut',
        action: 'cut',
        shortcut: 'Ctrl+X',
      },
      {
        name: 'Copy',
        action: 'copy',
        shortcut: 'Ctrl+C',
      },
      {
        name: 'Paste',
        action: 'paste',
        shortcut: 'Ctrl+V',
      },
      {
        name: 'Delete',
        action: 'delete',
      },
      {
        name: '__',
      },
      {
        name: 'Select All',
        action: 'select_all',
        shortcut: 'Ctrl+A',
      },
    ],
  },
  {
    name: 'View',
    items: [
      {
        name: 'Reload',
        action: 'reload',
        shortcut: 'Ctrl+R',
      },
      {
        name: 'Force Reload',
        action: 'force_reload',
        shortcut: 'Ctrl+Shift+R',
      },
      {
        name: 'Toogle Developer Tools',
        action: 'toggle_devtools',
        shortcut: 'Ctrl+Shift+I',
      },
      {
        name: '__',
      },
      {
        name: 'Actual Size',
        action: 'actual_size',
        shortcut: 'Ctrl+0',
      },
      {
        name: 'Zoom In',
        action: 'zoom_in',
        shortcut: 'Ctrl++',
      },
      {
        name: 'Zoom Out',
        action: 'zoom_out',
        shortcut: 'Ctrl+-',
      },
      {
        name: '__',
      },
      {
        name: 'Toggle Fullscreen',
        action: 'toggle_fullscreen',
        shortcut: 'F11',
      },
    ],
  },
  {
    name: 'Run',
    items: [
      {
        name: 'Run',
        action: 'run',
        shortcut: 'Ctrl+Shift+X',
      },
      {
        name: 'Debug',
        action: 'debug',
        shortcut: 'Ctrl+Shift+B',
      },
    ],
  },
  {
    name: 'Help',
    items: [
      {
        name: 'Author',
        action: 'open_url',
        value: 'https://github.com/muhammad-fiaz',
        shortcut: '@muhammad-fiaz',
      },
    ],
  },
];

export default titlebarMenus;
