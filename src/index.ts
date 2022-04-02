import dotenv from 'dotenv';
import { init as botInit } from '../lib/telegram_bot';
import { onSearch, onGetCompany } from './adapters/databaseToBotConfigs';

dotenv.config();

const token = process.env.TELEGRAM_BOT_TOKEN;

if (token) {
    botInit({ token, onSearch, onGetCompany });
} else {
    console.warn('Unable to start telegram bot, token expected');
}
