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
let empHrsMap = new Map();
totalEmpHrs = 0, totalEmpDays = 0;
while(totalEmpHrs<=MAX_HRS&&totalEmpDays<MAX_DAYS){
    let empCheck = Math.floor(Math.random()*10)%3;
    let emphrs = getWorkingHours(empCheck);
    totalEmpHrs+=emphrs;
    totalEmpDays++;
    empWageMap.set(totalEmpDays,emphrs*WAGE_PER_HOUR);
    empHrsMap.set(totalEmpDays,emphrs)
}
console.log("UC8 map implementation: "+empWageMap.forEach(printElementsInMap)+" total Wage: "+Array.from(empWageMap.values()).reduce(totalWages,0))
function printElementsInMap(key,value){
    console.log("key: "+key+" value: "+value)
}

//UC9 arrow function
const findTotal = (totalVal,dailyVal)=>{
    return totalVal+dailyVal;
}
totalEmpHrs = Array.from(empHrsMap.values()).reduce(findTotal,0);
totalWage = empDailyWageData.filter(dailyWage=>dailyWage>0).reduce(findTotal,0);
console.log("UC9 emp wage with arrow function: total hrs:"+totalEmpHrs+" total wages:"+totalWage);


let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();
empHrsMap.forEach((value,key)=>{
    if(value==8){
        fullWorkingDays.push(key)
    }else if(value==4)
    partWorkingDays.push(key)
    else nonWorkingDays.push(key);
})
console.log(fullWorkingDays)
console.log(partWorkingDays)
console.log(nonWorkingDays)


//UC10
const calcDailyWage = (emphrs)=>{
    return emphrs*WAGE_PER_HOUR;
}
totalEmpHrs = 0
totalEmpDays = 0
let empDailyHrsAndWageArr = new Array();
while(totalEmpDays<MAX_DAYS&&totalEmpHrs<MAX_HRS){
    totalEmpDays++
    let empCheck = Math.floor(Math.random()*10)%3;
    let empHrs = getWorkingHours(empCheck)
    totalEmpHrs+=empHrs
    empDailyHrsAndWageArr.push({
        dayNum:totalEmpDays,
        dailyHours:empHrs,
        dailyWage:calcDailyWage(empHrs),
        toString(){
            return "\nDay"+this.dayNum+'=>Working hours is '+this.dailyHours+' and wage earned ='+this.dailyWage
        }
    })
}
console.log("UC10 showing daily hours worked and wage earned: "+empDailyHrsAndWageArr)

//UC11A
totalWage = empDailyHrsAndWageArr.filter(dailyHrsAndWage=>dailyHrsAndWage.dailyWage>0)
                .reduce((totalWage,dailyHrsAndWage)=>totalWage+=dailyHrsAndWage.dailyWage,0)//doubt

totalEmpHrs = empDailyHrsAndWageArr.filter(dailyHrsAndWage=>dailyHrsAndWage.dailyHours>0)
                .reduce((totalHrs,dailyHrsAndWage)=>totalHrs+=dailyHrsAndWage.dailyHours,0)

console.log("\nUC 11A total wage:"+totalWage+" for total hours:"+totalEmpHrs)

//UC11B
process.stdout.write("\nUC11B logging full work days")
empDailyHrsAndWageArr.filter(dailyHrsAndWage=>dailyHrsAndWage.dailyHours==8)
                    .forEach(dailyHrsAndWage=>process.stdout.write(dailyHrsAndWage.toString()))

//UC11C
process.stdout.write("\n\nUC11C logging part working days")
empDailyHrsAndWageArr.filter(dailyHrsAndWage=>dailyHrsAndWage.dailyHours==4)
                    .forEach(dailyHrsAndWage=>process.stdout.write(dailyHrsAndWage.toString()))

//UC11D
process.stdout.write("\n\nUC11C logging no working days")
empDailyHrsAndWageArr.filter(dailyHrsAndWage=>dailyHrsAndWage.dailyHours==0)
                    .forEach(dailyHrsAndWage=>process.stdout.write(dailyHrsAndWage.toString()))

//UC11-ability to create employee payroll data
/*
class EmployeePayrollData{
    id;
    name;
    salary;

    constructor(id,name,salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    get name(){
        return this._name;
    }
    set name(name){
        this._name = name;
    }
    get id(){
        return this._id;
    }
    set id(id){
        this._id = id;
    }
    toString(){
        return "id="+this.id+" name="+this.name+" salary="+this.salary;
    }
}
let employeePayrollData = new EmployeePayrollData(1,"Mark",30000);
console.log("\n\nUC11 payroll object:  "+employeePayrollData.toString());
employeePayrollData.name = "Prashant"
console.log("\n edited data:         "+employeePayrollData.toString())
*/
//UC12
class EmployeePayrollData{
    id;
    salary;
    gender;
    startDate;

    constructor(...parameters){
        this.id = parameters[0]
        this.name = parameters[1]
        this.salary = parameters[2]
        this.gender = parameters[3]
        this.startDate = parameters[4]
    }

    get name(){
        return this._name;
    }
    set name(name){
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$')
        if(nameRegex.test(name))
        this._name = name;
        else throw "Name is Incorrect!"
    }
    toString(){
        const options = { year: 'numeric',month: 'long',day: 'numeric',weekday:'long'}
        const empDate = this.startDate == undefined ?"undefined":this.startDate.toLocaleDateString("en-US",options);
        return "id="+this.id+" name="+this.name+" salary="+this.salary+" gender="+this.gender+" start date:"+empDate
    }
}
let employeePayrollData = new EmployeePayrollData(1,"Mark",30000);
console.log("\n\nUC12 payroll object:  "+employeePayrollData.toString());
employeePayrollData.name = "prashant";
console.log(employeePayrollData.toString())
let newEmployeePayrollData = new EmployeePayrollData(2,"Terrisa",40000,"F",new Date())
console.log(newEmployeePayrollData.toString())

//

