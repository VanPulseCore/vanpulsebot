module.exports = client => {
  client.once('ready', () => {
    console.log(`✅ VanPulse Core Bot connecté en tant que ${client.user.tag}`);
  });
};
