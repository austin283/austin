// const fruits =["apple","banana","mango","orange","grapes"];
// let b = fruits.length;

// for(let i=0; i<b; i++)    {console.log(fruits[i])
// }

// const bank=[name:"ola", amount:-1000000000000000000000,age:17]
//  let text="";
//  for(let x in bank){
//     console.log(bank[x])
//  }



//  const number=[50,70,89,15,16]
//  let text="";
//   for(let x in number)
//   {console.log(number[x])}



// for (let i=70; i<=100; i++)
// {console.log(i)}



// let count1=1;
// do{
//     console.log(count1);
//     count1++;

// }while(count1<=5);

// const name=["tunde","ola","micheal","kimbe","emmanual"]
// do{
//     console.log(name);
//     name++;
    

// }while(name);





//functions in javascript
// function addTwoNumbers(a,b){
//     return a+b;


// }
// console.log(addTwoNumbers(2,5))


// function name(a){
//     return a-b;
// }console.log(name(fortune,Ekwem))




//   function calculateAreaOfSquare(side) {
//     return side * side; // or side ** 2
//   }
//   const sideLength = 5;
//   const area = calculateAreaOfSquare(sideLength);
//   console.log(`The area of the square is: ${area}`);


//  const text="aptech nigeria"
//  const numberOfCharacters=text.length;
//  console.log(numberOfCharacters)



//  const capitalText="HELLOWORLD";
//  const smallText= capitalText.toLowerCase();
//  console.log(smallText);



// const originalText = "HELLO WORLD";
// const reversedText = originalText.split('').reverse().join('');
// console.log(reversedText);

//to vhange to lowercase
// let address="ONE TESLIM BALUGON STREET"
// let smallText= address.toLowerCase();
// console.log(smallText);

//to comibine words together
// let address="one teslim balugon street"
// let combined=address.split(" ").join("");
// console.log(combined)


// let da = new Date;
// console.log(da);


//mapping of product and price 
/*let products = [
    { name: "macbook", price: 1313245267278 },
    { name: "11 pro", price: 20000 },
    { name: "acer", price: 14000 },
    { name: "lenvo", price:12000 },
     //unfinished work
];
console.log(products)*/
//part2
// const gadget = new Map();
// gadget.set("macbook air",1.5);
// gadget.set("acer",20000);
// gadget.set("lenvo",12000);
// gadget.set("hp",10000);
// gadget.set("11pro",5500000);
// console.log(gadget)

function getKeyByvalue(map,value){
for(let [key,val] of map){


    if(val===value){
        return key;

}





}
