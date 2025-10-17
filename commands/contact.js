const { SlashCommandBuilder } = require('discord.js');
require('dotenv').config();

module.exports = {
  data: new SlashCommandBuilder()
    .setName('contact')
    .setDescription('Envoie un message à l’admin')
    .addStringOption(opt =>
      opt.setName('message').setDescription('Ton message').setRequired(true)),

  async execute(interaction) {
    const msg = interaction.options.getString('message');
    const admin = await interaction.guild.members.fetch(process.env.ADMIN_ID);
    await admin.send(`📬 Message de ${interaction.user.tag} : ${msg}`);
    await interaction.reply({
      content: 'Ton message a été envoyé à l’admin.',
      ephemeral: true
    });
  }
};
