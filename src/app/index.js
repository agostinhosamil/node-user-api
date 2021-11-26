import bodyParser from 'body-parser'
import express from 'express'
import path from 'path'

// import config from '@config'
import { Routes } from '../config/routes'

const coreApplication = express()

export class Application {
	constructor () {
		this.middlewares()
		this.drawRoutes()
	}

	get express () {
		return coreApplication
	}

	middlewares () {
		this.express.use(bodyParser.json())
		this.express.use(bodyParser.urlencoded())
		this.express.use(express.static(
			path.resolve (__dirname, '..', '..', 'public')
		))
	}

	drawRoutes () {
		this.express.use('/', Routes)
	}
}

export const App = new Application

export const app = App.express
