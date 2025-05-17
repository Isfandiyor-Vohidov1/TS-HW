type Phone = { brand: string; model: string; price: number; };
const phones: Phone[] = [
    { brand: 'Apple', model: 'iPhone 14', price: 999 },
    { brand: 'Samsung', model: 'Galaxy S23', price: 899 }
];
const findCheapestPhone = (phones: Phone[]): Phone => phones.reduce((min, p) => p.price < min.price ? p : min);
console.log(findCheapestPhone(phones));

type Student = { name: string; grade: number; isActive: boolean; };
const students: Student[] = [
    { name: 'Alice', grade: 90, isActive: true },
    { name: 'Bob', grade: 75, isActive: false }
];
console.log(students.filter(s => s.isActive));
