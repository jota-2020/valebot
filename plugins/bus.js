import { googleIt } from '@bochilteam/scraper'
import axios from 'axios' 
let handler = async (m, { conn, command, args }) => {
const fetch = (await import('node-fetch')).default
let text = args.join` `
if (!text) return conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 NUMERO DE BUS TURBUS QUE DESEE BUSCAR*', m)
let url = 'https://busqueda.turbus.cl/Turbusqueda-war/centerzone.jsp?zone=3&idbus=' + encodeURIComponent(text)
let search = await googleIt(text)
let msg = search.articles.map(({ title, url, description }) => { return `*${title}*\n_${url}_\n_${description}_` }).join('\n\n')
try {
let ss = `https://image.thum.io/get/fullpage/${url}`
await conn.sendFile(m.chat, ss, 'error.png', url + '\n\n' + msg, m)
} catch {
m.reply(msg)
}}
handler.help = ['google', 'googlef'].map(v => v + ' <pencarian>')
handler.tags = ['internet']
handler.command = /^bus|turbus?$/i
export default handler

