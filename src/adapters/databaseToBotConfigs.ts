import { CompanyDbModel } from '../../lib/db';
import { ISearchResult } from '../../lib/telegram_bot/types';

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
