module.exports = async function () {
	const links = require(`${__dirname}/json/quotes.json`)
	const num = Math.floor(Math.random() * links.length)
	return links[num]["body"] + "\n- " + links[num]["author"]
	}