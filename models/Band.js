const { db, DataTypes } = require('../db.js')

const Band = db.define('Band', {
	name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	genre: {
		type: DataTypes.STRING,
		allowNull: false
	},
	showCount: {
		type: DataTypes.INTEGER,
		allowNull: false
	}
})

module.exports = {
	Band
}
