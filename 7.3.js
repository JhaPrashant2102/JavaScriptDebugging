
function findPalindrome(num){
    let temp = 0;
    while(num>0){
        temp=temp*10+num%10;
        num = Math.floor(num/10);
    }
    return temp;
}

function isPrime(num){
    for(let i = 2 ; i<=num/2;i++){
        if(num%i==0)
        return false;
    }
    return true;
}
let num = Math.floor(Math.random()*10000)%10000;
let check = isPrime(num);
if(check)
console.log(num+" is prime!");
else
console.log(num+" is not prime!");
let palindromeOfNum = findPalindrome(num);
console.log("palindrome of "+num+" is "+palindromeOfNum);
check = isPrime(palindromeOfNum);
if(check)
console.log(palindromeOfNum+" is prime!");
else
console.log(palindromeOfNum+" is not prime!");
