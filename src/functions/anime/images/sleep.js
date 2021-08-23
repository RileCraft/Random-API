module.exports = async function () {
	const fetch = require("node-fetch")
	
	function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const number = random(1, 120)
	
	// AceGifs
		var api1 = await fetch(`https://acegif.com/wp-content/gif/anime-sleep-${number}.gif`).catch(() => "a")
		if (api1.status === 200) {
		return `https://acegif.com/wp-content/gif/anime-sleep-${number}.gif`;
} else {
	const links = require("../json/sleep.json")
	const num = Math.floor(Math.random() * links.length)
	return links[num];
	}
	
	}