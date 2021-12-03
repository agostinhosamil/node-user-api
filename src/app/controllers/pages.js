const { User } = require ('../models')

class pagesController {
	async index (req, res) {

		const users = await User.findAll()

		res.render ('pages/index', { users })
	}
}

module.exports = pagesController
