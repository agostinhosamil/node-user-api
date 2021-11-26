import sequelize from '../../database'
import path from 'path'
import * as fs from 'fs'

const dirFiles = fs.readdirSync (__dirname)

for (let i = 0; i < dirFiles.length; i++) {
	if (dirFiles [i] !== 'index.js') {
		const modelFileName = dirFiles [i].replace (/\s*\.js$/i, '')
		const modelCore = require (path.resolve (__dirname, dirFiles [i]))

		if ( modelCore.default.init ) {
			const databaseSchema = require ('../../database/schema')
			const modelName = modelFileName.toLowerCase()
			const modelSchema = databaseSchema [modelName]

			if (typeof undefined !== typeof modelSchema) {
				modelCore.default.init (modelSchema, { sequelize, modelName })
			}
		}
		
		exports [ modelFileName ] = (
			// Instance of the model 
			// core class inside its file
			modelCore.default
		)

		if (typeof modelCore.default.initialize === 'function') {
			modelCore.default.initialize.apply (modelCore.default, [])
		}
	}
}
