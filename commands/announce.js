const { SlashCommandBuilder } = require('discord.js');
const vanpulseEmbed = require('../utils/embed');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('annonce')
    .setDescription('Publie une annonce stylisée')
    .addStringOption(opt =>
      opt.setName('titre').setDescription('Titre de l’annonce').setRequired(true))
    .addStringOption(opt =>
      opt.setName('contenu').setDescription('Contenu de l’annonce').setRequired(true)),
  async execute(interaction) {
    const titre = interaction.options.getString('titre');
    const contenu = interaction.options.getString('contenu');

    const embed = vanpulseEmbed(`📣 ${titre}`, contenu);

    await interaction.reply({
      embeds: [embed],
      files: ['./assets/logo.png', './assets/banner.png']
    });
  }
};
