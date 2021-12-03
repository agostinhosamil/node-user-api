const path = require ('path')
const fs = require ('fs')

const sequelize = require ('../../database')
const databaseSchema = require ('../../database/schema')

const dirFiles = fs.readdirSync (__dirname)


for (let i = 0; i < dirFiles.length; i++) {
	if (dirFiles [i] !== 'index.js') {
		const modelFileName = dirFiles [i].replace (/\s*\.js$/i, '')
		const modelCore = require (path.resolve (__dirname, dirFiles [i]))

		if ( modelCore.init ) {
			const modelName = modelFileName.toLowerCase()
			const modelSchema = databaseSchema [modelName]

			if (typeof undefined !== typeof modelSchema) {
				modelCore.init (modelSchema, { sequelize, modelName })
			}
		}
		
		exports [ modelFileName ] = (
			// Instance of the model 
			// core class inside its file
			modelCore
		)

		if (typeof modelCore.initialize === 'function') {
			modelCore.initialize.apply (modelCore, [])
		}
	}
}
