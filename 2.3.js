function checkForLeapYear(year){
    if((year%400==0)||(year%4==0&&year%100!=0)){
        return (year>999&&year<10000)?true:false;
    }else return false;
}
let year = Math.floor(Math.random()*10000)%10000;
let check = checkForLeapYear(year);
console.log(check);
console.log("The year is: "+year);