//UC6

const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_HRS = 160;
const MAX_DAYS = 20;


let totalEmpHrs = 0, totalEmpDays = 0;
let empDailyWageData = new Array();


while(totalEmpHrs<=MAX_HRS&&totalEmpDays<MAX_DAYS){
    let empCheck = Math.floor(Math.random()*10)%3;
    let emphrs = getWorkingHours(empCheck);
    totalEmpHrs+=emphrs;
    empDailyWageData.push(emphrs*WAGE_PER_HOUR);
    totalEmpDays++;
}

let totalWage = 0;
for(let wage of empDailyWageData){
    totalWage+=wage;
}
console.log("UC6 totalWage: "+totalWage);

function getWorkingHours(empCheck){
    switch(empCheck){
        case IS_ABSENT:
            return 0;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS
        case IS_PART_TIME:
            return PART_TIME_HOURS
        default:
            return 0;
    }
}

//UC7

//7A
totalWage = 0;
function sum(dailyWage){
    totalWage+=dailyWage
}
empDailyWageData.forEach(sum);
console.log("UC7A totalWage: "+totalWage)

function totalWages(totalWage,dailyWage){
    return totalWage+dailyWage;
}
console.log("UC7A totalWage using reduce function: "+empDailyWageData.reduce(totalWages,0));

//7B
let day = 0;
function mapDayWithWage(dailyWage){
    day++;
    return day+"="+dailyWage+" ";
}
let mapDayWithWageArr = empDailyWageData.map(mapDayWithWage)
console.log("UC7B daily wage map: "+mapDayWithWageArr);

//7C
function fullTimeWages(dailyWage){
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWages);
console.log("UC7C - Daily wage filter when full time wage earned: "+fullDayWageArr);

//7D
function findFullTimeWage(dailyWage){
    return dailyWage.includes(160);//can use string as well
}
console.log("UC7D - first full time wage was earned on day: "+mapDayWithWageArr.find(findFullTimeWage))

//7E
function isAllFullTimeWage(dailyWage){
    return dailyWage.includes(160);
}
console.log("UC7E - check if every element have full time wage: "+mapDayWithWageArr.every(isAllFullTimeWage)+" "+fullDayWageArr.every(isAllFullTimeWage))

//7F
function isAnyPartTimeWage(dailyWage){
    return dailyWage.includes(160)
}
console.log("UC7F - check for any part time wage: "+mapDayWithWageArr.some(isAnyPartTimeWage))

//7G
let numOfDays = 0;
function totalDaysWorked(numOfDays,dailyWage){
    if(dailyWage>0)
    return ++numOfDays;
    return numOfDays;
}
console.log("UC7G - number of days employee worked: "+empDailyWageData.reduce(totalDaysWorked,0))

//UC8
let empWageMap = new Map();
totalEmpHrs = 0, totalEmpDays = 0;
while(totalEmpHrs<=MAX_HRS&&totalEmpDays<MAX_DAYS){
    let empCheck = Math.floor(Math.random()*10)%3;
    let emphrs = getWorkingHours(empCheck);
    totalEmpHrs+=emphrs;
    totalEmpDays++;
    empWageMap.set(totalEmpDays,emphrs*WAGE_PER_HOUR);
}
console.log("UC8 map implementation: "+empWageMap.forEach(printElementsInMap)+" total Wage: "+Array.from(empWageMap.values()).reduce(totalWages,0))
function printElementsInMap(value,key){
    console.log("key: "+key+" value: "+value)
}
