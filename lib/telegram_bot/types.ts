export interface ISearchResult {
    id: number;
    text: string;
}

export interface IBotConfiguration {
    token: string;

    onSearch(searchCriteria: string): Promise<ISearchResult[]>;
}
