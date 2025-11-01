import TelegramBot from "node-telegram-bot-api";

const TOKEN = '7628719409:AAHqudNzU8bDoNPvyZWPxiibdCSdB1yjf8w'

const bot = new TelegramBot(TOKEN, { polling: true });

bot.on("message", function (msg) {
  const chatId = msg.chat.id;
  const text = msg.text;

  console.log("Start");
  bot.sendMessage(chatId, `Salom --> ${text}`);
  console.log("Xabar keldi");
  console.log(msg);
});

console.log("Botimiz ishga tushdi");