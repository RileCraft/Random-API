module.exports = async function() {
	const fetch = require("node-fetch")
	
	// Some Random API
		var api1 = await fetch("https://some-random-api.ml/animal/cat").catch(() => "a")
		if (api1.status === 200) {
		api1 = await api1.json()
		const sra = api1.image
		return sra;
}
	
	// The Cat API
		var api2 = await fetch("https://api.thecatapi.com/v1/images/search").catch(() => "a")
		if (api2.status === 200) {
		api2 = await api2.json()
		const tca = api2.url
		return tca;
}
	
	// No API Key API
		var api3 = await fetch("http://no-api-key.com/api/v1/animals/cat").catch(() => "a")
		if (api3.status === 200) {
		api3 = await api3.json()
		const nak = api3.image
		return nak;
}
	
	// CatAAS API
		var api4 = await fetch("https://cataas.com/cat").catch(() => "a")
		if (api4.status === 200) {
		return "https://cataas.com/cat";
}
	
	// PoPCatDev API
		var api5 = await fetch("https://api.popcatdev.repl.co/cat").catch(() => "a")
		if (api5.status === 200) {
		return "https://api.popcatdev.repl.co/cat";
}
	
	// AWS
		var api6 = await fetch("http://aws.random.cat/meow").catch(() => "a")
		if (api6.status === 200) {
		api6 = await api6.json()
		const aws = api6.file
		return aws;
}
	
	}