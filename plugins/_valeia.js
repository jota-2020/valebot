import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	
 let user = conn.getName(m.sender)
  if (!text) throw `✳️ Hola *${user}* Quieres platicar un rato? \nResponde usándo *${usedPrefix + command}* (texto) \n\n📌Ejemplo: *${usedPrefix + command}* Hola Bot`
  m.react('🗣️') 
  let res = await fetch(`https://api.simsimi.net/v2/?text=${text}&lc=es`)
  let json = await res.json()
  if (json.success) m.reply(json.success.replace('simsimi', 'Metro', 'vale', 'vale_ia').replace('simsimi', 'Metro', 'vale', 'vale_ia').replace('simsimi', 'Metro', 'vale', 'vale_ia'))
  else throw json
}
handler.help = ['bot']
handler.tags = ['fun']
handler.command = ['bot', 'vale'] 

export default handler
