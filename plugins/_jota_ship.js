let handler = async (m, { conn, command, text, }) => {
let love = `*Shipeados*
=
*❤️El nombre del ship es ${text}*
=
*❤️La compatibilidad es de un ${Math.floor(Math.random() * 100)}%*

`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}

let yh = global.shipeados
let url = yh[Math.floor(Math.random() * yh.length)]
conn.sendMessage(m.chat, { image: { url: url }, caption: "white_vale" }, { quoted: m });
}

global.shipeados = [
"https://telegra.ph/file/9720e672d4013b367dd9f.jpg",
"https://telegra.ph/file/a082dc8c30501c7d131ce.jpg",
"https://telegra.ph/file/f0da437b40b3172dddc1e.jpg",
"https://telegra.ph/file/8ce7701cafdd85afe0341.jpg",
"https://telegra.ph/file/460d53dcfeb062ebc1f0a.jpg",
"https://telegra.ph/file/ecd05c24a20e39fe4b342.jpg",

]
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(ship)$/i
export default handler

