let num = Math.floor(Math.random()*100)%20;
console.log("user input is: "+num);
let i = 0;
while(Math.pow(2,i)<=256&&i<num){
    console.log("2 raised to power "+i+" = "+Math.pow(2,i))
    i++;
}
