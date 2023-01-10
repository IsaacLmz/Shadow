import fetch from 'node-fetch'
import { lyrics, lyricsv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
if (!teks) throw `*[❗] Uso correcto del comando ${usedPrefix + command} (Autor) (Cancion)*\n*Ejemplo:*\n*${usedPrefix + command} Beret Ojala*`
try {
const result = await lyricsv2(teks).catch(async _ => await lyrics(teks))
let res = await fetch(global.API('https://some-random-api.ml', '/lyrics', {
title: result.author + result.title}))
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.thumbnail.genius) throw json
let letratexto =`𝚃𝙸𝚃𝚄𝙻𝙾: *${result.title}*\n𝙰𝚄𝚃𝙾𝚁: *${result.author}*\n\n𝙻𝙴𝚃𝚁𝙰: ${result.lyrics}`.trim()
let linkresult = monospace + result.link + monospace
conn.sendButton(m.chat, letratexto, `\n𝚄𝚁𝙻: ${linkresult}\n${wm}`, json.thumbnail.genius, [['🎵 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚁 𝙰𝚄𝙳𝙸𝙾 🎵', `#play.1 ${text}`], ['🎥 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚁 𝚅𝙸𝙳𝙴𝙾 🎥', `#play.2 ${text}`]], m)
} catch {
await m.reply('*[❗] ERROR, POR FAVOR VUELVA A INTENTARLO*')}}
handler.help = ['lirik','letra'].map(v => v + ' <Apa>')
handler.tags = ['internet']
handler.command = /^(lirik|lyrics|lyric|letra)$/i
export default handler
let mono = '`' + '`' + '`'
global.monospace = mono
