const prefix = process.env.prefix || '?';
const status = `${prefix}help`;

module.exports = {
  bot: {
    info: {
      prefix: '?',
      token: 'MTM3MTQ5Mjg5NzY4MTA0NzY5Mw.GXhCOI.lDCBmZbYWPZ1zTI7ssiInLL_OXl5ccs5Z-cqlQ',
      invLink: 'https://discord.com/oauth2/authorize?client_id=1371492897681047693&permissions=8&integration_type=0&scope=applications.commands+bot',
      privacy: 'https://discord.gg/NfHDJxHe',
      terms: 'https://discord.gg/NfHDJxHe',
    },
    presence: {
      name: status,
      type: 'Listening',
      url: 'https://discord.gg/NfHDJxHe'
    },
    credits: {
      developerId: '',
      supportServer: 'https://discord.gg/NfHDJxHe'
    },
  }
}