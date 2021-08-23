module.exports = async function () {
	const reply = require(`${__dirname}/json/8ball.json`)
	const num = Math.floor(Math.random() * reply.length)
	return reply[num];
	}