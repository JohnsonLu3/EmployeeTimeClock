const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');

let mainWindow;
let clockInWindow;

function createWindow() {
  mainWindow = new BrowserWindow({width: 900, height: 680});
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  mainWindow.on('closed', () => mainWindow = null);
  mainWindow.setMenu(null);
}

function createClockinMenu(){
  clockInWindow = new BrowserWindow({width: 500, height: 500, show: true, parent: mainWindow});
  clockInWindow.loadURL('http://localhost:3000/ClockInMenu');
  clockInWindow.setMenu(null);
  clockInWindow.setTitle("Clock In - Edit");
}

app.on('ready', function(){
  createWindow();
  createClockinMenu();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});