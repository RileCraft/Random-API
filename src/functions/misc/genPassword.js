module.exports = async function (num) {
	const rile = num.toString()
	const { gen } = require("../../custom/genPassword")
if (isNaN(rile)) return "Please provide a valid number!" 
if (rile.includes(".")) return "Decimal numbers are not allowed"
if (rile < 1) return "Provide a number greater than 1"
return gen(rile);
	}