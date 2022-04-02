
import dotenv from 'dotenv';
import db from '../lib/db';
import { init as botInit } from '../lib/telegram_bot';

dotenv.config();

console.log(db);

const token = process.env.TELEGRAM_BOT_TOKEN;

if (token) {
    botInit({ token });
} else {
    console.warn('Unable to start telegram bot, token expected');
}
