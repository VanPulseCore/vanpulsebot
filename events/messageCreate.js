module.exports = client => {
  client.on('messageCreate', async message => {
    if (message.author.bot) return;

    const content = message.content.toLowerCase();
    const lienRegex = /(https?:\/\/[^\s]+)/g;
    const isAdmin = message.author.id === process.env.ADMIN_ID;
    const isBot = message.author.id === client.user.id;

    if (lienRegex.test(content) && !isAdmin && !isBot) {
      await message.delete();
      return message.channel.send(`${message.author}, les liens ne sont pas autorisés ici.`);
    }

    if (/(.)\1{10,}/.test(content) || content.length > 500) {
      await message.delete();
      return message.channel.send(`${message.author}, ton message ressemble à du spam.`);
    }

    const motsInterdits = [
      'enculé', 'fdp', 'ntm', 'ta gueule', 'nique ta mère', 'fils de pute',
      'gros con', 'connard', 'salope', 'pute', 'pédé', 'enfoiré', 'batard',
      'bâtard', 'bougnoule', 'nique ta race', 'sale arabe', 'sale noir',
      'sale juif', 'sale pd', 'gros fils de pute', 'grosse merde',
      'va te faire foutre', 'je t’encule', 'nique ton père', 'nique ta daronne'
    ];

    if (motsInterdits.some(mot => content.includes(mot))) {
      await message.delete();
      return message.channel.send(`${message.author}, ton message contient une insulte interdite.`);
    }
  });
};
