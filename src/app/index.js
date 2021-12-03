const bodyParser = require ('body-parser')
const express = require ('express')
const cors = require ('cors')
const path = require ('path')

// import config from '@config'
const { Routes } = require ('../config/routes')

const coreApplication = express()

class Application {
	constructor () {
		this.setupMiddlewares()
		this.drawRoutes()
	}

	get express () {
		return coreApplication
	}

	setupMiddlewares () {
		this.express.use(cors())
		this.express.use(bodyParser.json())
		this.express.use(bodyParser.urlencoded({ extended: false }))
		this.express.use(express.static(
			path.resolve (__dirname, '..', '..', 'public')
		))
	}

	drawRoutes () {
		this.express.use('/', Routes)
	}
}

exports.App = new Application

exports.app = App.express
