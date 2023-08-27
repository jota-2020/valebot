let handler = m => m
handler.before = async function (m, {conn, isAdmin, isBotAdmin, isOwner, isROwner} ) {
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[conn.user.jid] || {}
if (isBotAdmin && chat.antipe && !isAdmin && !isOwner && !isROwner && bot.restrict) {
		
if (m.sender.startsWith('51' || '51')) {
m.reply(`*[❗] ᴇɴ ᴇsᴛᴇ ɢʀᴜᴘᴏ ɴᴏ sᴇ ᴘᴇʀᴍɪᴛᴇɴ peruanos, ᴘᴏʀ ʟᴏ ϙᴜᴇ sᴇ ᴛᴇ sᴀᴄᴀʀᴀ ᴅᴇʟ ɢʀᴜᴘᴏ*`)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return 
}
  
}}
export default handler
