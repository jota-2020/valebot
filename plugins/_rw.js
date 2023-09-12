let toM = a => '@' + a.split('@')[0]
let user = global.db.data.users[m.sender]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.${taguser}
m.reply(`*${toM(a)} ,Suerte!!*`)}
handler.help = ['formarpareja']
handler.tags = ['main', 'fun']
handler.command = ['rw','rollwaifu']
handler.group = true
export default handler
