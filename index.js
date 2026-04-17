const { 
  Client, 
  GatewayIntentBits, 
  ActionRowBuilder, 
  ButtonBuilder, 
  ButtonStyle 
} = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

const TOKEN = process.env.TOKEN;

client.on("ready", async () => {
  console.log(`Online como ${client.user.tag}`);

  const channelId = "1493298016101335253";
  const channel = await client.channels.fetch(channelId);

  // 🎂 IDADE
  const idadeRow = new ActionRowBuilder().addComponents(
    new ButtonBuilder().setCustomId('13-15').setLabel('13–15').setStyle(ButtonStyle.Primary),
    new ButtonBuilder().setCustomId('16-17').setLabel('16–17').setStyle(ButtonStyle.Success),
    new ButtonBuilder().setCustomId('18-22').setLabel('18–22').setStyle(ButtonStyle.Danger),
    new ButtonBuilder().setCustomId('23-25').setLabel('23–25').setStyle(ButtonStyle.Secondary),
    new ButtonBuilder().setCustomId('26+').setLabel('+26').setStyle(ButtonStyle.Primary)
  );

  await channel.send({
    content: "🎂 **Escolha sua idade:**",
    components: [idadeRow]
  });

  // ✝️ VERTENTE
  const vertenteRow = new ActionRowBuilder().addComponents(
    new ButtonBuilder().setCustomId('protestante').setLabel('Protestante').setStyle(ButtonStyle.Primary),
    new ButtonBuilder().setCustomId('reformado').setLabel('Reformado').setStyle(ButtonStyle.Success),
    new ButtonBuilder().setCustomId('pentecostal').setLabel('Pentecostal').setStyle(ButtonStyle.Danger),
    new ButtonBuilder().setCustomId('catolico').setLabel('Católico').setStyle(ButtonStyle.Secondary),
    new ButtonBuilder().setCustomId('nao').setLabel('Não religioso').setStyle(ButtonStyle.Secondary)
  );

  await channel.send({
    content: "✝️ **Escolha sua vertente:**",
    components: [vertenteRow]
  });

  // 🎮 INTERESSES
  const jogosRow = new ActionRowBuilder().addComponents(
    new ButtonBuilder().setCustomId('mobile').setLabel('Mobile').setStyle(ButtonStyle.Primary),
    new ButtonBuilder().setCustomId('pc').setLabel('PC').setStyle(ButtonStyle.Success),
    new ButtonBuilder().setCustomId('console').setLabel('Console').setStyle(ButtonStyle.Danger)
  );

  await channel.send({
    content: "🎮 **Escolha seus interesses:**",
    components: [jogosRow]
  });

  // 🌈 CORES
  const coresRow = new ActionRowBuilder().addComponents(
    new ButtonBuilder().setCustomId('rosa').setLabel('Rosa').setStyle(ButtonStyle.Danger),
    new ButtonBuilder().setCustomId('azul').setLabel('Azul').setStyle(ButtonStyle.Primary),
    new ButtonBuilder().setCustomId('roxo').setLabel('Roxo').setStyle(ButtonStyle.Secondary),
    new ButtonBuilder().setCustomId('verde').setLabel('Verde').setStyle(ButtonStyle.Success)
  );

  await channel.send({
    content: "🌈 **Escolha sua cor:**",
    components: [coresRow]
  });

});

client.login(TOKEN);
