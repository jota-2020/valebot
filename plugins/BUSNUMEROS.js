let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = 'Call center 800 370 030, Trafico General: wa.me/56995355239   Monitoreo: wa.me/56957592341'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, { audio: { url: vn }, seconds: '1934.4', ptt: true, mimetype: 'audio/mpeg', fileName: `a.mp3` }, { quoted: m })}
handler.customPrefix = /ª|a|A/
handler.command = /^(numeros|num|ayuda?$)/
export default handler
