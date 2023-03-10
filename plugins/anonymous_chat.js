async function handler(m, { command }) {
command = command.toLowerCase()
this.anonymous = this.anonymous ? this.anonymous : {}
switch (command) {
case 'next':
case 'leave': {
let room = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!room) return this.sendButton(m.chat, '*No estΓ‘s en un chat anΓ³nimo*\n\n*ΒΏQUIERES INICIAR UNO?*\n_DA CLICK EN EL SIGUIENTE BOTON_', author, null, [['πΈπ½πΈπ²πΈπ°π π²π·π°π π°π½πΎπ½πΈπΌπΎ', `.start`]], m)
m.reply('β Ok.. ha salido exitosamente')
let other = room.other(m.sender) 
if (other) await this.sendButton(other, '*El otro usuario decidio abandonar el chat*\n\n*ΒΏQuieres ir a otro chat?*\n_DA CLICK EN EL SIGUIENTE BOTON_', author, null, [['πΈπ½πΈπ²πΈπ°π π²π·π°π π°π½πΎπ½πΈπΌπΎ', `.start`]], m)
delete this.anonymous[room.id]
if (command === 'leave') break
}
case 'start': {
if (Object.values(this.anonymous).find(room => room.check(m.sender))) return this.sendButton(m.chat, '*[βππππβ] ππΎπ³π°ππΈπ° π΄πππ°π π΄π½ ππ½ π²π·π°π π°π½πΎπ½πΈπΌπΎ πΎ π΄ππΏπ΄ππ°π½π³πΎ π° πππ΄ πΎπππΎ ππππ°ππΈπΎ ππ΄ ππ½π° πΏπ°ππ° πΈπ½πΈπ²πΈπ°π*\n\n*ΒΏπππΈπ΄ππ΄π ππ°π»πΈπ π³π΄π» π²π·π°π π°π½πΎπ½πΈπΌπΎ?*\n_π³π° π²π»πΈπ²πΊ π΄π½ π΄π» ππΈπΆππΈπ΄π½ππ΄ π±πΎππΎπ½_', author, null, [['ππ°π»πΈπ π³π΄π» π²π·π°π π°π½πΎπ½πΈπΌπΎ', `.leave`]], m)
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
await this.sendButton(room.a, '*Se conecto exitosamente con un chat anonimo*', author, null, [['πΈπ π° πΎπππΎ π²π·π°π', `.next`]], m)
room.b = m.sender
room.state = 'CHATTING'
await this.sendButton(m.chat, '*Se conecto exitosamente con un chat anonimo*', author, null, [['πΈπ π° πΎπππΎ π²π·π°π', `.next`]], m)
} else {
let id = + new Date
this.anonymous[id] = {
id,
a: m.sender,
b: '',
state: 'WAITING',
check: function (who = '') {
return [this.a, this.b].includes(who)
},
other: function (who = '') {
return who === this.a ? this.b : who === this.b ? this.a : ''
},
}
await this.sendButton(m.chat, '*En espera de que un usuario use el comando para poder vincularlos.. esto puede demorar si desea salir\n*_haga click en el siguiente boton_*', author, null, [['ππ°π»πΈπ π³π΄π» π²π·π°π π°π½πΎπ½πΈπΌπΎ', `.leave`]], m)
}
break
}}}
handler.help = ['start', 'leave', 'next']
handler.tags = ['anonymous']
handler.command = ['start', 'leave', 'next']
handler.private = true
export default handler
