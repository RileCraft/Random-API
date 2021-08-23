module.exports = async function (array) {
	const value = Math.floor(Math.random() * array.length)
	return array[value];
	}