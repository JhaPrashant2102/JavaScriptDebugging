//2.1
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