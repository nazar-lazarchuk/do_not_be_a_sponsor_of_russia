import db from './db';
import { ICompanyDTO } from './dto';
import { IDatabaseModel } from './types';
import { DbRowNotFoundError } from './errors';

function baseDbGet<T extends { id: number }>(sqlQuery: string): Promise<T[]> {
    return new Promise((resolve, reject) => {
        db.all(sqlQuery, (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
}

function baseDbGetById<T extends { id: number }>(
    sqlQuery: string,
    id: number,
): Promise<T> {
    return new Promise((resolve, reject) => {
        db.get(sqlQuery, [id], (err, row) => {
            if (err) reject(err);
            if (typeof row === 'undefined') {
                return reject(new DbRowNotFoundError());
            }
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
    getById(id) {
        return baseDbGetById('SELECT * FROM companies WHERE id = ?', id);
    },
    put(value) {
        return baseDbRun('INSERT INTO companies(name) VALUES (?)', [
            value.name,
        ]);
    },
    async update(value) {
        const updatedId = await baseDbRun(
            'UPDATE companies SET name = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?',
            [value.name, value.id],
        );
        if (!updatedId) throw new DbRowNotFoundError();
    },
    async delete(id) {
        const deletedId = await baseDbRun('DELETE FROM companies WHERE id = ?', [id]);
        if (!deletedId) throw new DbRowNotFoundError();
    },
};
