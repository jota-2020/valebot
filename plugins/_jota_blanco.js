let handler = async(m, { conn, text, command }) => {
let yh = global.loli
let url = yh[Math.floor(Math.random() * yh.length)]
conn.sendMessage(m.chat, { image: { url: url }, caption: "Dark_vale" }, { quoted: m });
}
handler.command = /^(blanco)$/i
handler.tags = ['anime']
handler.help = ['loli']
export default handler

global.loli = [
"https://telegra.ph/file/9720e672d4013b367dd9f.jpg",
"https://telegra.ph/file/a082dc8c30501c7d131ce.jpg",
"https://telegra.ph/file/f0da437b40b3172dddc1e.jpg",
"https://telegra.ph/file/8ce7701cafdd85afe0341.jpg",

]
