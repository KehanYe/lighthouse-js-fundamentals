const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 10) {
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!");

const chorusTwo = "Let's dance!";
let repeatTwo = 0;
while (repeatTwo < 10) {
  if (repeatTwo === 5) {
    console.log("*change key*");
  }
  console.log(chorusTwo);
  repeatTwo++;
}
console.log("Until the sun comes up!");