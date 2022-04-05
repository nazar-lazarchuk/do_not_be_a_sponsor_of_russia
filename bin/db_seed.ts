import { faker } from '@faker-js/faker';
import { CompanyDbModel } from '../lib/db';

faker.locale = 'ru';

CompanyDbModel.put({
    name: faker.company.companyName(),
    status_code: Math.floor(Math.random() * 4),
    status_description: faker.company.bs(),
});
