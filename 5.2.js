function findHarmonicNumber(num){
    let ans = 0;
    for(let i = 1; i<=num; i++){
        ans+=1/i;
    }
    return ans;
}
let num = Math.floor(Math.random()*10)%10;
let harmonicofNum = findHarmonicNumber(num);
console.log("harmonic number of "+num+" is "+harmonicofNum);