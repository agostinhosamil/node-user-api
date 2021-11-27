module.exports = {
	username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || "beeleads-test",
  host: 		process.env.DB_HOST || "localhost",
	dialect:  process.env.DB_TYPE || 'mysql',

	define: {
		timestamps: true
	}
}
