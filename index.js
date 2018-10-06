'use strict'

require('dotenv').config()
const https = require('https')
const agent = new https.Agent({ keepAlive: true, maxFreeSockets: 5 })
const botgram = require('botgram')
const bot = botgram(process.env.TELEGRAM_TOKEN, { agent: agent })

bot.all((msg, reply) => {
	if (msg.from.id === parseInt(process.env.USER_ID)) {
		reply.text('Et dius Alba i ets una gateta molt bonica')
	}
})
