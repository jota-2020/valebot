import fetch from "node-fetch"
let handler = async (m, { conn, text }) => {  
  let user = conn.getName(m.sender)
  if (!text) throw `✳️ Hola *${user}* Quieres platicar un rato? \nResponde usándo *${usedPrefix + command}* (texto) \n\n📌Ejemplo: *${usedPrefix + command}* Hola Bot`
  m.react('🗣️') 
  let res = await fetch(`https://api.simsimi.net/v2/?text=${text}&lc=es`)
  let json = await res.json()
  if (json.success) m.reply(json.success.replace('vale', 'valeria').replace('vale', 'valeria').replace('vale', 'valeria'))
  else throw json

}
handler.command = /^(bot|vale|valeria|vale_ia|ia_vale|iv)$/i
export default handler
