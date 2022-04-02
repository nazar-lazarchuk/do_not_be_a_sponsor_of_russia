export interface ISearchResult {
    id: number;
    text: string;
}

export interface ICompany {
    id: number;
    name: string;
    updatedAt: string;
}

export interface IBotConfiguration {
    token: string;

    onSearch(searchCriteria: string): Promise<ISearchResult[]>;
    onGetCompany(id: number): Promise<ICompany | null>;
}
