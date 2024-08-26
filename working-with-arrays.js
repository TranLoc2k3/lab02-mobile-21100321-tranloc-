// Họ và tên: Trần Lộc
// MSSV: 21100321
// Lab: 02

// Coding challenge 1
function checkDogs(dogsJulia, dogsKate) {
    const dogsJuliaCopy = dogsJulia.slice(1, -2);
    const dogs = dogsJuliaCopy.concat(dogsKate);
    dogs.forEach(function (dog, i) {
        const age = dog >= 3 ? `an adult, and is ${dog} years old` : `still a puppy 🐶`;
        console.log(`Dog number ${i + 1} is ${age}`);
    });
}

// console.log("---- Data 1 ----");
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// console.log("---- Data 2 ----");
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);



// Coding challenge 2

function calcAverageHumanAge(ages) {
    const humanAges = ages.map(age => age <= 2 ? 2 * age: 16 + age + 4);
    const adults = humanAges.filter(age => age >= 18);
    const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
    return average;
}

// console.log("---- Data 1 ----");
// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log("---- Data 2 ----");
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));


// Coding challeng 3

function calcAverageHumanAge2(ages) {
    const average = ages.map(age => age <= 2 ? 2 * age: 16 + age + 4)
                        .filter(age => age >= 18)
                        .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
    return average;
}

// console.log("---- Data 1 ----");
// console.log(calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]));
// console.log("---- Data 2 ----");
// console.log(calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4]));


// Coding challeng 4

const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] }
];

dogs.forEach(
    dog => dog.recommendedFood = dog.weight ** 0.75 * 28
)

// console.log("Information about dogs");
// console.log(dogs);

const dogSarah = dogs.filter(
    dog => dog.owners.includes('Sarah')
)
// dogSarah.forEach(
//     dog => {
//         let deltaFood = Math.abs(dog.curFood - dog.recommendedFood);
//         if (deltaFood / dog.recommendedFood * 100 > 10) {
//             if (dog.curFood > dog.recommendedFood) {
//                 console.log("Eat to much")
//             }
//             else {
//                 console.log("Eat too little")
//             }
//         }
//     }
// )

// Challenge 4.3

let ownersEatTooMuch = dogs.filter(
    dog => (dog.curFood - dog.recommendedFood) / dog.recommendedFood * 100 > 10
).flatMap(dog => dog.owners)

let ownersEatTooLittle = dogs.filter(
    dog => (dog.recommendedFood - dog.curFood) / dog.recommendedFood * 100 > 10
).flatMap(dog => dog.owners)

// console.log(ownersEatTooMuch);
// console.log(ownersEatTooLittle);

// Challenge 4.4

// console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
// console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// Challenge 4.5

// dogs.forEach(
//     dog => {
//         let deltaFood = Math.abs(dog.curFood - dog.recommendedFood);
//         if (deltaFood / dog.recommendedFood * 100 > 10) {
//             console.log(dog, false);
//         }
//         else console.log(dog, true);
//     }
// )


// Challenge 4.8

const dogsCopy = dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsCopy);