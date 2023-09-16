let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`https://github.com/jota-2020/valebot/blob/main/src/cl.m3u`)}
handler.help = ['formarpareja']
handler.tags = ['main', 'fun']
handler.command = ['Iptv','iptv']
handler.group = true
