module.exports = async function () {
	const fetch = require("node-fetch")
	
	// Some Random API
		var api1 = await fetch("https://some-random-api.ml/animal/cat").catch(() => "a")
		if (api1.status === 200) {
		api1 = await api1.json()
		const sra = api1.fact
		return sra;
}
	
	// NoAPIKey
		var api2 = await fetch("http://no-api-key.com/api/v1/animals/cat").catch(() => "a")
		if (api2.status === 200) {
		api2 = await api2.json()
		const npak = api2.fact
		return npak;
}
	
	}