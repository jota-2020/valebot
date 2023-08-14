let handler = async (m, { conn, text}) => {

m.reply(`*╔═══════════════════════════*\n➢ *"${pickRandom(global.piropo)}"*\n*╚═══════════════════════════*`)
}
handler.tags = ['frases']
handler.command = ['numeros','num','numero','trafico','tráfico','monitoreo']
export default handler

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}

global.piropo = ["CALL CENTER 800 370 030 \n➢TRAFICO: wa.me/56995355239\n➢MONITOREO: wa.me/56957592341"]
