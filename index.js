const name = ['Guadalupe', 'Ollie', 'Aki'];
const event = 'surprise';

function writeCards (names, event) {
    let newArr = [];
    for (let i = 0; i < names.length; i++) {
        newArr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        debugger;
    }
        return newArr;
}

function countDown() {
    let number = 10;
    while (number >=0) {
        console.log(number--);
        debugger;
    }
}
countDown(10);