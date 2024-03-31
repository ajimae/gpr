// export const isEven = (x: number): boolean => x % 2 === 0;

// @ts-ignore
import ncrypt from 'ncrypt-js';
const n = new ncrypt('shh');

console.log(n.encrypt(6));
