let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`*${toM(a)}, LE DIO UNA MAMADA A ${toM(a)}, PROVOCANDO UNA ERECCION DE PEZON 🥵*`, null, {
mentions: [a, b]
})}
handler.help = ['formarpareja']
handler.tags = ['main', 'fun']
handler.command = ['darmamada','mamadas']
handler.group = true
export default handler

