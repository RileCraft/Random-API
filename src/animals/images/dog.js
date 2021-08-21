module.exports = async function() {
		const fetch = require("node-fetch")
		// Some Random API
		var api1 = await fetch("https://some-random-api.ml/animal/dog").catch(() => "a")
		if (api1.status === 200) {
		api1 = await api1.json()
		const sra = api1.image
		return sra;
}
		
		// Dog CEO API
		var api2 = await fetch("https://dog.ceo/api/breeds/image/random").catch(() => "a")
		if (api2.status === 200) {
		api2 = await api2.json()
		const dogceo = api2.message
		return dogceo;
		}
		
		//PopCatDev API
		var api3 = await fetch("https://api.popcatdev.repl.co/dog").catch(() => "a")
		if (api3.status === 200) {
			return "https://api.popcatdev.repl.co/dog";
			}
			
			//No API Key
			var api4 = await fetch("http://no-api-key.com/api/v1/animals/dog").catch(() => "a")
			if (api4.status === 200) {
				api4 = await api4.json()
		const nak = api4.image
		return nak;
				}
				
				// Xenith API
				var api5 = await fetch("https://api.xenith.pl/piesapi").catch(() => "a")
		if (api5.status === 200) {
			return "https://api.xenith.pl/piesapi";
			}
}