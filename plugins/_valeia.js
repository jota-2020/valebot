import fetch from "node-fetch"
let handler = async (m, { conn, text }) => {  
let user = conn.getName(m.sender)
  if (!text) throw `✳️ Hola *${user}* Quieres platicar un rato? \nResponde usándo *${usedPrefix + command}* (texto) \n\n📌Ejemplo: *${usedPrefix + command}* Hola Bot`
  m.react('🗣️') 
  let res = await fetch(`https://api.simsimi.net/v2/?text=${text}&lc=es`)
  let json = await res.json()
  if (json.success) m.reply(json.success.replace('vale', 'valeria').replace('iav', 'valebot').replace('bot', 'vale_ia'))
  else throw json
}

async function getOpenAIChatCompletion(texto) {
  const openaiAPIKey = global.openai_key
  let chgptdb = global.chatgpt.data.users[m.sender]
  chgptdb.push({ role: 'user', content: texto })
  const url = "https://api.openai.com/v1/chat/completions"
  const headers = { "Content-Type": "application/json", "Authorization": `Bearer ${openaiAPIKey}` };
  const data = { "model": "gpt-3.5-turbo", "messages": [{ "role": "system", "content": sistema1 }, ...chgptdb, ]};
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Error al obtener respuesta de OpenAI")
    }
    const result = await response.json()
    const finalResponse = result.choices[0].message.content
    return finalResponse
  } catch (error) {
    console.error("Error, vuelva a intentarlo:", error)
    return null;
  }
}

let respuesta = await getOpenAIChatCompletion(text)
m.reply(respuesta)
}
handler.command = /^(bot|vale|valeria|vale_ia|ia_vale|iv)$/i
export default handler
