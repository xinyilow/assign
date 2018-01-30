
const {app,BrowserWindow, Menu}=require('electron')
const path = require('path')
const url = require('url')

let win

function createWindow (){
	win = new BrowserWindow({width:800,height:600})

	let template = [
		{
			label:'New Member',
			click:()=>{
	 			win.loadURL(url.format({
					pathname:path.join(__dirname,'index.html'),
 					protocol:'file:',
 					slashes:true
	 			}))
			}
		},
		{
			label:'show Member',
			click:()=>{
		 		win.loadURL(url.format({
			 		pathname:path.join(__dirname,'record.html'),
			 		protocol:'file',
			 		slashes:true
			 	}))
			}
		}
	];	

	const menu=Menu.buildFromTemplate(template)
	Menu.setApplicationMenu(menu)

	win.loadURL(url.format({
		pathname:path.join(__dirname,'index.html'),
		protocol:'file:',
		slashes:true
	}))

	win.webContents.openDevTools()

	win.on('closed',()=>{
		win=null
	})
}

app.on('ready',createWindow)

app.on('window-all-closed',()=>{
	if(process.platform !=='darwin'){
		app.quit()
	}
})

app.on('activate',()=>{
	if (win===nul){
		createWindow()
	}
})
