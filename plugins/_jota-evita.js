import axios from "axios"
import fetch from 'node-fetch'
let handler = async (m, {command, conn}) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 +𝟷𝟾 𝙴𝚂𝚃𝙰𝙽 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾𝚂 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾, 𝚂𝙸 𝙴𝚂 𝙰𝙳𝙼𝙸𝙽 𝚈 𝙳𝙴𝚂𝙴𝙰 𝙰𝙲𝚃𝙸𝚅𝙰𝚁𝙻𝙾𝚂 𝚄𝚂𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 #enable modohorny*'


let resError = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/imagenlesbians.json`)).data   
let res = await conn.getFile(`https://api-fgmods.ddns.net/api/nsfw/lesbian?apikey=fg-dylux`).data
if (res == '' || !res || res == null) res = await resError[Math.floor(resError.length * Math.random())]  
conn.sendMessage(m.chat, { image: { url: res }, caption: `_${command}_`.trim() }, { quoted: m })}  


let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`*${toM(a)}, LE DIO UN BESO A EVITA PROVOCANDO QUE SE MOJE🥵😏🥵*`, null, {
mentions: [a, b]
})} 
handler.help = ['formarpareja']
handler.tags = ['main', 'fun']
handler.command = ['evita','eva','evi','darkness']
handler.group = true
export default handler
