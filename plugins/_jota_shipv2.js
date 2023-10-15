let handler = async(m, { conn, text, command }) => {
let yh = global.ship
let love = `*Shipeados*
===========================
= *❤️El nombre del ship es ${text}*
=
= *❤️La compatibilidad es de un ${Math.floor(Math.random() * 100)}%*
===========================
`.trim()
let url = yh[Math.floor(Math.random() * yh.length)]
conn.sendMessage(m.chat, { image: { url: url }, love}, { quoted: m });
}
handler.command = /^(shop)$/i
handler.tags = ['anime']
handler.help = ['loli']
export default handler

global.ship = [
"https://media.tenor.com/2hzy4e41AS0AAAAC/zhang-namra.gif",
"https://media.tenor.com/8nt2OOrR9_gAAAAC/anime-girl.gif",
"https://media.tenor.com/cMhJo-f2PDkAAAAC/anime-aesthetic-anime-kawaii.gif",
"https://media.tenor.com/g9HjxRZM2C8AAAAd/anime-love.gif",
"https://media.tenor.com/SRRnWa6nMAoAAAAC/foxplushy-foxy.gif",
"https://media.tenor.com/eDROfBxIq5kAAAAC/teruko-teruko-ookura.gif",
"https://media.tenor.com/GT2-EGuUogQAAAAC/anime-girl.gif",
"https://media.tenor.com/4Oz_B30BYqEAAAAC/kaguya-sama-love-is-war-fujiwara-chika.gif",
"https://media.tenor.com/8-F6-nB1L84AAAAC/anime-blush.gif",
"https://media.tenor.com/jvkHnroaIWEAAAAC/heart-anime.gif",
"https://media.tenor.com/2Kbfu1HwdPcAAAAC/anime-in-love-with-you.gif",
"https://media.tenor.com/hJa9StBduMcAAAAd/makima-chainsaw-man.gif",
"https://media.tenor.com/2Up_E7YqMoYAAAAC/helltaker-modeus.gif",

]
