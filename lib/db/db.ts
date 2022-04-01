import sqlite3Lib from 'sqlite3';
import path from 'path';

const sqlite3 = sqlite3Lib.verbose();
const dbPath = path.resolve(__dirname, '../../database.db');
const dbMode = sqlite3.OPEN_READWRITE;

const db = new sqlite3.Database(dbPath, dbMode, (err) => {
    if (err) return console.error(err);
});

export default db;
