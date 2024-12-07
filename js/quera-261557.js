//! link: https://quera.org/problemset/261557
//* level: very easy

const input1 = '9 100 9';
const calculateWeight = (input) => {
    const [, chocolateWeght, biscuitCount] = input.split(' ');
    return (+biscuitCount - 1) * chocolateWeght;
};
