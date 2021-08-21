module.exports = async function () {
	const fetch = require('node-fetch')
	
	// Random-D.UK
		var api1 = await fetch("https://random-d.uk/api/v2/random").catch(() => "a")
		if (api1.status === 200) {
		api1 = await api1.json()
		const rduk = api1.url
		return rduk;
}
	
	}