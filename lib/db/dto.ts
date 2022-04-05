export interface ICompanyDTO {
    readonly id: number;
    readonly name: string;
    readonly status_code: number;
    readonly status_description: string | null;
    readonly created_at: string;
    readonly updated_at: string;
}
