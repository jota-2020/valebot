import { sticker } from '../lib/sticker.js'
let handler = m => m
handler.all = async function (m, { conn }) {
let chat = global.db.data.chats[m.chat]

if (chat.audios && m.text.match(/(iptv|listaiptv|tv|cable)/gi)) {    
let vn = './src/cl.m3u'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, { document: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

return !0 }
export default handler*/


  
