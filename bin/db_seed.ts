import { faker } from '@faker-js/faker';
import seed from '../lib/db/seed';

faker.locale = 'ru';

const data = {
    companies: {
        rows: new Array(100).fill(null).map(() => faker.company.companyName()),
        logs: [],
    },
    company_products: {
        rows: new Array(2000)
            .fill(null)
            .map(() => faker.commerce.productName()),
        logs: [],
    },
    users: {
        rows: new Array(20).fill(null).map(() => faker.internet.userName()),
        logs: [],
    },
};

seed(data)
    .then(() => console.log('success 🙌'))
    .catch(() => console.log('error ⛔'));
