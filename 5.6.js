function findFactor(num){
    console.log("factors of "+num+" are: ")
    for(let i = 0; i*i<=num;i++){
        if(num%i==0)
        console.log(i+", ")
    }
}

let num =  Math.floor(Math.random()*1000)%1000;
findFactor(num);