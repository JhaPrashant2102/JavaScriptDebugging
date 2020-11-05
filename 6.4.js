function betResult(){
    let result = Math.floor(Math.random()*10)%2;
    if(result==0)
    return 0;
    else return 2;
}
let totalMoney = 100;
while(totalMoney<200&&totalMoney>0){
    totalMoney=--totalMoney+betResult();
    console.log("Total Money = "+totalMoney);
}