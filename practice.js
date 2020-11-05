//selection practice problem1
function getRandomNumber(){
    return Math.floor(Math.random()*1000)%1000;
}
let val = 1000;
for(let i = 0; i<5;i++){
    let nval = getRandomNumber();
    if(val>nval){
        val = nval;
    }
}
console.log("minimum value is: "+val);

//selection practice problem2
let readLine = require('readline').createInterface({
    input:  process.stdin,
    output: process.stdout
});
var month1 = "feb";
readLine.question('enter the month!',month=>{
    if(month=="March"||month=="April"||month=="May"||month=="June"){
        console.log("valid month");
        month1 = month;
        readLine.close();
    }
});
console.log(5);
//var month = readline();if(validitylogic){console.log(...)}
/*
readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Who are you?', name => {
    console.log(`Hey there ${name}!`);
    readline.close();
});
*/
//selection practice problem 4
