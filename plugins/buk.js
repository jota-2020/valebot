import { googleIt } from '@bochilteam/scraper'
import axios from 'axios' 
let handler = async (m, { conn, command, args }) => {
const fetch = (await import('node-fetch')).default
let text = args.join` `
if (!text) return conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 NUMERO DE BUS TURBUS QUE DESEE BUSCAR*', m)
let url = 'https://gtppersonas.buk.cl/users/sign_in#liquidaciones/188818'
let search = await googleIt(text)
let msg = search.articles.map(({ title, url, description }) => { return `*${title}*\n_${url}_\n_${description}_` }).join('\n\n')
try {
//let ss = `https://image.thum.io/get/width/1200/height/900/crop/800/${url}`
await conn.sendFile(m.chat, ss, 'error.png', url + '\n\n' + msg, m)
} catch {
m.reply(msg)
}}
handler.help = ['google', 'googlef'].map(v => v + ' <pencarian>')
handler.tags = ['internet']
handler.command = /^buk|liquidacion|liquidaciones|vacaciones|permiso|permisos?$/i
export default handler
