discord.registerEventHandler("MESSAGE_CREATE", async (msg) => {
  if (msg.content === "!pong") {
    await msg.reply("Pong!");
  }
})
