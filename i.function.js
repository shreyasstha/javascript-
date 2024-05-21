//function: block of code organized together to perform specific action

//to make code reusable and less redundant
//function can be repeated
//DRY => Do not Repeat Yourself

//?syntax:
// function function_name(){
//     some code here
// }

// function addNumbers(){
//     let sum =2 + 3;
//     console.log(sum);
// }
// addNumbers();
// addNumbers();
// addNumbers();

// function addNumbers(num1, num2){
//     console.log(num1, num2)
// }
// addNumbers(10,20)

// function addNumbers(num1, num2){
//     let sum =num1 +num2;
//     console.log(sum);
// }
//addNumbers(10,20);
//addNumbers(3,2);


// function addNumbers(num1, num2){
//     let sum =num1 +num2;
//     return sum;
// }
// const result = addNumbers(10,20);
// console.log(result);


//?hoisting =>pull up : function can be called before developing a function
// sayHello()
// function sayHello(){
//     console.log('hello')
// }

// var x;
// console.log(x);
// x=5;


//?arrow function

// const greetUser = () => {
//     console.log('Good afternoon');
// };
// greetUser();


// const greetUser = (userName) => {
//     console.log(`Good afternoon ${userName}`)
// }
// greetUser('ram')


// const calculateProduct =(x,y) => {
//     let product = x * y;
//     return product;
// };
// const result = calculateProduct(5,6);
// console.log(result); 
//?return: const result

//?WAP that calculate whether given number is odd or even
// const calculateOddEven = (x) =>{

//     let rem = x % 2;

//     if(rem === 0){
//         return 'even';
//     }
//     else{
//         console.log('odd number');
//     }

// };
// const rel = calculateOddEven(16)
// console.log(rel)


//?WAF that returns division result
//const doDivide =(x,y) => x / y;  //as only one is return it can be directly be written

//const division = doDivide(10,5);
//console.log(division);
//console.log(doDivide(10,2));


// const calculateOddEven = (num) => (num % 2 === 0? `${num} is even` : `${num} is odd`);
// const result = calculateOddEven(200);
// const result2 = calculateOddEven(205);
// console.log(result, result2)


//?WAF that accepts first name and last name as input
//?and returns full name
const getFullName = (fname, lname) =>{
      let fullName = `${fname} ${lname}`;
      //let fullName = fname +' '+ lname;
      return fullName;
}
const result = getFullName('shreya', 'shrestha');
console.log(result);


//?call back function
//?function which passed as parameter to another function

const doSum = (x,y,print) => {
      let sum =x +y;
      print(sum);
};
doSum(5,10,(value) => {
      console.log(value);  //callback func
});