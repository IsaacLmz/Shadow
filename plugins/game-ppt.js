let handler = async (m, { conn, text, command, usedPrefix, args }) => {
let pp = 'https://www.bighero6challenge.com/images/thumbs/Piedra,-papel-o-tijera-0003318_1584.jpeg'
if (!args[0]) return conn.sendHydrated(m.chat, '*PIEDRA, PAPEL, O TIJERA\n\nPUEDES USAR LOS BOTONES PARA JUGAR O TAMBIEN PUEDES USAR ESTOS COMANDOS:\n.ppt piedra\n.ppt papel\n.ppt tijera\n\nuse en minΓΊscula*', wm, pp, null, null, null, null, [
['πππππ§π π₯', `${usedPrefix + command} piedra`],
['πππ₯ππ‘ π', `${usedPrefix + command} papel`],
['πππππ§π βοΈ', `${usedPrefix + command} tijera`]
], m)
var astro = Math.random()
if (astro < 0.34) {
astro = 'piedra' 
} else if (astro > 0.34 && astro < 0.67) {
astro = 'tijera' 
} else {
astro = 'papel'
}
if (text == astro) {
global.db.data.users[m.sender].exp += 500
m.reply(`π° Empate!\n\n*ππ» Tu: ${text}\nππ» El Bot: ${astro}\nπ Premio +500 XP*`)
} else if (text == 'papel') {
if (astro == 'piedra') {
global.db.data.users[m.sender].exp += 1000
m.reply(`π₯³ TΓΊ ganas! π\n\n*ππ» Tu: ${text}\nππ» El Bot: ${astro}\nπ Premio +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`β οΈ TΓΊ pierdes! β\n\n*ππ» Tu: ${text}\nππ» El Bot: ${astro}\nβ Premio -300 XP*`)
}
} else if (text == 'tijera') {
if (astro == 'papel') {
global.db.data.users[m.sender].exp += 1000
m.reply(`π₯³ TΓΊ ganas! π\n\n*ππ» Tu: ${text}\nππ» Shadow: ${astro}\nπ Premio +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`β οΈ TΓΊ pierdes! β\n\n*ππ» Tu: ${text}\nππ» Shadow: ${astro}\nβ Premio -300 XP*`)
}
} else if (text == 'tijera') {
if (astro == 'papel') {
global.db.data.users[m.sender].exp += 1000
m.reply(`π₯³ TΓΊ ganas! π\n\n*ππ» Tu: ${text}\nππ» Shadow: ${astro}\nπ Premio +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`β οΈ TΓΊ pierdes! β\n\n*ππ» Tu: ${text}\nππ» Shadow: ${astro}\nβ Premio -300 XP*`)
}
} else if (text == 'papel') {
if (astro == 'piedra') {
global.db.data.users[m.sender].exp += 1000
m.reply(`π₯³ TΓΊ ganas! π\n\n*ππ» Tu: ${text}\nππ» Shadow: ${astro}\nπ Premio +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`β οΈ TΓΊ pierdes! β\n\n*ππ» Tu: ${text}\nππ» Shadow: ${astro}\nβ Premio -300 XP*`)
}
} else if (text == 'piedra') {
if (astro == 'tijera') {
global.db.data.users[m.sender].exp += 1000
m.reply(`π₯³ TΓΊ ganas! π\n\n*ππ» Tu: ${text}\nππ» Shadow: ${astro}\nπ Premio +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`β οΈ TΓΊ pierdes! β\n\n*ππ» Tu: ${text}\nππ» Shadow: ${astro}\nβ Premio -300 XP*`)
}
}}
handler.help = ['ppt']
handler.tags = ['games']
handler.command = /^(ppt)$/i
export default handler
