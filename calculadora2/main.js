const app=require('electron').app;
const BrowserWindow = require('electron').BrowserWindow;
const path = require('path'); //muestra la ruta del archivo
const url = require('url'); //carga una pagina
// ECMASCRIPT = 6
let pantallaPrincipal;

function muestraPantallaPrincipal(){
	pantallaPrincipal = new BrowserWindow({width:320, height:425});
	pantallaPrincipal.loadURL(url.format({
		pathname: path.join(__dirname,'index.html'),
		protocol: 'file',
		slashes: true
	}))
	pantallaPrincipal.webContents.openDevTools();
	pantallaPrincipal.show();
}
app.on('ready',muestraPantallaPrincipal)