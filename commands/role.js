const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('role')
    .setDescription('Attribue un rôle')
    .addStringOption(opt =>
      opt.setName('nom').setDescription('Nom du rôle').setRequired(true)),
  async execute(interaction) {
    const roleName = interaction.options.getString('nom');
    const role = interaction.guild.roles.cache.find(r => r.name.toLowerCase() === roleName.toLowerCase());
    if (!role) return interaction.reply({ content: 'Rôle introuvable.', ephemeral: true });

    await interaction.member.roles.add(role);
    await interaction.reply(`✅ Rôle **${role.name}** attribué !`);
  }
};
