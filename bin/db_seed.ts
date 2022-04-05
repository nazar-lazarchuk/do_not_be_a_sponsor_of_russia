import { faker } from '@faker-js/faker';
import { CompanyDbModel } from '../lib/db';

faker.locale = 'ru';

[
    '',
    '"Та ми не будемо з тими російськими полупокєрами працювати, вони ж неадекватні" написав у себе в твітері головний виконавчий директор однієї відомої міжнародної компанії',
    'Після того, як головний директор побачив фото Бучі, він не міг продовжувати працювати з росіянами та спонсувати Путіна',
    'Фото Бучі та Маріуполя здалися фейками для керівництва, проте компанія про-всяк випадок обмежила спонсування рекламних компаній та написала твіт про добро та мир',
    'Відома ІТ-компанія використовує пошту МейлРу, влаштовує вечірки з символо Z та співає пісні в пітримку Путіна. Їх не цікавить політика',
].forEach((description, index) => {
    CompanyDbModel.put({
        name: `Компанія ${index}`,
        status_code: index,
        status_description: description,
    });
});

CompanyDbModel.put({
    name: faker.company.companyName(),
    status_code: Math.floor(Math.random() * 4),
    status_description: faker.company.bs(),
});
