require('dotenv').config();
const mongoose = require('mongoose');
const TelegramBot = require('node-telegram-bot-api');


const token = '7628719409:AAHqudNzU8bDoNPvyZWPxiibdCSdB1yjf8w';


const bot = new TelegramBot(token, { polling: true });


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB is connected successfully..."))
  .catch(err => console.log("DB connection failed:", err));

// polling error
bot.on("polling_error", (err) => console.log(err));

// listen for messages
bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text?.toLowerCase();

  if (text === "/start") {
    bot.sendMessage(chatId, "Salom! 👋 Bot ishga tushdi!");
    return;
  }

  if (text === "hi" || text === "hello") {
    bot.sendMessage(chatId, "Hello princess 👑✨");
    return;
  }

  // default reply
  bot.sendMessage(chatId, `You said: ${msg.text}`);
});