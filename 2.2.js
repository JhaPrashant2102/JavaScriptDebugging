//2.2
const MARCH = 1;
const APRIL = 2;
const MAY = 3;
const JUNE = 4;
function generateRandomMonth(){
    let value = Math.floor(Math.random()*10)%4+1;
    switch(value){
        case MARCH:
            return "March";
        case APRIL:
            return "April";
        case MAY:
            return "May";
        case JUNE:
            return "June";
    }
}
function generateRandomDay(){
    return Math.floor(Math.random()*100)%30+1;
}
function checkValidDate(month,day){
    if(month=="March"){
        if(day<=31&&day>=20)
        return true;
        else return false;
    }
    else if(month == "April")
    return true;
    else if(month=="May")
    return true;
    else if(month == "June"){
        if(day>0&&day<21)
        return true;
        else return false;
    }
    else return false;
}
let month = generateRandomMonth();
let day = generateRandomDay();
let check = checkValidDate(month,day);
console.log(check);
console.log("date is: "+month+" "+day+" ");