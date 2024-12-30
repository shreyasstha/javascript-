//promise => something that happens in future

//state
//? pending
//? success
//? failure

//fetch data from fb api
// const getSum = (x,y, callback) =>{
//     setTimeout(() =>{
//         let sum =x+y;

        
//     })
// };
// getSum(5,7,(error,data) =>{
//     console.log(error);
//     console.log(data);
// })

//?promise
const randomPromise = new Promise((resolve, reject) =>{
    setTimeout(() => {
        let randomNumber = Math.random()
    })
})

//?async await: returns promise
const getRandomNumber =async() => {
    try {
       const number= await randomPromise;
       return number;
       console.log(number);
    } catch (error) {
        console.log(error);   
    }
};
const result = await getRandomNumber();
console.log(result);