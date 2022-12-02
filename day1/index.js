import { readFileSync } from 'fs';
const readFile = (path) => readFileSync(path, { encoding: 'utf8' });
const input = readFile('./input.txt').split('\n');
// console.log(input);


