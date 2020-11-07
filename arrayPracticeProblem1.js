//array practice problem 1
function generateRandomSingleDigitNumber(){
    return Math.floor(Math.random()*10)%9+1;
}
function get3DigitNumber(){
    return 100*generateRandomSingleDigitNumber() +10*generateRandomSingleDigitNumber()+generateRandomSingleDigitNumber();
}
let numArray = new Array();
for(let i = 10; i>0;i--){
    numArray.push(get3DigitNumber())
}
console.log(numArray);
function findSecondLargestElement(numArray){
    let largestElement = 0;
    for(let element of numArray){
        largestElement=Math.max(largestElement,element);
    }
    console.log(largestElement);
    let secondLargest = 0;
    for(let element of numArray){
        secondLargest = (element<largestElement&&element>secondLargest)?element:secondLargest;
    }
    console.log(secondLargest);
    return secondLargest;
}
function findSecondSmallestElement(numArray){
    let smallestElement = 1000;
    for(let element of numArray){
        smallestElement=Math.min(smallestElement,element);
    }
    console.log(smallestElement);
    let secondSmallest = 1000;
    for(let element of numArray){
        secondSmallest = (element>smallestElement&&element<secondSmallest)?element:secondSmallest;
    }
    console.log(secondSmallest);
    return secondSmallest;
}
let secondLargestElement = findSecondLargestElement(numArray);
let secondSmallestElement = findSecondSmallestElement(numArray);
console.log("problem 1c: second largest element:"+secondLargestElement+"\n"+"second smallest element:"+secondSmallestElement)

//problem 2
let sortedNumArray = numArray.slice(0).sort((a,b)=>b-a);
console.log(sortedNumArray)
console.log("problem 2: second largest element:"+sortedNumArray[1]+"\n"+"second smallest element:"+sortedNumArray[sortedNumArray.length-2])

//problem 3
function isPrime(num){
    for(let i = 2; i*i<=num; i++){
        if(num%i==0)
        return false;
    }
    return true;
}
function findFactor(num){
    let retarr = new Array();
    for(let i = 2; i*i<=num;i++){
        if((num%i==0)&&isPrime(i))
        retarr.push(i);
    }
    return retarr;
}
let number = get3DigitNumber();
let factorArray = findFactor(number);
console.log("problem 3: prime factors of "+number+" are: "+factorArray);

//problem 5
let arr = new Array();
for(let i = 1; i<100;i++){
    arr.push(i);
}
function checkTwiceRepetition(any){
    return any.includes("11");
}
console.log("problem 5: twice repeated elements in range are:"+arr.filter(checkTwiceRepetition))
