const { Band } = require('./models/Band')
const { Musician } = require('./models/Musician')
const { Song } = require('./models/Song')

Song.belongsToMany(Band, { through: 'BandSong' })
Band.belongsToMany(Song, { through: 'BandSong' })

Band.hasMany(Musician)
Musician.belongsTo(Band)

module.exports = {
	Band,
	Musician,
	Song
}
