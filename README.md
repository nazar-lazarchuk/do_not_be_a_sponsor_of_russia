# Don't be a sponsor of Russia 'DBSR' project

'DBSR' can be useful to check whether the company operates in Russia, whether it pays taxes there, whether the company ignores or supports Russian aggression in the world.
It is currently under active development.

## Features
- Parsing the Internet for up-to-date data
- Moderation of information through the admin panel
- Telegram Bot that will be created to:
    - search for brief information about any product or company (whether it works in Russia or whether this company ignore the aggression of the Russian Federation against Ukraine)
    - data moderation by Telegram users
- ✨Magic ✨

## Installation

Requires [Node.js](https://nodejs.org/) v12+ to run.

Install the dependencies and devDependencies:
```sh
npm i
```

Create an empty file `database.db` in root folder and run SQLite migration:
```sh
npm run db:migrate
```

Also, you can seed some fake data into your local database:
```sh
npm run db:seed
```

## Development

Want to contribute? Great!
You can create `Fork` send a `Pull-Request`.
I believe that this project will be supported by a large number of volunteers, especially concerned people from Ukraine.
