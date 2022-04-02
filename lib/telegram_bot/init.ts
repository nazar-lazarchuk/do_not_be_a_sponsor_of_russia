/**
 * deprecated "Automatic enabling of cancellation of promises is deprecated"
 * https://github.com/yagop/node-telegram-bot-api/issues/540
 */
process.env.NTBA_FIX_319 = '1';

import TelegramBot from 'node-telegram-bot-api';
import { IBotConfiguration } from './types';

export function init(config: IBotConfiguration) {
    const { token, onSearch, onGetCompany } = config;

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
            return bot.sendMessage(msg.chat.id, 'Невалідний запит');
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

    // on company select
    bot.on('callback_query', async (query) => {
        if (!query.data || !query.message) return;

        const companyId = +query.data;
        const company = await onGetCompany(companyId);
        bot.sendMessage(query.message.chat.id, JSON.stringify(company));
    });
}
