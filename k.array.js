//array =>  collection of data
//can contain mixed data types

//?static language => array is collection of similar typed data
//?dynamic language => array is collection of mixed data type

let temperatureList =[4, 15, 28, 32, 20, 15];
//console.log(typeof temperatureList,temperatureList);

let mixedArray =[1, 'nepal', true, 0, null, undefined,
    {name: 'ram'},
    [1,2,3],
];
//console.log(typeof mixedArray,mixedArray)  // allows mixed data types

let students =['Rohan', 'Milan', 'Aayush', 'Nabina', 'Reena'];
//console.log(students);
//?array has index as key 
//?index always starts with zero
//?order is preserved in array
//console.log(students[0],students[1]);
console.log(students.length);

for(let i=0; i <= students.length-1; i++){
    //console.log(students[i]);       // to print multiple data 
}


//?array methods
//?push, pop, shift, unshift, reverse, sort
let numList =[200, 300, 500];

 //?push => to add items to end of array
 numList.push(600,900);

 //?pop => remove last item from array
 numList.pop();
 numList.pop();

 //?shift => remove first item from array
 numList.shift();

 //?unshift => add items to start of array
 numList.unshift(50, 100);

 //?reverse => reverses the order of array
 numList.reverse();
 //console.log(numList);


//?more methods
//?array loop
//?map, filter, find, reduce

const priceList =[100,200, 300, 400, 500];
//?map
//?returns new array
//?to change array data
//?original array size === returned array size

const newpriceList =priceList.map((item, index, array) => {  //?callback function
    //console.log(item, index, array);
    return item +50;
});
//console.log(newpriceList);
//console.log(priceList);


const words =['apple', 'ball', 'cat'];
const newWords =words.map((item, index, array) => {
   const upperCaseWord = item.toUpperCase();
    return upperCaseWord;
});
//const newWords =words.map((item, index, array) =>  upperCaseWord = item.toUpperCase());
//console.log(newWords);

const washingMachineList =[
    {
        brand:'Samsung',
        price: 899,
    },
    {
        brand: 'LG',
        price: 582,
    },
    {
        brand: 'Whirlpool',
        price: 4225,
    },
    {
        brand: 'Xiaomi',
        price: 741,
    }
];

//?increase price of each item by 50
const newList =washingMachineList.map((item, index, array) =>{
    let newPrice = item.price + 50;
    return{brand: item.brand, price: newPrice}
})
console.log(newList)

object copy =>read





