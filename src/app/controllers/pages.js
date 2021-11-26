import { User } from '../models'

export default class pagesController {
	async index (req, res) {

		const users = await User.findAll()

		res.render ('pages/index', { users })
	}
}