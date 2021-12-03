const { Router } = require ('express')
const { pages, users } = require ('../app/controllers')

const { auth } = require ('../app/middlewares/auth')

const Routes = Router()

Routes.get('/', pages.index)

//#region User Routes
Routes.get ('/users', [auth.base], users.index)
Routes.get ('/users/:id', [auth.base], users.show)
Routes.post ('/users', [auth.base], users.create)
Routes.put ('/users/:id', [auth.base], users.update)
Routes.delete ('/users/:id', [auth.base], users.destroy)
//#endregion

exports.Routes = Routes
