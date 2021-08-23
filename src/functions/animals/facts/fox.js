module.exports = async function () {
	const fetch = require("node-fetch")
	
	// Some Random API
		var api1 = await fetch("https://some-random-api.ml/animal/fox").catch(() => "a")
		if (api1.status === 200) {
		api1 = await api1.json()
		const sra = api1.fact
		return sra;
}
	
	}