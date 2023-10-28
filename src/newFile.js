module.exports = function toReadable(number) {
    let arrayNumber = [...number.toString()].map(Number);
    arrayNumber = arrayNumber.reverse();
    let firstdNumber = arrayNumber[2];
    let secondNumber = arrayNumber[1];
    let lastNumber = arrayNumber[0];
    if (lastNumber === 1) {
        lastNumber = 'one';
        if (lastNumber === 2)
            lastNumber = 'two';
        else if (lastNumber === 3)
            lastNumber = 'three';
        else if (lastNumber === 4)
            lastNumber = 'four';
        else if (lastNumber === 5)
            lastNumber = 'five';
        else if (lastNumber === 6)
            lastNumber = 'six';
        else if (lastNumber === 7)
            lastNumber = 'seven';
        else if (lastNumber === 8)
            lastNumber = 'eigth';
        return lastNumber;
    }
    else if (lastNumber === 9)
        if (arrayNumber === 3) {
            if (theerdNumber === 1) {
            }
        }
        else if (number.length === 2) {
        }
        else (number.length === 1);


};
