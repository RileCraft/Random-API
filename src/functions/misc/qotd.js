module.exports = async function () {
	const links = require(`${__dirname}/json/qotd.json`)
	const num = Math.floor(Math.random() * links.length)
	return links[num];
	}