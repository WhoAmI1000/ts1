discord.registerEventHandler("MESSAGE_CREATE", async (msg) => {
  if (msg.content === "!ping") {
    await msg.reply("Pong!");
  }
})
