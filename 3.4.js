let a = Math.floor(Math.random()*10000)%10000;
let b = Math.floor(Math.random()*10000)%10000;
let c = Math.floor(Math.random()*10000)%10000;
console.log(a+b*c);
console.log(c+a/b);
console.log(a%b+c);
console.log(a*b+c);
let maxNum = Math.max(a,b,c);
console.log("a:"+a+" b:"+b+" c:"+c+" max is:"+maxNum);