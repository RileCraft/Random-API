module.exports = async function () {
	const fetch = require("node-fetch")
	function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const number = random(1, 101)
const num = random(1, 20)

// Some Random API
		var api1 = await fetch("https://some-random-api.ml/animu/hug").catch(() => "a")
		if (api1.status === 200) {
		api1 = await api1.json()
		const sra = api1.link
		return sra;
}

// NoAPIKey
		var api2 = await fetch("http://no-api-key.com/api/v1/hug").catch(() => "a")
		if (api2.status === 200) {
		api2 = await api2.json()
		const npak = api2.image
		return npak;
}

	// AceGifs
		var api3 = await fetch(`https://acegif.com/wp-content/gif/anime-hug-${number}.gif`).catch(() => "a")
		if (api3.status === 200) {
		return `https://acegif.com/wp-content/gif/anime-hug-${number}.gif`;
}
	
	// GifBurg
		var api4 = await fetch(`https://gifburg.com/images/gifs/anime-hug/webp/00${num}.webp`).catch(() => "a")
		if (api4.status === 200) {
		return `https://gifburg.com/images/gifs/anime-hug/webp/00${num}.webp`;
}
	
	}