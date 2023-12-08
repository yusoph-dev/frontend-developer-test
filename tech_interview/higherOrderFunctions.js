console.clear();

const sampleArray = [2, 3, 6, 7];
const sampleObject = {a: 1, b: 3, c: 6, d: 8};

//Using map for me is like using loop in an array by retaining the original variable and redeclare to another variable with different values  
//Using map in Array
const doubledNumbers = sampleArray.map((num) => num * 2);
console.log(doubledNumbers)

//Using map in Object
const mappedObject = Object.fromEntries(
  Object.entries(sampleObject).map(([key, value]) => [key, value * 2])
);
console.log(mappedObject);

const squaredObject = Object.fromEntries(
  Object.entries(sampleObject).map(([key, value]) => [key, value+' square is '+(value*value)])
);
console.log(squaredObject);


//Using reduce is the simplier way of calculating or determining the value of a array variable
//Using reduce in Array
const totalArrayValue = sampleArray.reduce((accumulator, currentValue) => {  
  return accumulator + currentValue;
});
console.log('sum of sampleArray is', totalArrayValue);

//Using reduce in Object
const totalObjectValue = Object.values(sampleObject).reduce((accumulator, currentValue) => accumulator + currentValue);
console.log('sum of sampleObject is', totalObjectValue);

//Using filter is used to retain the original value and redeclare the filtered values based on what is the condition
//Using filter in Array
const evenValues = sampleArray.filter((num) => num % 2 === 0);
console.log('even values of sampleArray is', evenValues);

//Using filter in Object
const oddObject = Object.fromEntries(
  Object.entries(sampleObject).filter(([key, value]) => value % 2 !== 0)
);
console.log('odd values of sampleObject is', oddObject);