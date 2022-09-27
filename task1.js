import * as readline from 'readline';
import { reverse } from './reverse';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    console.log(reverse(input));
});