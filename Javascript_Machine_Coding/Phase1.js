// 1. Handle Deep Equal with functions as value

function deepEqual(obj1, obj2) {
  if (obj1 === obj2) return true;

  if (
    typeof obj1 !== 'object' ||
    typeof obj2 !== 'object' ||
    obj1 == null ||
    obj2 == null
  ) {
    if (typeof obj1 === 'function' && typeof obj2 === 'function') {
      return obj1.toString() === obj2.toString(); // Compare function string representations
    }

    return false;
  }

  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  return keys1.every((key) => deepEqual(obj1[key], obj2[key]));
}

// Example Usage

const obj1 = { a: 1, b: { c: () => {} } };

const obj2 = { a: 1, b: { c: () => {} } };

console.log(deepEqual(obj1, obj2)); // true

// 2. Handle Deep Equal

function deepEqual(obj1, obj2) {
  if (obj1 === obj2) return true;

  if (
    typeof obj1 !== 'object' ||
    typeof obj2 !== 'object' ||
    obj1 == null ||
    obj2 == null
  )
    return false;

  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  return keys1.every((key) => deepEqual(obj1[key], obj2[key]));
}

// Example Usage

console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } })); // true

// 3. Polyfill with Array building custom reducer

Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : this[0];

  let startIndex = initialValue !== undefined ? 0 : 1;

  for (let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }

  return accumulator;
};

// Example Usage

console.log([1, 2, 3, 4].myReduce((acc, num) => acc + num, 0)); // 10

// 4. Implement N Async Tasks with callback style
function runSeries(tasks, cb) {
  let index = 0;

  function next() {
    if (index === tasks.length) return cb();
    tasks[index++](() => next());
  }

  next();
}

// Example Usage
runSeries(
  [
    (next) =>
      setTimeout(() => {
        console.log('Task 1');
        next();
      }, 1000),
    (next) =>
      setTimeout(() => {
        console.log('Task 2');
        next();
      }, 500),
    (next) =>
      setTimeout(() => {
        console.log('Task 3');
        next();
      }, 200),
  ],
  () => console.log('All tasks completed')
);

// Example Usage runSeries([ (next) => setTimeout(() => { console.log("Task 1"); next(); }, 1000), (next) => setTimeout(() => { console.log("Task 2"); next(); }, 500), (next) => setTimeout(() => { console.log("Task 3"); next(); }, 200) ], () => console.log("All tasks completed"));

// 5.📌 Polyfill of Promise.all

Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    let results = [];
    let completed = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = value;
          completed++;
          if (completed === promises.length) resolve(results);
        })
        .catch(reject);
    });
  });
};

// Example Usage
Promise.myAll([
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3),
]).then(console.log); // [1, 2, 3]

// 6. Polyfill of Promise.any

Promise.myAny = function (promises) {
  return new Promise((resolve, reject) => {
    let errors = [];
    let count = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(resolve)
        .catch((err) => {
          errors[index] = err;
          count++;
          if (count === promises.length)
            reject(new AggregateError(errors, 'All Promises Rejected'));
        });
    });
  });
};

// Example Usage
Promise.myAny([
  Promise.reject('Err1'),
  Promise.resolve('Success'),
  Promise.reject('Err2'),
])
  .then(console.log) // "Success"
  .catch(console.error);

// 7. Implement Debouncing

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

// Example Usage
const log = debounce(() => console.log('Debounced!'), 1000);
log();
log();
log(); // Only this execution runs after 1s
