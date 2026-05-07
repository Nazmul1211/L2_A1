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

filterEvenNumbers([1, 2, 3, 4, 5, 6])




// Problem 2:

const reverseString = (str : string) => {
    let reverseStr : string = "";
    const length = str.length;
    for (let i = length - 1; i >= 0; i--){
        reverseStr += str[i];
    }
    return `"${reverseStr}";`;


}

reverseString("typescript");




// Problem 3:

type StringOrNumber = string | number;

const checkType = (input : StringOrNumber ) : unknown => {
    if(typeof(input) === "string"){
        return `"String"`;
    } 
    else if (typeof(input) === "number") {
        return `"Number"`;
    }
}

console.log(checkType("Hello"));

console.log(checkType(42));

