import { app, BrowserWindow } from 'electron';
import * as path from 'path';

function createWindow() {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		show: false,
		autoHideMenuBar: true,
		icon: path.join(__dirname, '..', 'static', 'favicon.png'), // Ensure the file format is correct
	});

	win.loadURL('http://localhost:5173');
	win.once('ready-to-show', () => win.show());

	// simple way to set window title without html
	win.title = 'SvelteKit + Electron + Typescript + Tailwind';
}

app.whenReady().then(() => {
	createWindow();

	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0) {
			createWindow();
		}
	});
});

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});
