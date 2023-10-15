let handler = async(m, { conn, text, command }) => {
let yh = global.ship
let love = `*Shipeados*
===========================
= *❤️El nombre del ship es ${text}*
=
= *❤️La compatibilidad es de un ${Math.floor(Math.random() * 100)}%*
===========================
`.trim()
let url = yh[Math.floor(Math.random() * yh.length)]
conn.sendMessage(m.chat, { image: { url: url }, caption: "*"},love, { quoted: m });
}
handler.command = /^(shop)$/i
handler.tags = ['anime']
handler.help = ['loli']
export default handler

global.ship = [
"https://telegra.ph/file/9720e672d4013b367dd9f.jpg",
"https://telegra.ph/file/a082dc8c30501c7d131ce.jpg",
"https://telegra.ph/file/f0da437b40b3172dddc1e.jpg",
"https://telegra.ph/file/8ce7701cafdd85afe0341.jpg",
"https://telegra.ph/file/460d53dcfeb062ebc1f0a.jpg",
"https://telegra.ph/file/ecd05c24a20e39fe4b342.jpg",

]
