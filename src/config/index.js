import package from '../../package.json'

const configKeysRe = /^(@|app(lication)?_)/i
const appConfig = package.ApplicationConfigurations || {
	port: null
}

for (let key in package) {
	if (configKeysRe.test(key)) {
		let appConfigProp = key.replace (configKeysRe, '')

		appConfig[ appConfigProp ] = (
			package [ key ]
		)
	}
}

if (!appConfig.port || process.env.PORT) {
	appConfig.port = process.env.PORT || (
		appConfig.port || 3333
	)
}

export default appConfig
