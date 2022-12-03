import { readFileSync } from 'fs';
const readFile = (path) => readFileSync(path, { encoding: 'utf8' });
const input = readFile('./input.txt').split('\n');

function getSharedItems(array) {
    let sharedItems = [];
    for (let rucksack in array) {
        let containers = getContainers(array[rucksack]);
        let sharedItem = getSharedItem(containers);
        sharedItems.push(sharedItem);
    };
    return sharedItems
}

function getContainers(rucksack) {
    let container0 = rucksack.slice(0, (rucksack.length / 2));
    let container1 = rucksack.slice(((rucksack.length / 2)), (rucksack.length));
    return [container0, container1];
}

function getSharedItem(containers) {
    for (let i in containers[0]) {
        for (let j in containers[1]) {
            if (containers[0][i] === containers[1][j]) {
                return containers[0][i];
            }
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
