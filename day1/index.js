import { readFileSync } from 'fs';
const readFile = (path) => readFileSync(path, { encoding: 'utf8' });
const input = readFile('./input.txt').split('\n');

function getSums(array) {
    let sums = [];
    let total = 0;
    for (let i in array) {
        if (array[i] === '') {
            sums.push(total);
            total = 0;   
        } else if (i == (array.length - 1)) {
            sums.push(parseInt(array[i]));
        } else {
            total += parseInt(array[i]);
        }
    }
    return sums;
}

function getTopThree(array) {
    let top = [];
    let i = 0;
    while (i < 3) {
        let max = findMax(array);
        let maxIndex = array.indexOf(max);
        top.push(max);
        array.splice(maxIndex, 1);
        i++;
    }
    return top;
}

function findMax(array) {
    return Math.max(...array);
}

function sumArray(array) {
    let i = 0;
    let sum = 0;
    while (i < (array.length)) {
        sum += array[i];
        i++;
    }
    return sum;
}

let sums = getSums(input);
let topThree = getTopThree(sums);
let maxSum = sumArray(topThree);
console.log(maxSum);
