import { Router } from 'express'
import { pages, users } from '../app/controllers'

const Routes = Router()

Routes.get('/', pages.index)

//#region User Routes
Routes.get ('/users', users.index)
Routes.get ('/users/:id', users.show)
Routes.post ('/users', users.create)
Routes.put ('/users/:id', users.update)
Routes.delete ('/users/:id', users.destroy)
//#endregion

export { Routes }
