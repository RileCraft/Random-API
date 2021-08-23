module.exports = async function (string) {
	const fetch = require("node-fetch")
	let url = "https://randomuser.me/api/"
	
	var body = await fetch(url)
	body = await body.json()
	let data = body.results[0]
	
	if (!string) throw("No option provided in the function")
	if (string === "gender" || string === "name" || string === "city" || string === "street" || string === "state" || string ===  "country" || string === "postcode" || string === "timezone" || string === "email" || string === "phone" || string === "photo" || string === "birthday" || string === "age") {
		
		let detail = data.dob.date.toString().split("-")
		let year = detail[0]
		let month = detail[1]
		let day = detail[2].toString().split("T")[0]
		const age = `${day}/${month}/${year}`
		
		if (string === "gender") return data.gender
		if (string === "name") return `${data.name.title}.${data.name.first} ${data.name.last}`
		if (string === "city") return data.location.city
		if (string === "street") return `Street ${data.location.street.number} ${data.location.street.name}`
		if (string === "state") return data.location.state
		if (string === "country") return data.location.country
		if (string === "postcode") return data.location.postcode
		if (string === "timezone") return data.location.timezone.description
		if (string === "email") return data.email
		if (string === "phone") return data.phone
		if (string === "photo") return data.picture.large
		if (string === "birthday") return age
		if (string === "age") return data.dob.age
		
		} else throw("Invalid option provided in function. Check https://npmjs.com/@rilecraft/random-api for options")
	}