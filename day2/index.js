import { readFileSync } from 'fs';
const readFile = (path) => readFileSync(path, { encoding: 'utf8' });
const input = readFile('./input.txt').split('\n');
console.log(input);

// ['A Y', 'B X', 'C Z']
// A, X === rock
// B, Y === paper
// C, Z === scissors

// total === handshape + outcome
//          rock === 1
//          paper === 2
//          scissors === 3
//                      win === 6
//                      tie === 3
//                      lose === 0

function getScores(array) {
    let scores = [];
    for (let i in array) {
        let subScores = array[i].split(' ');
        let shapeScore = getShapeScore(subScores[1]);
        let outcomeScore = getOutcomeScore(`${subScores[0]} ${subScores[1]}`);
        let roundScore = shapeScore + outcomeScore;
        scores.push(roundScore);
    }
    return scores;
}

function getShapeScore(shape) {
    let points = {X: 1, Y: 2, Z: 3};
    return points[shape];
}

function getOutcomeScore(moves) {
    let wins = ['C X', 'A Y', 'B Z'];
    let ties = ['A X', 'B Y', 'C Z'];
    // let losses = ['B X', 'C Y', 'A Z'];
    let points = {win: 6, tie: 3, lose: 0};
    let outcome;
    if (wins.includes(moves)) {
        outcome = 'win';
    } else if (ties.includes(moves)) {
        outcome = 'tie';
    } else {
        outcome = 'lose';
    }
    return points[outcome];
}

function sumScores(array) {
    let i = 0;
    let sum = 0;
    while (i < (array.length)) {
        sum += array[i];
        i++;
    }
    return sum;
}

let scores = getScores(input);
// console.log(scores);

let scoreTotal = sumScores(scores);
console.log(scoreTotal);
