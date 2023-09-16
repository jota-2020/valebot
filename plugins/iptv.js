import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn }) => {
const dir = ['https://github.com/jota-2020/valebot/blob/main/src/cl.m3u'];  
let img = dir[Math.floor(Math.random() * dir.length)]
//let stiker = await sticker(img, false, global.packname, global.author) 
await conn.sendFile(m.chat, img, 'error.webp', '', m, { asSticker: true })
}
handler.command = ['iptv', 'tv', 'listaiptv'] 
export default handler
