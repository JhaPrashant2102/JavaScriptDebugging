function checkPalindrome(num1,num2){
    let temp = 0;
    while(num1>0){
        temp=temp*10+num1%10;
        num1 = Math.floor(num1 /10);
    }
    return (temp == num2);
}
let num1 = 123456
let num2 = 654321

let check = checkPalindrome(num1,num2);
console.log("Is "+num1+" and "+num2+" palindrome? "+check)