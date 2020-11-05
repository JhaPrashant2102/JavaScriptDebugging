function checkForPrime(num){
    for(let i = 2 ; i<num/2;i++){
        if(num%i==0)
        return false;
    }
    return true;
}
let num = Math.floor(Math.random()*100)%100;
let check = checkForPrime(num);
console.log("check for prime for number: "+num+" is "+check);
