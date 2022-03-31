import fs from 'fs';
import path from 'path';
import { DB_PATH, DB_TABLES } from './constants';
import { ITableStructure } from './types';

const initialTableData: ITableStructure<unknown> = { rows: [], logs: [] };

type Seed = {
    [table in string]: ITableStructure<unknown>;
};

async function seed(data?: Seed) {
    if (!fs.existsSync(DB_PATH)) {
        fs.mkdirSync(DB_PATH);
    }

    for (const table of DB_TABLES) {
        const pathToTableFile = path.resolve(DB_PATH, `./${table}.json`);
        const isSeedExists = !!data?.[table];

        if (!fs.existsSync(pathToTableFile) || isSeedExists) {
            fs.writeFileSync(
                pathToTableFile,
                JSON.stringify(
                    isSeedExists ? data[table] : initialTableData,
                ),
            );

            console.log(`table "${table}" was created!`);

            if (isSeedExists) {
                console.log(`- ${data[table].rows.length} rows affected`);
            }
        }
    }
}

export default seed;
