const { EmbedBuilder } = require('discord.js');

module.exports = (title, description) => {
  return new EmbedBuilder()
    .setColor('#FF6F00')
    .setTitle(title)
    .setDescription(description)
    .setThumbnail('attachment://logo.png')
    .setImage('attachment://banner.png')
    .setFooter({ text: 'Feel the Pulse. Play the Game. 🧡' });
};
