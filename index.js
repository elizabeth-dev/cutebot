'use strict'

require('dotenv').config()
const https = require('https')
const agent = new https.Agent({ keepAlive: true, maxFreeSockets: 5 })
const botgram = require('botgram')
const bot = botgram(process.env.TELEGRAM_TOKEN, { agent: agent })

const CREATOR_ID = parseInt(process.env.CREATOR_ID)
const USER_ID = parseInt(process.env.USER_ID)

bot.all((msg, reply) => {
	if (msg.from.id === USER_ID) {
		reply.text('Et dius Alba i ets una gateta molt bonica')
	} else if (msg.from.id === CREATOR_ID) {
		reply.text('Et dius Eli i ets una gateta molt dolça')
	}
})
