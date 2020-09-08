enum conversionType { asNumber, asText };

type Combinable = number | string;
type ConversionDescriptor = "asNumber" | "asText";

function combine(input1: Combinable, input2: Combinable, resultConversion: ConversionDescriptor) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === "asNumber") {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if (resultConversion === 'asNumber') return +result;
    // return result;

}

console.log(combine('Philip ', 'Alexander', "asText"));
console.log(combine(3, 5, "asNumber"));
console.log(combine('40', '26', "asNumber"))

