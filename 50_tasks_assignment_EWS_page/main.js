//#####################################1

// let fileName = "Elzero.php";
// console.log(fileName.split(".")[0]);
// console.log(fileName.split(".")[1]);
// // Elzero
// // php

//#####################################2

// function addEl(str) {
//   if (str === "") {
//     return str;
//   } else if (str.slice(0, 2) === "El") {
//     return str;
//   } else {
//     return "El" + str;
//   }
// }

// console.log(addEl("")); // ""
// console.log(addEl("Elzero")); // Elzero
// console.log(addEl("zero")); // Elzero

//#####################################3

// let myString = "Hello Elzero Web School @ We Love Programming@ @#!@#$%%^&*";
// console.log(myString.match(/(\w+\s)+@(\s\w+)+/gi).join(""));
// // Output Needed
// ("Hello Elzero Web School @ We Love Programming");

//#####################################4

// function checkRange(n1, n2, n3, n4, n5) {
//   let allInRange = false;
//   let nums = [n1, n2, n3];
//   let min = n4;
//   let max = n5;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > min && nums[i] < max) {
//       allInRange = true;
//     } else {
//       allInRange = false;
//       break;
//     }
//   }
//   return `${allInRange === true ? "Yes" : "Not"} All Numbers Is In Range`;
// }

// console.log(checkRange(5, 10, 15, 5, 50)); // Yes All Numbers Is In Range
// console.log(checkRange(8, 4, 20, 2, 50)); // Yes All Numbers Is In Range
// console.log(checkRange(10, 15, 20, 5, 18)); // Not All Numbers Is In Range

//#####################################5

// function replaceFirstWithLast(word) {
//   return word.charAt(word.length - 1) + word.slice(1, -1) + word.charAt(0);
// }

// console.log(replaceFirstWithLast("olzerE")); // Elzero
// console.log(replaceFirstWithLast("Hello")); // oellH

//#####################################6

// function checkBiggestNum(word) {
//   return String(word).split("").sort().reverse()[0];
// }

// console.log(checkBiggestNum("1500654")); // 6
// console.log(checkBiggestNum("8509507")); // 9

//#####################################7

// let nums = [20, 100, 50, 10, 15, -20, 30];
// console.log([nums.sort((s, b) => b - s)[0], nums.sort((b, s) => b - s)[1]]);
// Needed Output
// [100, 50]

//#####################################8

// let nums = [1000, 10002, 232];
// let goal = 100;

// function closestNum(nums, goal) {
//   let lower = [];
//   let higher = [];

//   // formating main array into two
//   for (let n of nums) {
//     if (n === goal) return n;
//     if (n < goal) lower.push(n);
//     else higher.push(n);
//   }

//   // if no lower numbers exist
//   let low = lower.length ? Math.max(...lower) : null;

//   // if no higher numbers exist
//   let high = higher.length ? Math.min(...higher) : null;

//   // If only higher exists
//   if (low === null) return high;

//   // If only lower exists
//   if (high === null) return low;

//   // Compare distances
//   return goal - low <= high - goal
//     ? `Closest Number Is ${low}`
//     : `Closest Number Is ${high}`;
// }

// console.log(closestNum(nums, goal));
// // Closest Number Is 88

//#####################################9

