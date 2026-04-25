const { Client, GatewayIntentBits, Partials } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildMembers
  ],
  partials: [Partials.Message, Partials.Channel, Partials.Reaction]
});

const channelId = "1493298016101335253";

// 🎯 SEUS CARGOS
const roles = {
  "1️⃣": "1497654414511571044", // 14-17
  "2️⃣": "1497654757576151213", // 18-22
  "3️⃣": "1497654880632967282", // 23-25
  "4️⃣": "1497655281792847982", // +26

  "📖": "1497655659573936308", // Protestante
  "🔥": "1497655716213686282", // Pentecostal
  "📜": "1497655785113780426", // Reformado
  "⛪": "1497655853447254237", // Batista
  "✝️": "1497655924632977508", // Católico
  "🕊️": "1497655990437548245", // Presbiteriano

  "💗": "1497656195006201987", // Rosa
  "💚": "1497656571855896697", // Verde
  "💙": "1497656344621351052", // Azul
  "❤️": "1497656823631577188", // Vermelho
  "🤍": "1497656975347941557", // Branco
  "🖤": "1497657047477518497"  // Preto
};

client.once("ready", async () => {
  console.log(`Logado como ${client.user.tag}`);

  const channel = await client.channels.fetch(channelId);

  // 🎂 IDADE
  const idadeMsg = await channel.send(`🎂 | Escolha sua idade

1️⃣ → 14–17  
2️⃣ → 18–22  
3️⃣ → 23–25  
4️⃣ → +26`);

  for (let e of ["1️⃣","2️⃣","3️⃣","4️⃣"]) await idadeMsg.react(e);

  // ✝️ VERTENTE
  const vertenteMsg = await channel.send(`✝️ | Escolha sua vertente

📖 Protestante  
🔥 Pentecostal  
📜 Reformado  
⛪ Batista  
✝️ Católico  
🕊️ Presbiteriano`);

  for (let e of ["📖","🔥","📜","⛪","✝️","🕊️"]) await vertenteMsg.react(e);

  // 🌈 CORES
  const corMsg = await channel.send(`🌈 | Escolha sua cor

💗 Rosa  
💚 Verde  
💙 Azul  
❤️ Vermelho  
🤍 Branco  
🖤 Preto`);

  for (let e of ["💗","💚","💙","❤️","🤍","🖤"]) await corMsg.react(e);

});

// 🎯 DAR CARGO
client.on("messageReactionAdd", async (reaction, user) => {
  if (user.bot) return;

  const roleId = roles[reaction.emoji.name];
  if (!roleId) return;

  const member = await reaction.message.guild.members.fetch(user.id);
  await member.roles.add(roleId);
});

// ❌ REMOVER CARGO
client.on("messageReactionRemove", async (reaction, user) => {
  if (user.bot) return;

  const roleId = roles[reaction.emoji.name];
  if (!roleId) return;

  const member = await reaction.message.guild.members.fetch(user.id);
  await member.roles.remove(roleId);
});

client.login(process.env.TOKEN);
