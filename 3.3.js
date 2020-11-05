let num = Math.floor(Math.random()*10000)%10000;
console.log(num);
console.log("Unit place: "+num%10);
num=Math.floor(num/10);
console.log("ten place: "+num%10);
num=Math.floor(num/10);
console.log("Hundred place: "+num%10);
num=Math.floor(num/10);
console.log("Thousand place: "+num%10);