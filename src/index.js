import { app } from './app'

import register from '@react-ssr/express/register'
import config from './config'

(async () => {

	await register (app);

	app.listen(config.port, () => {
		console.log (config.StartUpMessage)
	})
})()
