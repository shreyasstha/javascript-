
//?qno 2

let myHouseDetails ={
    numberofRooms: 9,
    numberofMembers: 10,
    colorofHouse: 'Green',
    builtYear: 2011,
    numberofStorey: 3,
};

//?A :delete the numberofMember
//delete myHouseDetails.numberofMembers
//console.log('A', myHouseDetails);

//?B: update numberofRooms
myHouseDetails.numberofRooms= 15;
//console.log(myHouseDetails)

//?C add estimatedPriceOfHouse
myHouseDetails.estimatedPriceOfHouse = '2 crores' ;
//console.log(myHouseDetails)

//?D 
console.log('I have a', myHouseDetails.colorofHouse ,'colored house with',
 myHouseDetails.numberofRooms ,'rooms where' , myHouseDetails.numberofMembers ,
 'people are living. The house is', myHouseDetails.numberofStorey ,
 'storey and was built in', myHouseDetails.builtYear ,
'with an estimated budget of', myHouseDetails.estimatedPriceOfHouse);

console.log(`I have a ${myHouseDetails.col}`)