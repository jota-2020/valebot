let handler = async (m, { conn, text}) => {

m.reply(`*╔═══════════════════════════*\n➢ *"${pickRandom(global.piropo)}"*\n*╚═══════════════════════════*`)
  m.reply(`*╔═══════════════════════════*\n➢ *ALL CENTER 800 370 030➢TRAFICO: wa.me/56995355239➢MONITOREO: wa.me/56957592341*╚═══════════════════════════*`)
}
handler.tags = ['frases']
handler.command = ['numeros']
export default handler

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}

global.piropo = ["CALL CENTER 800 370 030➢TRAFICO: wa.me/56995355239➢MONITOREO: wa.me/56957592341", "CALL CENTER 800 370 030➢TRAFICO: wa.me/56995355239➢MONITOREO : wa.me/56957592341"]
