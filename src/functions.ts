function functions_add(n1: number, n2: number) {
    return n1 + n2;
}

function functions_printResult(num: number): void {
    console.log('Result:' + num);
}

function functions_addAndHandle(n1: number, n2: number, cb: (a: number) => void) {
    const result = n1 + n2;
    cb(result);

}

functions_printResult(functions_add(3, 4))

let functions_combineValues: (a: number, b: number) => number;

functions_combineValues = functions_add;
// combineValues = printResult;

console.log(functions_combineValues(3, 9));

functions_addAndHandle(12, 18, (result) => { console.log(result) })

