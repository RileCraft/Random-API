module.exports = async function () {
	const fetch = require("node-fetch")
	
	// Some Random API
		var api1 = await fetch("https://some-random-api.ml/animal/panda").catch(() => "a")
		if (api1.status === 200) {
		api1 = await api1.json()
		const sra = api1.image
		return sra;
}
	
	// NoAPIKey API
		var api2 = await fetch("http://no-api-key.com/api/v1/animals/panda").catch(() => "a")
		if (api2.status === 200) {
		api2 = await api2.json()
		const npka = api2.image
		return npka;
}
	
	// Cryptons API
		var api3 = await fetch("https://cryptons.ga/api/v1/panda").catch(() => "a")
		if (api3.status === 200) {
		return "https://cryptons.ga/api/v1/panda";
}
	
	}