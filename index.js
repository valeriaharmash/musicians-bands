const { Band } = require('./models/Band')
const { Musician } = require('./models/Musician')
const { Song } = require('./models/Song')

Song.belongsTo(Band)
Band.hasMany(Song)

Musician.belongsTo(Band)
Band.hasMany(Musician)

module.exports = {
	Band,
	Musician,
	Song
}
