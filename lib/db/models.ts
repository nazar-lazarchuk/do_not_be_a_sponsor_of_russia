import db from './db';
import { ICompanyDTO } from './dto';
import { IDatabaseModel } from './types';

function baseDbGet<T extends { id: number }>(sqlQuery: string): Promise<T[]> {
    return new Promise((resolve, reject) => {
        db.all(sqlQuery, (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
}

function baseDbFind<T extends { id: number }>(
    sqlQuery: string,
    id: number,
): Promise<T | undefined> {
    return new Promise((resolve, reject) => {
        db.get(sqlQuery, [id], (err, row) => {
            if (err) reject(err);
            resolve(row);
        });
    });
}

function baseDbRun(sqlQuery: string, values: unknown[]): Promise<number> {
    return new Promise((resolve, reject) => {
        db.run(sqlQuery, values, function (err) {
            if (err) reject(err);
            resolve(this.lastID);
        });
    });
}

export const CompanyDbModel: IDatabaseModel<ICompanyDTO> = {
    get() {
        return baseDbGet('SELECT * FROM companies');
    },
    find(id) {
        return baseDbFind('SELECT * FROM companies WHERE id = ?', id);
    },
    put(value) {
        return baseDbRun('INSERT INTO companies(name, status_code, status_description) VALUES (?, ?, ?)', [
            value.name,
            value.status_code,
            value.status_description,
        ]);
    },
    update(value) {
        return baseDbRun(
            'UPDATE companies SET name = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?',
            [value.name, value.id],
        );
    },
    delete(id) {
        return baseDbRun('DELETE FROM companies WHERE id = ?', [id]);
    },
};
