let origDogs = ["Bullgod","labra","beagle"]
let slicedDogs = origDogs.slice(1,2)

/*
console.log(slicedDogs);
let copyDogs = [...origDogs]
console.log(copyDogs);
console.log(origDogs.slice(0))//no point
console.log(origDogs.slice(1))
console.log(origDogs.slice(2))
*/

/*
let pushDog = origDogs.push("Golden retriever")
console.log(origDogs)
console.log(pushDog)//integer returning size of array
let popDog = origDogs.pop();
console.log(origDogs)
console.log(popDog)//returns element which is being popped out
*/

/*
let addFirst = origDogs.unshift("Golden retriever");
//adds to starting index
console.log(addFirst)//size of the array
console.log(origDogs)

let shiftDog = origDogs.shift()//removes first element
console.log(shiftDog)//prints the removed element
console.log(origDogs)
*/

/*
//atomic add and remove elements
origDogs.splice(2,1,"Pug","Boxer")//(where,how many to remove,element list)//where is index here
console.log(origDogs);
*/
let cats = new Array("American curl","Bengal")
let birds = new Array("Falcons","Ducks","Flamingoes")

let animals = origDogs.concat(cats,birds);//origDogs doesnot get affected
console.log(animals)
console.log(origDogs)
let sortDogs = origDogs.slice(0).sort()
console.log(sortDogs)
console.log(origDogs)//origDogs remains same

function scanArray([first,second]){
    console.log("Scan: "+first+" "+second)
}
scanArray(animals);
let joinAnimals = animals.join(" ");//joins element in animals with a space
console.log(joinAnimals);
let allAnimals = ""
for(let animal of animals)
allAnimals+=animal+" ";
console.log(allAnimals);