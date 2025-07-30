let num = 0; //Loop Variable
while(num < 0) { //Loop Condition
    console.log(num); //Loop Statement
    num++; //Loop Increment or Decrement
}
/**
 * for(first part ; second part; third part)
 */
for(let i = 1; i <= 1; i++){
    console.log(i);
}

// Summiation of number from 11 to 20 
console.log('Summiation of 11 to 20  -> ')
let sum = 0;
for(i = 11; i <= 20; i++){
    sum += i;
}
console.log("Summiation of 11 to 20 is :", sum);

// Reverse ForLoop || Decremental For Loop
for(let i = 10; i >= 5; i--){
    console.log(i);
}