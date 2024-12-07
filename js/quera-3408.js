//! link: https://quera.org/problemset/3408
//* level: very easy 
const input1 = `11
I Am from Iran it iS rainy and i like rain`;
const reverseInput = (input) => {
    return input.split(`\n`)[1].split(' ').reverse().join(' ');
};

reverseInput(input1);
