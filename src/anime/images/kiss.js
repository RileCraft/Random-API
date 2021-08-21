module.exports = async function () {
	function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
	
	const links = require("../json/kiss.json")
	const num = Math.floor(Math.random() * links.length)
	return links[num];
	}