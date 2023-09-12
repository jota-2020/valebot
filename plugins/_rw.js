/*let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`#rw`})}
handler.help = ['formarpareja']
handler.tags = ['main', 'fun']
handler.command = ['rw','rollwaifu']
handler.group = true
export default handler*/

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/a.mp3'
m.reply(`#rw`})}
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, { audio: { url: vn }, seconds: '1934.4', ptt: true, mimetype: 'audio/mpeg', fileName: `a.mp3` }, { quoted: m })}
handler.customPrefix = /prueba/
handler.command = /^(prueba)/
export default handler
