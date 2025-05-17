const formatPrice = (price: string | number): number =>
    typeof price === 'string' ? parseFloat(price) : price;
console.log(formatPrice('123.45'));
console.log(formatPrice(100));

const checkInput = (input: boolean | string): void => {
    if (typeof input === 'boolean') {
        console.log(input ? 'true' : 'false');
    } else {
        console.log(`Length: ${input.length}`);
    }
};
console.log(checkInput(true));
console.log(checkInput('Hello'));
