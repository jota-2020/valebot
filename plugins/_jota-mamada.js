import { sticker } from '../lib/sticker.js'
let handler = m => m
handler.all = async function (m, { conn }) {
let chat = global.db.data.chats[m.chat]


let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`*${toM(a)}, LE DIO UN BESO A EVITA PROVOCANDO QUE SE MOJE🥵*`, null, {
mentions: [a, b]
})}

if (chat.audios && m.text.match(/(evi|eva|evita|darness)/gi)) {    
let vn = './st/emo3.webp'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})} 
    
handler.help = ['formarpareja']
handler.tags = ['main', 'fun']
handler.command = ['darmamada','mamadas']
handler.group = true
export default handler

