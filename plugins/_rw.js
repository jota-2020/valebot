let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`Suerte!!`)}
handler.help = ['formarpareja']
handler.tags = ['main', 'fun']
handler.command = ['rw','rollwaifu']
handler.group = true
