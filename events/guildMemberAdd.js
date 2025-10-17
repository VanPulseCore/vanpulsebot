const { EmbedBuilder } = require('discord.js');

module.exports = client => {
  client.on('guildMemberAdd', async member => {
    const channel = member.guild.channels.cache.get(process.env.WELCOME_CHANNEL);
    if (!channel) return;

    const embed = new EmbedBuilder()
      .setColor('#FF6F00')
      .setTitle('🎉 Bienvenue sur VanPulse Core !')
      .setDescription(`Bienvenue ${member} !\nFeel the Pulse. Play the Game. 🧡`)
      .setThumbnail('attachment://logo.png')
      .setImage('attachment://banner.png')
      .setFooter({ text: 'VanPulse Core' });

    await channel.send({
      embeds: [embed],
      files: ['./assets/logo.png', './assets/banner.png']
    });
  });
};
