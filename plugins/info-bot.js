import fs from "fs"
let handler = m => m
handler.all = async function (m) {
let vn = './media/bot.mp3'
let chat = global.db.data.chats[m.chat]
if (/^bot$/i.test(m.text) && !chat.isBanned) { 
conn.sendPresenceUpdate('recording', m.chat)    
conn.sendButton(m.chat, '*Hola, como te puedo ayudar?*', wm, [['πΌπ΄π½π π³π΄ π²πΎπΌπ°π½π³πΎπ', `#menu`]], 'conversation', { sendEphemeral: true, quoted: m })
conn.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', seconds: '4556', ptt: true }, { quoted: m })      
}
return !0
}
export default handler
