import { faker } from '@faker-js/faker';
import db from '../lib/db';

faker.locale = 'ru';

db.run('CREATE TABLE users(id INTEGER PRIMARY KEY, username)', (err) => {
    if (err) return console.error(err);

    db.run('INSERT INTO users(username) VALUES (?)', [faker.internet.userName()], (err) => {
        if (err) return console.error(err);
    });
});

db.run('CREATE TABLE companies(id INTEGER PRIMARY KEY, name)', (err) => {
    if (err) return console.error(err);

    db.run('INSERT INTO companies(name) VALUES (?)', [faker.company.companyName()], (err) => {
        if (err) return console.error(err);
    });
});

// db.run('DROP TABLE users');
// db.run('DROP TABLE companies');
