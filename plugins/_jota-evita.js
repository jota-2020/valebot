let toM = a => '@' + a.split('@')[0]
let toM2 = a => '@56932025033'[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`*${toM(a)}, DEBERIAS DARLE UNA MAMADA A ${toM2(b)}, DE SEGURO TE LO AGRADECERÁ 😏🥵*`, null, {
mentions: [a, b]
})}
handler.help = ['formarpareja']
handler.tags = ['main', 'fun']
handler.command = ['evita','eva']
handler.group = true
export default handler
