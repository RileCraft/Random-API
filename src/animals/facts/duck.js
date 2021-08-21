module.exports = async function () {
	const facts = require(__dirname + "/duck.json")
	const number = Math.floor(Math.random() * facts.length)
	return facts[number];
	}