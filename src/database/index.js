const Sequelize = require ('sequelize')

const databaseConfig = require ('../config/database')

const sequelize = new Sequelize (databaseConfig)

sequelize.authenticate().then(() => {
	// console.log ('Database connected..!')
}).catch(error => {
	// console.log (`Error while connecting to the database..! \n ${ error }`)
})

module.exports = sequelize
// 