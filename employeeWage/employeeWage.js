
//UC1
const IS_ABSENT = 0;
let empCheck = Math.floor(Math.random()*10)%2;
if(empCheck==IS_ABSENT){
    console.log("Employee is absent");
}
else{
    console.log("Employee is present");
}

//UC2
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

let emphrs = 0;
empCheck = Math.floor(Math.random()*10)%3;
switch(empCheck){
    case IS_ABSENT:
        emphrs = 0;
        break;
    case IS_FULL_TIME:
        emphrs = 8;
        break;
    case IS_PART_TIME:
        emphrs = 4;
        break;
    default:
        break;
}
let empWage = emphrs*WAGE_PER_HOUR;
console.log("Employee Wage: "+empWage);

//UC3
function getWorkingHours(empCheck){
    switch(empCheck){
        case IS_ABSENT:
            emphrs = 0;
            break;
        case IS_FULL_TIME:
            emphrs = 8;
            break;
        case IS_PART_TIME:
            emphrs = 4;
            break;
        default:
            break;
    }
}
emphrs = 0;
empCheck = Math.floor(Math.random()*10)%3;
emphrs = getWorkingHours(emphrs);
empWage = emphrs*WAGE_PER_HOUR;
console.log("Employee Wage"+empWage);

//UC4
const NUM_OF_WORKING_DAYS = 20;
emphrs = 0;
for(let day = 0; day<NUM_OF_WORKING_DAYS;day++){
    empCheck = Math.floor(Math.random()*10)%3;
    emphrs = getWorkingHours(empCheck);
}
empWage = emphrs*WAGE_PER_HOUR;
console.log("Employee Wage For "+NUM_OF_WORKING_DAYS+" is "+empWage);

//UC5
const MAX_HRS_IN_MONTH = 160;
const MAX_DAYS_IN_MONTH = 20;
let totalWorkingDays = 0;
let totalEmpHrs = 0;
while(totalWorkingDays<MAX_DAYS_IN_MONTH&&totalEmpHrs<MAX_HRS_IN_MONTH){
    totalWorkingDays++;
    empCheck = Math.floor(Math.random()*10)%3;
    totalEmpHrs+=getWorkingHours(empCheck);
}
empWage=emphrs*WAGE_PER_HOUR;
console.log("Total days "+totalWorkingDays+" and total working hours "+totalEmpHrs+" and total employee wage is "+empWage);