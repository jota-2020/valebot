let handler = async(m, { conn, text, command }) => {
let yh = global.negro
let url = yh[Math.floor(Math.random() * yh.length)]
conn.sendMessage(m.chat, { image: { url: url }, caption: "Dark_vale" }, { quoted: m });
}
handler.command = /^(negro)$/i
handler.tags = ['anime']
handler.help = ['loli']
export default handler

global.negro = [
"https://telegra.ph/file/553e40b028cb4a63c64c6.jpg",
"https://telegra.ph/file/e3350a4c61119a6a62519.jpg",
"https://telegra.ph/file/3fe53f57440ac1385b5ca.jpg",
"https://telegra.ph/file/c08951881762770a0cd77.jpg",
"https://telegra.ph/file/78a919cbec9f1324aa0e8.jpg",
"https://telegra.ph/file/40e5bb09bbdab8d72a4b3.jpg",
"https://telegra.ph/file/8ff378b274ecdd5bccac4.jpg",

]
