//filter: changes size
//loop
//?returns  new array
//?there is more possibility that original array size and
//?returned array size is different

//?function => filters out items
//const priceList =[45, 55, 65, 75, 85, 95, 105];
// priceList.filter((item, index, array) =>{
//     console.log(item);
//});

// const priceList =[45, 55, 65, 75, 85, 95, 105];
// const newPriceList = priceList.filter((item, index, array) =>{
//     if(item > 80){
//         return item ;   //directly can be written: return item >80
//     }
// });
//console.log(newPriceList);

// //?example 2
// const numList =[52, 63, 75, 89, 91, 104, 204, 500];
//?only even numbers from numList array
// const newNumlist = numList.filter((item, index, array) => {
//     if(item % 2 === 0){
//         return item;
//     }
// });
//console.log(newNumlist);

// const newNumlist2 = numList.filter((element) => element %2 === 0);
// console.log(newNumlist2)

//?find
//?loop
//?find return value
//?function => to find specific value

// const numList =[52, 63, 75, 89, 91, 104, 204, 500];

// const value = numList.find((item, index, array)=>{

//     if(item === 91){
//         return item;
//     }
//or : return item === 91
// });
// console.log(value);
// const value2 = numList.find((item) => item === 204);
// console.log(value2);

// const smth =[10, 0, 45, 65];
// const value = smth.find((item) => {
//     return item === 0;     //prints the same item as output
// });
// console.log(value)

//?reduce
//?loop
//?does not return  anything
const mileageList = [45, 35, 50, 20, 11, 6];
//  let total = 0;

//  mileageList.forEach((item, index, array) =>{
//       total = total +item;
//  })
//  console.log(total);

const value = mileageList.reduce((total, item, index, self) => {
  return total + item;
}, 0); //total= 0
//console.log(value);

//?sort
const nameList = ["Yunika", "Nabina", "Aarati", "Shreya", "Sushil", "Naresh"];

//const sortedArray =nameList.toSorted();
//console.log(sortedArray)
//nameList.sort();
//console.log(nameList)

// nameList.sort().reverse();
// console.log(nameList)

const marks = [45, 55, 24, 92, 50, 129];
//marks.sort((a, b)=> {
// return a-b;    // aagadi bata
//});
// marks.sort((a, b)=> {
//     return b-a;    // paxadi bata
// });
// console.log(marks);

const washingMachineList = [
  {
    brand: "Samsung",
    price: 899,
  },
  {
    brand: "LG",
    price: 582,
  },
  {
    brand: "Whirlpool",
    price: 4225,
  },
  {
    brand: "Xiaomi",
    price: 741,
  },
];
//?find machines whose price is greater than 900

// const newwashingMachineList = washingMachineList.filter((item) => {
//     return item.price >900
// })
// console.log(newwashingMachineList);

//?find machine whose brand is Whirlpool

// const newwashingMachineList = washingMachineList.find((item) => {
//     return item.brand=== 'Whirlpool'
// })
// console.log(newwashingMachineList);

//?decrease price of samsung by 15% as festival offer

const newwashingMachineList = washingMachineList.map((item) => {
  if (item.brand === "Samsung") {
    return {
      brand: item.brand,

      price: item.price - 0.15 * item.price,
    };
  }
  return item;
});
console.log(newwashingMachineList);

//filter: changes size
//loop
//?returns  new array
//?there is more possibility that original array size and
//?returned array size is different

//?function => filters out items
//const priceList =[45, 55, 65, 75, 85, 95, 105];
// priceList.filter((item, index, array) =>{
//     console.log(item);
//});

// const priceList =[45, 55, 65, 75, 85, 95, 105];
// const newPriceList = priceList.filter((item, index, array) =>{
//     if(item > 80){
//         return item ;   //directly can be written: return item >80
//     }
// });
//console.log(newPriceList);

// //?example 2
// const numList =[52, 63, 75, 89, 91, 104, 204, 500];
//?only even numbers from numList array
// const newNumlist = numList.filter((item, index, array) => {
//     if(item % 2 === 0){
//         return item;
//     }
// });
//console.log(newNumlist);

// const newNumlist2 = numList.filter((element) => element %2 === 0);
// console.log(newNumlist2)

//?find
//?loop
//?find return value
//?function => to find specific value

// const numList =[52, 63, 75, 89, 91, 104, 204, 500];

// const value = numList.find((item, index, array)=>{

//     if(item === 91){
//         return item;
//     }
//or : return item === 91
// });
// console.log(value);
// const value2 = numList.find((item) => item === 204);
// console.log(value2);

// const smth =[10, 0, 45, 65];
// const value = smth.find((item) => {
//     return item === 0;     //prints the same item as output
// });
// console.log(value)

//?reduce
//?loop
//?does not return  anything
const mileageList = [45, 35, 50, 20, 11, 6];
//  let total = 0;

//  mileageList.forEach((item, index, array) =>{
//       total = total +item;
//  })
//  console.log(total);

const value = mileageList.reduce((total, item, index, self) => {
  return total + item;
}, 0); //total= 0
//console.log(value);

//?sort
const nameList = ["Yunika", "Nabina", "Aarati", "Shreya", "Sushil", "Naresh"];

//const sortedArray =nameList.toSorted();
//console.log(sortedArray)
//nameList.sort();
//console.log(nameList)

// nameList.sort().reverse();
// console.log(nameList)

const marks = [45, 55, 24, 92, 50, 129];
//marks.sort((a, b)=> {
// return a-b;    // aagadi bata
//});
// marks.sort((a, b)=> {
//     return b-a;    // paxadi bata
// });
// console.log(marks);

const washingMachineList = [
  {
    brand: "Samsung",
    price: 899,
  },
  {
    brand: "LG",
    price: 582,
  },
  {
    brand: "Whirlpool",
    price: 4225,
  },
  {
    brand: "Xiaomi",
    price: 741,
  },
];
//?find machines whose price is greater than 900

// const newwashingMachineList = washingMachineList.filter((item) => {
//     return item.price >900
// })
// console.log(newwashingMachineList);

//?find machine whose brand is Whirlpool

// const newwashingMachineList = washingMachineList.find((item) => {
//     return item.brand=== 'Whirlpool'
// })
// console.log(newwashingMachineList);

//?decrease price of samsung by 15% as festival offer

const newwashingMachineList = washingMachineList.map((item) => {
  if (item.brand === "Samsung") {
    return {
      brand: item.brand,

      price: item.price - 0.15 * item.price,
    };
  }
  return item;
});
console.log(newwashingMachineList);
