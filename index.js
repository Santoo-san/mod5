console.log("beginning");

// const huiswerkMaken = (vak, callback) => {
//   console.log(`Ok, ok, ik ga nu mijn ${vak} huiswerk maken`);
//   setTimeout(() => {
//     callback();
//   }, 2000);
// };

// const klaarMetHuiswerk = () => {
//   console.log("Kijk Paps/Mams, ik ben klaar met mijn huiswerk!");
// };

// huiswerkMaken("wiskunde", klaarMetHuiswerk);

// console.log("js promises");

// const sinterklaasIsGul = true;

// // // Promise maken (dit hoeven jullie dus niet te leren, dit is aan de API (back-end) kant)
// const krijgIkEenNieuweiPhone = new Promise((resolve, reject) => {
//   if (sinterklaasIsGul) {
//     const smartphone = {
//       merk: "Apple",
//       type: "iPhone 11",
//     };
//     resolve(smartphone);
//   } else {
//     const metWelkeReden = new Error(
//       "Je bent stout geweest, geen cadeaus voor jou"
//     );
//     reject(metWelkeReden);
//   }
// });

// // Promise aanroepen, of "consumeren" (dit zullen je dus wel doen en moeten leren)
// const vraagAanSinterklaas = () => {
//   krijgIkEenNieuweiPhone
//     .then(function (resolved) {
//       // yay, je hebt een nieuwe smartphone
//       console.log(resolved);
//     })
//     .catch(function (error) {
//       // oeps, geen Sinterklaas cadeau dit jaar
//       console.log(error.message);
//     });
// };

// vraagAanSinterklaas();
// console.log("oeenen met promises");
// console.log("exercise 1");
// const testNum = (num) => {
//   return new Promise((resolve, reject) => {
//     if (num > 10) {
//       resolve(num + " is greater than 10");
//     } else {
//       reject(num + " is less than 10");
//     }
//   });
// };

// testNum(9)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// testNum(11)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

console.log("exercise 2");

const arrayOfWords = ["cucumber", "tomatos", "avocado"];
const complicatedArray = ["cucumber", 44, true];

const makeAllCaps = (input) => {
  return new Promise((resolve, reject) => {
    if (
      input.every((veggie) => {
        return typeof veggie === "string";
      })
    ) {
      resolve(
        sortWords(
          input.map((veggie) => {
            return veggie.toUpperCase();
          })
        )
      );
    } else {
      reject("Not a string!");
    }
  });
};

const sortWords = (input) => {
  return new Promise((resolve, reject) => {
    if (input) {
      resolve(input.sort());
    } else {
      reject("strings only!");
    }
  });
};

makeAllCaps(arrayOfWords)
  .then(sortWords(arrayOfWords))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

makeAllCaps(complicatedArray)
  .then(sortWords(complicatedArray))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// rest spread

console.log("rest/spread")

const optellen = function(...args) {
  return args.reduce((acc,item) => {
          return acc + item;
  })
}

console.log(optellen(1,2,3,4,5,6)); // verwachte uitkomst: 21

const optellen2 = function(num1, num2, num3) {
  return num1 + num2 + num3;
}

const cijfers = [1, 2, 3];

console.log(optellen2(...cijfers));
// verwachte uitkomst: 6

console.log("The End");
