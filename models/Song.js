const { db, DataTypes } = require('../db')

let Song = db.define('Song', {
	title: DataTypes.STRING,
	year: DataTypes.INTEGER,
	length: DataTypes.INTEGER
})

module.exports = {
	Song
}
