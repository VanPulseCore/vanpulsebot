const { SlashCommandBuilder } = require('discord.js');
const vanpulseEmbed = require('../utils/embed');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('giveaway')
    .setDescription('Lance un giveaway')
    .addStringOption(opt =>
      opt.setName('durée').setDescription('Durée (ex: 1h, 30m)').setRequired(true))
    .addIntegerOption(opt =>
      opt.setName('gagnants').setDescription('Nombre de gagnants').setRequired(true))
    .addStringOption(opt =>
      opt.setName('récompense').setDescription('Récompense à gagner').setRequired(true)),
  async execute(interaction) {
    const durée = interaction.options.getString('durée');
    const gagnants = interaction.options.getInteger('gagnants');
    const récompense = interaction.options.getString('récompense');

    const embed = vanpulseEmbed(
      '🎁 Giveaway lancé !',
      `Durée : **${durée}**\nGagnants : **${gagnants}**\nRécompense : **${récompense}**`
    );

    await interaction.reply({
      embeds: [embed],
      files: ['./assets/logo.png', './assets/banner.png']
    });
  }
};
