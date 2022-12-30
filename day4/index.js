import { readFileSync } from 'fs';
const readFile = (path) => readFileSync(path, { encoding: 'utf8' });
const input = readFile('./input.txt').split('\n');
// console.log(input);

// how many assignment pairs include a range than fully contains another?

//// for each pair...
    // get ranges
    // compair ranges
    // if ranges overlap, overlap++

function checkForOverlap(array) {
    let total = 0;
    let i = 0;
    while (i < (array.length)) {
        let pair = [array[i], array[i + 1]];
        let ranges = getRanges(pair);
        let isOverlap = compairRanges(ranges);
        if (isOverlap) {
            total++;
        }
        i += 2;
    }
    return total;
}

function getRanges(array) {
    let range0 = array[0].split(',');
    range0 = [range0[0].split('-')[0], range0[0].split('-')[1], range0[1].split('-')[0], range0[1].split('-')[1]];
    let range1 = array[1].split(',');
    range1 = [range1[0].split('-')[0], range1[0].split('-')[1], range1[1].split('-')[0], range1[1].split('-')[1]];
    return [range0, range1];
};

function compairRanges(array) {
    console.log(array);
    if (array[0][0] <= array[1][0] && array[0][1] >= array[1][1] || 
        array[0][2] <= array[1][2] && array[0][3] >= array[1][3]) {
        console.log(true);
        return true;
    }
}

let overlap = checkForOverlap(input);
console.log(overlap);
