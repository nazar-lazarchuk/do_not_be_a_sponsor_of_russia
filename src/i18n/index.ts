const dict: { [lang: string]: { [key: string]: string } } = {
    uk: require('./dict/en.json'),
    en: require('./dict/en.json'),
    ru: require('./dict/en.json'),
};

const fallbackLang = 'uk';

function get(lang: string, key: string): string | undefined {
    return dict[lang]?.[key] || dict[fallbackLang]?.[lang];
};

export function translateStatus(langKey: string, statusCode: number) {
    return get(langKey, `status-${statusCode}`) || 'Undefined';
}
