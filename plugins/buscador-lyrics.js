import fetch from 'node-fetch'
import { lyrics, lyricsv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
if (!teks) throw `*[ā] Uso correcto del comando ${usedPrefix + command} (Autor) (Cancion)*\n*Ejemplo:*\n*${usedPrefix + command} Beret Ojala*`
try {
const result = await lyricsv2(teks).catch(async _ => await lyrics(teks))
let res = await fetch(global.API('https://some-random-api.ml', '/lyrics', {
title: result.author + result.title}))
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.thumbnail.genius) throw json
let letratexto =`TITULO: *${result.title}*\nAUTOR: *${result.author}*\n\nLETRA: ${result.lyrics}`.trim()
let linkresult = MONOSPACE + result.link + monospace
conn.sendButton(m.chat, letratexto, `\nššš»: ${linkresult}\n${wm}`, json.thumbnail.genius, [['šµ DESCARGAR AUDIO šµ', `#play.1 ${text}`], ['š„ DESCARGAR VIDEO š„', `#play.2 ${text}`]], m)
} catch {
await m.reply('*[ā] ERROR, POR FAVOR VUELVA A INTENTARLO*')}}
handler.help = ['lirik','letra'].map(v => v + ' <Apa>')
handler.tags = ['internet']
handler.command = /^(lirik|lyrics|lyric|letra)$/i
export default handler
let mono = '`' + '`' + '`'
global.monospace = mono
