import TelegramBot from 'node-telegram-bot-api';
import { IBotConfiguration } from './types';

export function init(config: IBotConfiguration) {
    const { token } = config;

    const bot = new TelegramBot(token, { polling: true });
}
