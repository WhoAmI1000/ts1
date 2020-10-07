discord.on("MESSAGE_CREATE", async(message) => {
  if(message.channelId == '707700886318874654'){
    await sleep(3000);
    await message.deleteReaction('🍩', '155149108183695360');
    await message.addReaction('🥯');
  }
})
