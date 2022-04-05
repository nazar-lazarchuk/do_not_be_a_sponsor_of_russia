import { db } from '../lib/db';

db.run('DROP TABLE companies', () => {
    db.run(`
        CREATE TABLE companies(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name NOT NULL,
            status_code INTEGER DEFAULT 0,
            status_description,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `);
});
