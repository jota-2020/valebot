let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/cl.m3u'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendFile(m.chat, { audio: { url: vn }, ptt: true, mimetype: 'audio/mpeg', fileName: `cl.m3u` }, { quoted: m })}
handler.customPrefix = /Iptv|iptv/
handler.command = /^(Iptv|iptv?$)/
export default handler

