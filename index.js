'use strict'

const https = require('https')
const agent = new https.Agent({ keepAlive: true, maxFreeSockets: 5 })
const botgram = require('botgram')
const bot = botgram(process.env.TELEGRAM_TOKEN, { agent: agent })

bot.all((msg, reply) => {
	if (msg.from.id === parseInt(process.env.USER_ID)) {
		reply.text('Et dius Alba i ets una gateta molt bonica')
	} else if (msg.from.id === parseInt(process.env.CREATOR_ID)) {
		reply.text('Et dius Eli i ets una gateta molt dolça')
	}
})

bot.stop()

exports.telegram = (req, res) => {
	bot.set('username', 'alba_cutebot')
	bot.processUpdate(req.body)
	const response = {
		statusCode: 200,
		body: JSON.stringify('Cutebot v1.1.0')
	}

	res.send(response)
}
