const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

const TOKEN = process.env.TOKEN;

client.on("ready", () => {
  console.log(`Online como ${client.user.tag}`);
});

client.login(TOKEN);
