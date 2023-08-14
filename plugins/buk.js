let handler = async (m, { conn, text}) => {

m.reply(`*╔═══════════════════════════*\n➢ *"${pickRandom(global.numeros)}"*\n*╚═══════════════════════════*`)
}
handler.tags = ['frases']
handler.command = ['buk','vacaciones','permiso','liquidacion','liquidaciones','rrhh']
export default handler

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}

global.numeros = ["https://gtppersonas.buk.cl/users/sign_in#liquidaciones/188818"]
