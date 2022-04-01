import { faker } from '@faker-js/faker';
import { CompanyDbModel } from '../lib/db';

faker.locale = 'ru';

CompanyDbModel.put({ name: faker.company.companyName() });
