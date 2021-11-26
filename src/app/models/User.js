import { Model } from 'sequelize'

export default class User extends Model {
	// user model
	static initialize () {
		console.log ('Createing User')
	}
}
