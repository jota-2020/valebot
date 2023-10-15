import { sticker } from '../lib/sticker.js'
let handler = m => m
handler.all = async function (m, { conn }) {
let chat = global.db.data.chats[m.chat]

if (chat.audios && command && m.text.match(/(ship)/gi)) {    
let vn = './st/1_love.webp'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

return !0 }
export default handler
