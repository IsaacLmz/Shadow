import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[ā] Ejemplo de uso: ${usedPrefix + command} Minecraft*`
const res = await googleImage(text)
let image = await res.getRandom()
let link = image
let captionn = `š *RESULTADO DE:* ${text}\nš *LINK:* ${link}\nš *BUSCADOR:* Google`
conn.sendButton(m.chat, captionn, wm, link, [['š SIGUIENTE š', `#imagen ${text}`]], m)}
handler.help = ['gimage <query>', 'imagen <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(gimage|image|imagen)$/i
export default handler
