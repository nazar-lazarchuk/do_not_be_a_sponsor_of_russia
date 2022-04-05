export function encodeToHtml(text: string): string {
    return text
        .split('')
        .map((char) => {
            if (char === '<') return '&lt;';
            if (char === '>') return '&gt;';
            if (char === '&') return '&amp;';
            return char;
        })
        .join('')
        .split('\\n')
        .join('\n');
}
