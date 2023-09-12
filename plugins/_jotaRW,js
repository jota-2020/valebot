import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn }) => {
const dir = ['https://media.tenor.com/CMwWV9tBMboAAAAC/rem-re-zero.gif', 'https://media.tenor.com/GOywRSKoo2oAAAAC/red.gif', 'https://media.tenor.com/VXtAtV5csL4AAAAd/osaco.gif'];  
let img = dir[Math.floor(Math.random() * dir.length)]
//let stiker = await sticker(img, false, global.packname, global.author) 
await conn.sendFile(m.chat, img, 'error.webp', '', m, { asSticker: true })
}
handler.command = ['gw', 'jw', 'givewaifu'] 
export default handler
