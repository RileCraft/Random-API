module.exports = async function () {
	function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
	
	const links = require(`${__dirname}/json/quotes.json`)
	const num = Math.floor(Math.random() * links.length)
	return links[num]["body"] + "\n- " + links[num]["author"]
	}