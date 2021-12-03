const { User } = require ('../models')

class usersController {
	/**
	 * Get all the users in the database.
	 * 
	 * @get '/users'
	 * 
	 * @param express.Request req 
	 * @param express.Response res 
	 */
	async index (req, res) {
		
		const users = await User.findAll ()

		return res.send (users)
	}

	/**
	 * Get a user with the given id
	 * 
	 * @get '/users/:id'
	 * 
	 * @param express.Request req 
	 * @param express.Response res 
	 */
	async show (req, res) {
		const { id } = req.params

		const user = await User.findByPk (id)

		if (!user) {
			return res.status (404).json ({ 
				message: 'Could not find user' 
			})
		}

		return res.send (user)
	}
	
	/**
	 * Create a new user with given datas 
	 * with the 'user' object in the request 
	 * body.
	 * 
	 * @post '/users'
	 * 
	 * @param express.Request req 
	 * @param express.Response res 
	 */
	async create (req, res) {

		const userDatas = usersController.params (req)

		const user = await User.create (userDatas)

		if (!user) {
			return res.status (500).json ({ 
				message: 'Could not create user' 
			})
		}

		return res.status(200).send (user)
	}

	/**
	 * Update a user havind the sent id 
	 * setting the given datas 
	 * in the 'user' object in the request 
	 * body.
	 * 
	 * @put '/users/:id'
	 * 
	 * @param express.Request req 
	 * @param express.Response res 
	 */
	async update (req, res) {
		const { id } = req.params

		const user = await User.findByPk (id)

		if (!user) {
			return res.status (404).json ({ 
				message: 'Could not find user' 
			})
		}

		const userDatas = usersController.params (req)

		user.set (userDatas)

		await user.save ();

		// await User.update(userDatas, {where: { id }})

		return res.send (user)
	}

	/**
	 * Delete the user with the given id
	 * 
	 * @delete '/users/:id'
	 * 
	 * @param express.Request req 
	 * @param express.Response res 
	 */
	async destroy (req, res) {
		const { id } = req.params

		const user = await User.findByPk (id)

		if (!user) {
			return res.status (404).json ({ 
				message: 'Could not find user' 
			})
		}

		await user.destroy ();

		return res.status (200).send (null)
	}

	static params ({ body: { user } }) {
		const paramsKeyList = ["name", "email", "gender", "phone", "birthday"]

		const paramsList = {}

		for (const paramsKey of paramsKeyList) {
			if (typeof user [paramsKey] !== typeof undefined) {
				paramsList [paramsKey] = user [paramsKey]
			}
		}

		if (paramsList.birthday) {
			paramsList.birthday = new Date (paramsList.birthday)
		}

		return paramsList
	}
}

module.exports = usersController
