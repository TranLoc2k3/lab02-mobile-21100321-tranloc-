// Họ và tên: Trần Lộc
// MSSV: 21100321
// Lab: 02

let arr = [3, 5, 3, 30, 7, 9, 10, 12, 15, 20];

// Handle find method in array.prototype

Array.prototype.myFind = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return i;
        }
    }
    return undefined;
}

// console.log("My find method: ", arr.myFind((el) => el > 10));


// Handle filter method in array.prototype

Array.prototype.myFilter = function (callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
}

// console.log("My filter method: ", arr.myFilter((el) => el > 10));


// Handle map method in array.prototype

Array.prototype.myMap = function (callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
}


// console.log("My map method: ", arr.myMap((el) => el * 2));



// Handle reduce method in array.prototype

Array.prototype.myReduce = function (callback, initialValue) {
    let accumulator = initialValue || this[0];
    for (let i = initialValue ? 0 : 1; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
}

console.log("My reduce method: ", arr.myReduce((acc, el) => acc + el, 0));