import csv from 'csvtojson';
import * as fs from 'fs';
const csvPathFile = './csv/books.csv';
const csvString = fs.readFileSync(csvPathFile).toString();
const txtPathFile = './books.txt';
const fileTxt = fs.openSync(txtPathFile, 'w');

csv({
    headers: ['book', 'author', 'amount', 'price'],
    checkType: true,
    colParser: {
        'amount': 'omit',
    },
})
    .fromString(csvString)
    .subscribe(line => {
            fs.appendFile(
                fileTxt,
                `${JSON.stringify(line)}\n`,
                (err) => {
                    if (err) {
                        console.log('Append file Error: ', err)
                    }
                }
            );
        }, (err) => console.log('CSV Error: ', err)
    );