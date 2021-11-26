import * as path from 'path'
import * as fs from 'fs'

const controllerDirectoryFileList = fs.readdirSync (__dirname)

for (let i = 0; i < controllerDirectoryFileList.length; i++) {
	if (controllerDirectoryFileList [ i ] !== 'index.js') {

		const controllerName = controllerDirectoryFileList [ i ].replace (/\.js$/i, '')
		const controllerCore = require (path.resolve ( __dirname, controllerDirectoryFileList [i] ))
		
		exports [ controllerName ] = (
			// Instance of the controller 
			// core class inside its file
			new controllerCore.default
		)
	}
}
