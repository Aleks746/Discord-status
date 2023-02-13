const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  checkUpdate: false,
});
client.once('ready', async () => {
  const r = new Discord.RichPresence()
   .setApplicationId('817229550684471297') 
    .setType('STREAMING')
    .setAssetsLargeImage(
      'https://cdn.discordapp.com/avatars/919465332387758140/a_dfb4f9eec1c28e7cb6f575355204df83.gif?size=1024'
    )
    .setState('Hacker')
    .setStartTimestamp(Date.now())
    .setName('Name')
    .setDetails('Discord+')
    .addButton('Discord', 'https://discord.gg/SRKAVmX5Va')
    .addButton('Sxela News', 'https://t.me/sxelachannel')
    .setURL('https://youtube.com/watch?v=dQw4w9WgXcQ');
  client.user.setActivity(r.toJSON());
});

client.login("Токен");
