import { readFileSync } from 'fs';
const readFile = (path) => readFileSync(path, { encoding: 'utf8' });
const input = readFile('./input.txt').split('\n');

function getSharedItems(array) {
    let sharedItems = [];
    let i = 0;
    while (i <= (array.length - 3)) {
        let group = [array[i], array[i + 1], array[i + 2]];
        let sharedItem = getSharedItem(group);
        sharedItems.push(sharedItem);
        i += 3;
    }
    return sharedItems
}


function getSharedItem(array) {
    for (let i in array[0]) {
        if (array[1].includes(array[0][i]) && array[2].includes(array[0][i])) {
            return array[0][i];
        }
    }
}

function getItemPriorities(array) {
    let priorities = [];
    for (let i in array) {
        let int = array[i].charCodeAt(0);
        if (int >= 97) {
            int -= 96;
        } else {
            int -= 38;
        }
        priorities.push(int);
    }
    return priorities;
}

function sumPriorities(array) {
    let sum = 0;
    for (let i in array) {
        sum += array[i];
    }
    return sum;
}

let items = getSharedItems(input);
let priorities = getItemPriorities(items);
let sum = sumPriorities(priorities);
console.log(sum);
