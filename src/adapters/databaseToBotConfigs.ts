import { CompanyDbModel } from '../../lib/db';
import { ISearchResult, ICompany } from '../../lib/telegram_bot';

export const onSearch = async (searchCriteria: string): Promise<ISearchResult[]> => {
    // TODO: use "SQLite full text search" instead getting all companies
    const companies = await CompanyDbModel.get();
    const matchedCompanies = companies.filter((company) =>
        company.name.toLowerCase().includes(searchCriteria.toLowerCase()),
    );

    return matchedCompanies.map((company) => ({
        id: company.id,
        text: company.name,
    }));
};

export const onGetCompany = async (id: number):Promise<ICompany | null> => {
    const company = await CompanyDbModel.find(id);
    if (!company) return null;
    return {
        id,
        name: company.name,
        updatedAt: company.updated_at,
    };
}
