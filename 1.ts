const findMinValue = (arr: number[]): number => Math.min(...arr);
console.log(findMinValue([3, 1, 4, 1, 5, 9]));

const joinStrings = (arr: string[]): string => arr.join(', ');
console.log(joinStrings(['Hello', 'world', 'TypeScript']));

type UserLogin = [string, Date, boolean];
const user: UserLogin = ['JohnDoe', new Date(), true];
console.log(`User: ${user[0]}, Login Time: ${user[1]}, Is Logged In: ${user[2]}`);
