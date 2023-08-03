const { db, DataTypes } = require('../db')

let Musician = db.define('Musician', {
	name: DataTypes.STRING,
	instrument: DataTypes.STRING
})

module.exports = {
	Musician
}
