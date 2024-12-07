//! link: https://quera.org/problemset/265396
//* level: very easy
const zeroSign = `***
*.*
***`;
const oneSign = `.*.
.*.
.*.`;
const input1 = `5
10011`;

const convertNumber = (input) => {
    let finalNumber = [];
    const enteredNumbers = input.split(`\n`)[1].split('');
    enteredNumbers.forEach((num) => {
        if (num == '0') {
            finalNumber.push(zeroSign);
            return;
        }
        finalNumber.push(oneSign);
    });
    return finalNumber;
};

console.log(convertNumber(input1).join('\n\n'));
