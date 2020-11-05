function checkForPrime(num){
    for(let i = 2 ; i<num/2;i++){
        if(num%i==0)
        return false;
    }
    return true;
}

let num = Math.floor(Math.random()*100)%100+30;
let range = Math.floor(Math.random()*100)%20;

for(let i = num-range;i<=num+range;i++){
    let check = checkForPrime(i);
    console.log("check for prime for number: "+i+" is "+check);
}
