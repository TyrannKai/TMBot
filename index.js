const { Telegraf } = require('telegraf');
const chalk = require('chalk');
const text1 = require('./data');
const Extra = require('telegraf/extra');
const bot = new Telegraf('1131647585:AAHBZlzAdFkWapYZ_zlBgwPGogK-h0LYSHU');

bot.start((ctx) => ctx.reply('Приветствую!'));
bot.hears(/конфиг (.*)/, ctx => {
    const text = ctx.match[1];
    if (text === 'пожалуйста') {
        ctx.reply(text1, Extra.markup);
    } else  {
        ctx.reply('Нет здесь конфига. Скажи пожалуйста!', Extra.markup);
    }
});

bot.launch();