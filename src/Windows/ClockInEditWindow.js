export default class ClockInEditWindow{

  createWindow(){
    const electron = require('electron');
    const app = electron.app;
    const remote = electron.remote;
    const BrowserWindow = remote.BrowserWindow;


    app.on('ready', function(){
      const childWindow = new BrowserWindow({
        width: 500,
        height: 500
     });
     childWindow.setMenu(null);
     childWindow.setTitle("Clock In - Edit");
     childWindow.loadURL('http://localhost:3000/ClockInMenu');
    });
  }
}