/* Thinking process: Use loop to find num1 (largest) and num2 (second largest).
  Don't need additional arrays.
*/

const sumLargestNumbers = function(data) {

  let num1 = 0;
  let num2 = 0;
  
  for ( let i = 0 ; i < data.length ; i++ ){
    if (data[i] > num1) {
      num1 = data[i];  
      }
    }

  for (let j = 0; j < data.length; j++){
    if((data[j] < num1) && (data[j] > num2 ))   {
    num2 = data[j]
    }
  }

  return (num1 + num2); 

};

console.log(sumLargestNumbers([1,12,134,4,4]));
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));