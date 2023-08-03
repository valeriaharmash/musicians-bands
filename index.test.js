const { db } = require('./db')
const { Band, Musician, Song } = require('./index')

describe('Band, Musician, and Song Models', () => {
	/**
	 * Runs the code prior to all tests
	 */
	beforeAll(async () => {
		// the 'sync' method will create tables based on the model class
		// by setting 'force:true' the tables are recreated each time the
		// test suite is run
		await db.sync({ force: true })
	})

	test('can create a Band', async () => {
		const testBand = await Band.create({
			name: 'The Pussycat Dolls',
			genre: 'pop',
			showCount: 10
		})
		expect(testBand.name).toBe('The Pussycat Dolls')
		expect(testBand.genre).toBe('pop')
		expect(testBand.showCount).toBe(10)
	})

	test('can create a Song', async () => {
		const testSong = await Song.create({
			title: 'Fun Song',
			year: 1997,
			length: 5
		})
		expect(testSong.title).toBe('Fun Song')
		expect(testSong.year).toBe(1997)
		expect(testSong.length).toBe(5)
	})

	test('can create a Musician', async () => {
		const testMusician = await Musician.create({
			name: 'John Doe',
			instrument: 'drums'
		})
		expect(testMusician.name).toBe('John Doe')
		expect(testMusician.instrument).toBe('drums')
	})

	test('can update a Band', async () => {
		const testBand = await Band.create({
			name: 'The Pussycat Dolls',
			genre: 'pop',
			showCount: 10
		})

		testBand.update({ name: 'Red Hot Chilly Peppers' })
		expect(testBand.name).toBe('Red Hot Chilly Peppers')
	})

	test('can update a Song', async () => {
		const testSong = await Song.create({
			title: 'Fun Song',
			year: 1997,
			length: 5
		})

		testSong.update({ title: 'Sad Song' })
		expect(testSong.title).toBe('Sad Song')
	})

	test('can update a Musician', async () => {
		const testMusician = await Musician.create({
			name: 'John Doe',
			instrument: 'drums'
		})

		testMusician.update({ name: 'Frank Sinatra' })
		expect(testMusician.name).toBe('Frank Sinatra')
	})

	test('can delete a Band', async () => {
		const testBand = await Band.create({
			name: 'The Pussycat Dolls',
			genre: 'pop',
			showCount: 5
		})

		const allBandsBefore = await Band.findAll()
		expect(allBandsBefore.length).toEqual(3)

		await testBand.destroy()

		const allBands = await Band.findAll()
		expect(allBands.length).toEqual(2)
	})

	test('can delete a Musician', async () => {
		const testMusician = await Musician.create({
			name: 'John Doe',
			instrument: 'drums'
		})
		const allMusiciansBefore = await Musician.findAll()
		expect(allMusiciansBefore.length).toEqual(3)

		await testMusician.destroy()

		const allMusicians = await Musician.findAll()
		expect(allMusicians.length).toEqual(2)
	})

	test('can delete a Song', async () => {
		const testSong = await Song.create({
			title: 'Fun Song',
			year: 1997,
			length: 5
		})
		const allSongsBefore = await Song.findAll()
		expect(allSongsBefore.length).toEqual(3)

		await testSong.destroy()

		const allSongs = await Song.findAll()
		expect(allSongs.length).toEqual(2)
	})
})
