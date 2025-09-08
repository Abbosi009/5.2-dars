                            //********************//

                                // Map va WeakMap//

                            //********************//

// 1. deleteMany
Map.prototype.deleteMany = function (...keys) {
    keys.forEach(key => this.delete(key));
    return this;
};

let obj1 = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3],
    ['d', 4]
]);
console.log(obj1.deleteMany('a', 'c')); 

// 2. 
function mapSum(obj) {
    let sum = 0;
    for (let value of obj.values()) {
        sum += value;
    }
    return sum;
}
let obj2 = new Map([['a', 2], ['b', 5], ['c', 3]]);
console.log(mapSum(obj2)); 

// 3. 
function getMapIntersection(map1, map2) {
    let result = new Map();
    for (let [key, value] of map1) {
        if (!map2.has(key)) result.set(key, value);
    }
    for (let [key, value] of map2) {
        if (!map1.has(key)) result.set(key, value);
    }
    return result;
}

let map1 = new Map([['apple', 1], ['banana', 2], ['orange', 3]]);
let map2 = new Map([['apple', 4], ['orange', 5], ['grape', 6]]);
console.log(getMapIntersection(map1, map2)); 

// 4. 
class CustomWeakMap extends WeakMap {
    get size() {
        let count = 0;
        try {
            this.forEach(() => count++); 
        } catch {
            
            throw new Error("WeakMap uzunligini hisoblab bo‘lmaydi (spec limitation).");
        }
        return count;
    }
}


                       //******************** *//

                         // Set va WeakSet//

                      //********************//

// 1. 
function setUnion(set1, set2) {
    return new Set([...set1, ...set2]);
}
console.log(setUnion(new Set([1, 2, 3]), new Set([2, 3, 4]))); 

// 2. 
function setIntersection(set1, set2) {
    return new Set([...set1].filter(v => set2.has(v)));
}
console.log(setIntersection(new Set([1, 2, 3]), new Set([2, 3, 4]))); 

// 3. 
function checkSetSubset(set1, set2) {
    for (let val of set1) {
        if (!set2.has(val)) return false;
    }
    return true;
}
console.log(checkSetSubset(new Set([1, 2]), new Set([1, 2, 3, 4]))); 



                      //******************** *//

                        // Spread operatori //

                     //******************** *//

// 1. 
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); 

// 2. 
function mergeArr(arr1, arr2) {
    return [...arr1, ...arr2];
}
console.log(mergeArr([1, 5, 8], [7, 9, 10])); 

// 3. 
function concatArrays(...arrays) {
    return [].concat(...arrays);
}
console.log(concatArrays([1, 2], [3, 4], [5, 6])); 
                     