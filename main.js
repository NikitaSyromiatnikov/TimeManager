const { app, BrowserWindow } = require('electron');

function createWindow() {
    let Window = new BrowserWindow({
        width: 1024,
        height: 500,
        webPreferences: {
            nodeIntegration: true
        }
    });

    Window.removeMenu();
    Window.loadFile('./views/mainWindow.html');
}

app.whenReady().then(createWindow);