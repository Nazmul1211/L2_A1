// Problem 1:

const filterEvenNumbers = (array: number[]): number[] => {
    const evenNumbers: number[] = [];
    array.forEach(num => {
        if(num % 2 === 0 ){
            evenNumbers.push(num);
        }
    })
    return evenNumbers;
};

const results = filterEvenNumbers([1, 2, 3, 4, 5, 6])


