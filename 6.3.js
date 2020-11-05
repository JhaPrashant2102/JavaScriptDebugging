const HEAD = 1;
const TAIL = 0;
function performToss(){
    let toss = Math.floor(Math.random()*10)%2;
    switch(toss){
        case HEAD:
            return "Head";
        case TAIL:
            return "Tail";
        default:
            return "";
    }
}
let toss = Math.floor(Math.random()*10)%2;
let headCount = 0;
let tailCount = 0
while(headCount<11&&tailCount<11){
    let toss = performToss();
    if(toss == "Head")
    headCount++;
    else tailCount++;
    console.log("number of heads: "+headCount);
    console.log("number of tails: "+tailCount);
}