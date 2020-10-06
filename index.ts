commands.raw('test', (message) => if(message.author.id == '258265415770177536'){message.reply('Verified! [1]');}else{message.reply('Verified! [2]'););
discord.on("MESSAGE_CREATE", async(message) => {
  if(message.channelId == '760887796210335825'){
    await sleep(3000);
    await message.deleteReaction('🍩', '155149108183695360');
    await message.addReaction('🥯');
  }
})
