export function truncate(
    text: string = '',
    [h, t]: [number, number] = [6, 6],
): string {
    const head = text.slice(0, h);
    const tail = text.slice(-1 * t, text.length);
    return text.length > h + t ? [head, tail].join('...') : text;
}

export function truncateEvm(text: string = ''): string {
    return truncate(text, [10, 10]);
}

export function truncateBalance(balance: number = 0): string {
    return balance.toString().match(/^-?\d+(?:\.\d{0,3})?/)![0];
}

export function toFixed(num: number = 0): string {
    return num.toString().match(/^-?\d+(?:\.\d{0,2})?/)![0];
}
