if (command == 'evita') {
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
