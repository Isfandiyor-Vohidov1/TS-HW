const isAdult = (age: number): boolean => age >= 18;
console.log(isAdult(20));
console.log(isAdult(15));

const checkName = (name?: string | null): string => name ?? 'Mehmon';
console.log(checkName('Ali'));
console.log(checkName());
