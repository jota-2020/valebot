let handler = async (m, { conn, command, text, }) => {
let love = `*Shipeados*
===========================
=*❤️El nombre del ship es ${text}*
=
=*❤️La compatibilidad es de un ${Math.floor(Math.random() * 100)}%*
===========================
`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}

handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(ship)$/i
export default handler

