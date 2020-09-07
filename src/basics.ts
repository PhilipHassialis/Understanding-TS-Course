function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    let result: number;
    result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    return n1 + n2;
}

const number1 = 2;
const number2 = 3.5;
const printResult = true;
const resultPhrase = "Adding yields: ";

let myText: string;


const result = add(number1, number2, printResult, resultPhrase);
console.log(result);
