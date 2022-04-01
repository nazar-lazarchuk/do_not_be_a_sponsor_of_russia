export interface IDatabaseModel<DTOType extends { id: number }> {
    /**
     * Get all rows from table
     */
    get(): Promise<DTOType[]>;

    /**
     * Find one row by `id`
     */
    find(id: number): Promise<DTOType | undefined>;

    /**
     * Put new row into table
     * @returns id of new item
     */
    put(value: Omit<DTOType, 'id' | 'created_at' | 'updated_at'>): Promise<number | undefined>;

    /**
     * Update exisiting table row
     * @returns id of updated item
     */
    update(value: Omit<DTOType, 'created_at' | 'updated_at'>): Promise<number | undefined>;

    /**
     * Delete exisiting table row by id
     * @returns id of deleted item
     */
    delete(id: number): Promise<number | undefined>;
}
