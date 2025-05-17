const fibonacci = (n: number): number[] => {
    const sequence: number[] = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence.slice(0, n);
};
console.log(fibonacci(10));

interface Product {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
}

const products: Product[] = [
    { id: 1, name: 'Product A', price: 120, inStock: true },
    { id: 2, name: 'Product B', price: 80, inStock: false },
    { id: 3, name: 'Product C', price: 150, inStock: true }
];

const expensiveProducts = products.filter(p => p.price > 100);
console.log(expensiveProducts);
