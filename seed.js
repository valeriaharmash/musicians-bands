const { db } = require('./db')

const { Band } = require('./models/Band')
const { Musician } = require('./models/Musician')
const { Song } = require('./models/Song')

const seed = async () => {
	try {
		await db.sync({ force: true })

		await Band.bulkCreate([
			{
				name: 'The Door',
				genre: 'Rock',
				showCount: 5
			},
			{
				name: 'The Beach Boys',
				genre: 'Pop',
				showCount: 3
			},
			{
				name: 'Rolling Stones',
				genre: 'Indie',
				showCount: 8
			}
		])

		await Musician.bulkCreate([
			{
				name: 'Elton John',
				instrument: 'Piano',
				bandId: 1
			},
			{
				name: 'Jimmy Hendrix',
				instrument: 'Guitar',
				bandId: 2
			},
			{
				name: 'Johnny Cash',
				instrument: 'Guitar',
				bandId: 3
			}
		])

		await Song.bulkCreate([
			{
				title: 'Smells Like Teen Spirit',
				year: 1991,
				length: 4.39,
				bandId: 1
			},

			{
				title: 'No Woman No Cry',
				year: 1992,
				length: 3.29,
				bandId: 2
			},

			{
				title: 'Dancing Queen',
				year: 1995,
				length: 3,
				bandId: 3
			}
		])

		console.log('Seeding success!')
		db.close()
	} catch (err) {
		console.error('Oh no! Something went wrong!')
		console.error(err)
		db.close()
	}
}

seed()
