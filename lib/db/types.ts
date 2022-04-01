export interface IDatabaseModel<DTOType extends { id: number }> {
    /**
     * Get all rows from table
     */
    get(): Promise<DTOType[]>;

    /**
     * Get one row by `id`
     */
    getById(id: number): Promise<DTOType>;

    /**
     * Put new row into table
     */
    put(value: Omit<DTOType, 'id' | 'created_at' | 'updated_at'>): Promise<number>;
    
    /**
     * Update exisiting table row
     */
    update(value: Omit<DTOType, 'created_at' | 'updated_at'>): Promise<void>;
    
    /**
     * Delete exisiting table row by id
     */
    delete(id: number): Promise<void>;
}
