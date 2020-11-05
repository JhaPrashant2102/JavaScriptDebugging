function findFactorial(num){
    let ans = 1;
    for(let i = num; i>=1 ;i--){
        ans=ans*i;
    }
    return ans;
}
let num = Math.floor(Math.random()*10)%10;
let factorialOfNum = findFactorial(num);
console.log("factorial of: "+num+" is "+factorialOfNum);