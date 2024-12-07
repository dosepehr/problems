//! link: https://quera.org/problemset/181680
//* level: very easy

const input1 = '10 11 2';
const calculateHour = (input) => {
    const [universityHour, officeHour, both] = input.split(' ');
    return 24 - (+universityHour + officeHour - both);
};

console.log(calculateHour(input1));
