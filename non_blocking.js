//?asynchronous
//?node js=> javascript  runtime
//?node => single thread : only one at a time

//?non-blocking:does not block any code
console.log('hi');

setTimeout(() => {
    console.log('timeout1');
},5000);  //print timeout after 5 sec

setTimeout(() => {
    console.log('timeout2');
},0); 

setTimeout(() => {
    console.log('timeout3');
},7000); 

console.log('hello');
//op: hi hello timeout2 timeout1