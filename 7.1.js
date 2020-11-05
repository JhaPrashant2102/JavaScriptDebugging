function convertFToC(degInF){
    return (degInF-32)*5/9;
}
function convertCToF(degInC1){
    return (degInF*9/5)+32;
}
let degInF = Math.floor(Math.random()*1000)%181+32;
let degInC = convertFToC(degInF);
console.log(degInF+" F = "+degInC+" C");

let degInC1 = Math.floor(Math.random()*1000)%101;
let degInF1 = convertCToF(degInC1);
console.log(degInC1+" C = "+degInF1+" F");