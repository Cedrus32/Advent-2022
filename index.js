import { readFileSync } from 'fs';
const readFile = (path) => readFileSync(path, { encoding: 'utf8' });
const input = readFile('./inputs/day1_1.txt').split('\n');
console.log(input);
