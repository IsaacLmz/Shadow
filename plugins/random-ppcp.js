import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
let res = await fetch(`https://api.lolhuman.xyz/api/random/ppcouple?apikey=${lolkeysapi}`)
if (res.status != 200) throw await res.text()
let json = await res.json()
if (!json.status) throw json
conn.sendButton(m.chat, 'CHICA CUTE', wm, json.result.female, [['🔄 SIGUIENTE 🔄', `/${command}`]], m)
conn.sendButton(m.chat, 'CHICO CUTE', wm, json.result.male, [['🔄 SIGUIENTE 🔄', `/${command}`]], m)
}
handler.help = ['ppcouple']
handler.tags = ['internet']
handler.command = /^(ppcp|ppcouple)$/i
export default handler
