async function handler(m, { usedPrefix }) {
let users = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]  
const message = users.map(v => '👉 wa.me/' + v.jid.replace(/[^0-9]/g, '') + `?text=${usedPrefix}estado\n(${v.name})\n\n`).join('\n')
const replyMessage = (message.length === 0) ? "*Call center 800 370 030*" : message
await m.reply( '*Call center 800 370 030, Trafico General: wa.me/56995355239   Monitoreo: wa.me/56957592341*')
await m.reply(replyMessage.trim())}
handler.command =['num','numeros','ayuda']
handler.tags = ['numero']
export default handler
