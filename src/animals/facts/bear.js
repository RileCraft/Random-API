module.exports = async function () {
	const fetch = require("node-fetch")
	
	// NoAPIKey
		var api1 = await fetch("http://no-api-key.com/api/v1/animals/bear").catch(() => "a")
		if (api1.status === 200) {
		api1 = await api1.json()
		const npak = api1.fact
		return npak;
}
	}