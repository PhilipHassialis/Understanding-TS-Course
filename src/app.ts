function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log('Result:' + num);
}

function addAndHandle(n1: number, n2: number, cb: (a: number) => void) {
    const result = n1 + n2;
    cb(result);

}

printResult(add(3, 4))

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult;

console.log(combineValues(3, 9));

addAndHandle(12, 18, (result) => { console.log(result) })