// function swapEveryTwoChars(word) {
//   let result = "";
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === String(word[i]).toUpperCase()) {
//       result += String(word[i]).toLowerCase();
//     } else {
//       result += String(word[i]).toUpperCase();
//     }
//     if (i + 1 < word.length) {
//       i++;
//       result += String(word[i]);
//     }
//   }
//   return result;
// }

// console.log(swapEveryTwoChars("elZeRo")); // Elzero
// console.log(swapEveryTwoChars("heLlO")); // Hello

//#####################################10

// String.prototype.elzeroRepeat = function (value) {
//   let result = "";
//   for (let i = 0; i < +value; i++) {
//     result += ` ${this.trim()}`;
//   }
//   return result.trim();
// };

// console.log("Elzero ".elzeroRepeat(3)); // Elzero Elzero Elzero

//#####################################11

// let myMoney = 5301503206;

// function comma(num) {
//   let nums = num.toString();
//   let firstNums = "";

//   if (nums.length % 3 === 0) {
//     //if no numbers after 3 digits
//     return nums.match(/(\d{3})/gi).join(",");
//   } else if (nums.length % 3 === 1) {
//     //if one number after 3 digits
//     firstNums += nums.slice(0, 1);
//     nums = nums.slice(1);
//   } else {
//     //if two numbers after 3 digits
//     firstNums += nums.slice(0, 2);
//     nums = nums.slice(2);
//   }

//   return [firstNums, ...nums.match(/(\d{3})/gi)].join(",");
// }
// console.log(comma(myMoney));
// // Needed Output
// 5, 301, 503, 206;

//#####################################12

// let names = ["Osso", "Aola", "Essa", "Igaa", "Daad", "Roor"];
// let result = [];

// names.map((name) =>
//   name[0] === name.slice(-1).toUpperCase() ? result.push(name) : null
// );

// console.log(result); // ['Osso', 'Aola', 'Daad', 'Roor']

//#####################################13

// let theName = "Elzero";

// console.log(theName[0] + theName.slice(-1));
// console.log(theName.slice(1, -1));
// console.log(theName.match(/\w{2}/gi)[1]);

// // Line 1 => Eo
// // Line 2 => lzer
// // Line 3 => ze

//#####################################14

// function repeatWithRules(word) {
//   let result = "";
//   for (let i = 0; i < word.length; i++) {
//     for (let j = 0; j < i + 1; j++) {
//       result += word[i];
//     }
//   }
//   return result;
// }

// console.log(repeatWithRules("Elzero")); // Ellzzzeeeerrrrroooooo
// console.log(repeatWithRules("Hello")); // Heelllllllooooo

//#####################################15

// function concatenateWithoutLast(words) {
//   let result = [];
//   words.map((ele) => result.push(ele.slice(0, -1)));
//   return result.join(" ");
// }

// console.log(concatenateWithoutLast(["Elzeros", "Webd", "Schoold"])); // Elzero Web School

//#####################################16

// function getCharacters(word, nums) {
//   return word.slice(0, nums) + word.slice(-nums);
// }

// console.log(getCharacters("Elzero School", 2)); // Elol
// console.log(getCharacters("Elzero School", 3)); // Elzool

//#####################################17

// function formatName(theName) {
//   let result = [];
//   theName.split(" ").map((ele, i) => {
//     if (i !== 0) {
//       result.push(ele[0].toLowerCase());
//     } else {
//       result.push(ele[0]);
//     }
//   });
//   return result.join(".");
// }

// console.log(formatName("Osama Elzero")); // O.e
// console.log(formatName("Elzero Web School")); // E.w.s

//#####################################18

// let st = "elzero";

// // Output Needed
// "Elzero"
// "Elzero"
// "Elzero"
// "Elzero"
// "Elzero"
// "Elzero"
// "Elzero"
// // CANCELED!!!!!!!!!!!!!!!!

//#####################################19

// let st = "Web SchoolElzero ";

// console.log(st.slice(-7) + st.slice(-17, -7));

// // Needed Output
// ("Elzero Web School");

//#####################################20

// let st = "Elzero";

// console.log(st.slice(-1));
// console.log(st[5]);
// console.log(st.charAt(5));
// console.log(st.substr(-1, 1));
// console.log(st.substring(5));
// console.log(st.split("")[5]);
// console.log(st.match(/\w/gi)[5]);

// // Needed Output
// //   ("o");
// // ("o");
// // ("o");
// // ("o");
// // ("o");
// // ("o");
// // ("o");

//#####################################21

// function getLastDigit(num) {
//   return +num.toString().slice(-1);
// }

// console.log(getLastDigit(1)); // 1
// console.log(getLastDigit(18)); // 8
// console.log(getLastDigit(305)); // 5
// console.log(getLastDigit(1569)); // 9
// console.log(typeof getLastDigit(1569)); // Number

////#####################################22

// let str1 = "AElzero";
// let str2 = "ZAcademy";

// console.log(str1.slice(1) + " " + str2.slice(1)); // Elzero Academy

////#####################################23

// function reversing(str) {
//   return str.replace(/\b\w+\b/g, (word) => {
//     let letters = word.match(/[a-zA-Z]/g) || [];
//     return word
//       .split("")
//       .map((ch) => (/[a-zA-Z]/.test(ch) ? letters.pop() : ch))
//       .join("");
//   });
// }

// console.log(reversing(",@Hello, E@lzero")); // ,@olleH, E@orezl

//AI!!!!!!!!!!!!!

////#####################################24
