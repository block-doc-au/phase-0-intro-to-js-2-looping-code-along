function writeCards(names, event){
  let myArray = [];
for (let i = 0; i < names.length; i++){
  let myString = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
  myArray[myArray.length] = (myString);
  }
return myArray;
};

function countDown(startNumber){
while (startNumber >= 0){
  console.log(startNumber);
  startNumber--;
}
};



let returnedArray = writeCards(["Ada", "Brendan", "Ali"], "birthday");
console.log(`The returned array is :${returnedArray}`);
countDown(10);

