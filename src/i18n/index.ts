const dict: { [lang: string]: { [key: string]: string } } = {
    uk: require('./dict/uk.json'),
    en: require('./dict/en.json'),
    ru: require('./dict/ru.json'),
};

const fallbackLang = 'uk';

function t(lang: string, key: string): string | undefined {
    return dict[lang]?.[key] || dict[fallbackLang]?.[lang];
};

export function translateStatus(langKey: string, statusCode: number ) {
    return t(langKey, `status-${statusCode}`) || 'Undefined';
}
