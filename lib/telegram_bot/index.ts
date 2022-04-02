import TelegramBot from 'node-telegram-bot-api';
import { IBotConfiguration } from './types';

export function init(config: IBotConfiguration) {
    const { token, onSearch } = config;

    const bot = new TelegramBot(token, { polling: true });

    bot.onText(/\/start/, (msg) => {
        bot.sendMessage(
            msg.chat.id,
            'Привіт друже!\nЯку компанію або продукт тобі цікаво перевірити?',
        );
    });

    bot.on('message', async (msg) => {
        // skip any command
        if (!msg.text || msg.text.startsWith('/')) return;

        const text = msg.text?.trim();

        if (!text) {
            return bot.sendMessage(
                msg.chat.id,
                'Будь-ласка використовуйте синтаксис\n<b>/search</b> <i>назва_компанії_або_продукту</i>',
                { parse_mode: 'HTML' },
            );
        }

        const searchMsg = await bot.sendMessage(msg.chat.id, 'Пошук в базі...');
        const results = await onSearch(text);
        await bot.deleteMessage(searchMsg.chat.id, `${searchMsg.message_id}`);

        if (results.length === 0) {
            return bot.sendMessage(searchMsg.chat.id, 'Результатів не знайдено');
        }

        bot.sendMessage(msg.chat.id, 'Результати:', {
            reply_markup: {
                inline_keyboard: results.map((result) => [
                    {
                        text: result.text,
                        callback_data: result.id.toString(),
                    },
                ]),
            },
        });
    });

    // On Company select
    bot.on('callback_query', (query) => {
        console.log(query);
    });
}
