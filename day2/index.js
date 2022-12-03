import { readFileSync } from 'fs';
const readFile = (path) => readFileSync(path, { encoding: 'utf8' });
const input = readFile('./input.txt').split('\n');
console.log(input);

function getScores(array) {
    let scores = [];
    for (let i in array) {
        let round = array[i].split(' ');
        let shape = getShape(`${round[0]} ${round[1]}`);
        let shapeScore = getShapeScore(shape);
        let outcomeScore = getOutcomeScore(round[1]);
        let roundScore = shapeScore + outcomeScore;
        scores.push(roundScore);
    }
    return scores;
}

function getShape(round) {
    let rounds = {rock: ['A Y', 'B X', 'C Z'],
                  paper: ['A Z', 'B Y', 'C X'],
                  scissors: ['A X', 'B Z', 'C Y']
                 };
    let shape;
    if (rounds['rock'].includes(round)) {
        shape = 'rock';
    } else if (rounds['paper'].includes(round)) {
        shape = 'paper';
    } else {
        shape = 'scissors';
    }
    return shape;
}

function getShapeScore(shape) {
    let points = {rock: 1, paper: 2, scissors: 3};
    return points[shape];
}

function getOutcomeScore(outcome) {
    let points = {Z: 6, Y: 3, X: 0};
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
let scoreTotal = sumScores(scores);
console.log(scoreTotal);
