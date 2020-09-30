export function randomInteger(min: number, max: number): number {
    return Math.floor(Math.random() * max) + min;
}

export function mixArray(options: any): Array<any> {
    const mixedOptions: Array<any> = [];
    while(options.length > 0) {
        const i = randomInteger(0, options.length);
        mixedOptions.push(options[i]);
        options.splice(i, 1);
    }
    return mixedOptions;
}
