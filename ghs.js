// i = 0;
// do {
//   console.log(i, "GHS Dynamics");
//   i++;
// } while (i <= 5);
// i = 1;
// do {
//   console.log(i, "0 GHS Dynamics");
// } while (i <= 5);
// i++;
// n*i=n*i
// let n = 5;
// for (i = 1; i <= 10; i++) {
//   console.log(n + "*" + i + "=" + n * i);
// }

// for (let i = 0; i <= 5; i++) {
//   let j = "";
//   for (let k = 0; k < i; k++) {
//     j += "*";
//   }
//   console.log(j);
// }
// let array = ["gayatri", "sudha", "ashok", "naik", "yamini"];

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];

//   console.log("array names are:", element);
// }

// let n = 10;
// let i = 1;

// while (i <= n) {
//   if (i % 2 == 0) {
//     console.log(i, "is even number");
//   } else {
//     console.log(i, "is odd number");
//   }
//   i++;
// }

// let n = 10;
// let sum = 0;
// let i = 0;
// while (i < n) {
//   i++;
//   sum += i;
// }

// console.log("sum of numbers from 1 to" + n + "is:" + sum);

let ranNum;

do {
  ranNum = Math.floor(Math.random() * 10) + 1;
  console.log(ranNum);
} while (ranNum <= 5);
