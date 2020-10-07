discord.on("MESSAGE_CREATE", async(message) => {
  if(message.channelId == '760887796210335825'){
    await message.addReaction('🥯');
    await sleep(3000);
    await message.deleteReaction('🍩', '155149108183695360');
  }
});
