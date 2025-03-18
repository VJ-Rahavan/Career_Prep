Here are the answers to the questions:

---

## **First Technical Round**

### **1. Tell me about yourself and your experience in mobile app development.**

_"I am Vijayarahavan, a React Native developer with over two years of experience in building mobile applications. I have worked on end-to-end development, including UI implementation, state management, API integration, and optimizing app performance. I have successfully deployed apps to both the App Store and Play Store and have experience mentoring interns. I am proficient in React, React Native, Zustand, Redux, Firebase, and Swift for writing native modules."_

---

### **2. What is React and why do we need this?**

React is a JavaScript library for building user interfaces, primarily used for developing single-page applications (SPAs). It enables fast rendering with a virtual DOM, component-based architecture, and efficient state management.

**Why we need React:**

- Efficient UI updates with the virtual DOM
- Reusability with components
- One-way data binding for better control
- Strong ecosystem with third-party libraries

---

### **3. What are React components and JSX elements in React Native?**

**React components:**

- Building blocks of a React app.
- Can be functional or class-based.

**JSX Elements:**

- JSX (JavaScript XML) allows writing UI using a syntax similar to HTML but within JavaScript.
- Example:
  ```jsx
  const MyComponent = () => <Text>Hello, World!</Text>;
  ```

---

### **4. What are the component lifecycle methods in React Native?**

Lifecycle methods are divided into three phases:

1. **Mounting:** `constructor()`, `componentDidMount()`
2. **Updating:** `shouldComponentUpdate()`, `componentDidUpdate()`
3. **Unmounting:** `componentWillUnmount()`

For functional components, we use `useEffect()` to manage side effects.

---

### **5. What are props in React Native?**

Props (short for properties) allow passing data from a parent component to a child component.

Example:

```jsx
const Greeting = ({ name }) => <Text>Hello, {name}!</Text>;

<Greeting name='Vijay' />;
```

---

### **6. What is the use of Babel and why do we need this?**

Babel is a JavaScript compiler that converts modern JavaScript (ES6+) into older versions (ES5) for better browser compatibility.

---

### **7. What are the spread operators and rest operators and their usage with examples?**

- **Spread operator (`...`)** is used to expand an array or object.
- **Rest operator (`...`)** is used to collect remaining elements into an array.

Example:

```jsx
const arr = [1, 2, 3];
const newArr = [...arr, 4]; // Spread

const sum = (...nums) => nums.reduce((a, b) => a + b, 0); // Rest
```

---

### **8. If `a = [1,4,3,2,7]` and `b = a`, then add an item to `a`. What will `b` be?**

Since `b = a` assigns a reference, modifying `a` also changes `b`.

```jsx
let a = [1, 4, 3, 2, 7];
let b = a;
a.push(8);
console.log(b); // [1, 4, 3, 2, 7, 8]
```

---

### **9. How to create a shallow copy of an array without modifying the original array?**

Using the spread operator:

```jsx
const arr = [1, 2, 3];
const newArr = [...arr];
```

Using `slice()`:

```jsx
const newArr = arr.slice();
```

---

### **10. What are React Pure components in React Native?**

Pure components automatically re-render only if their props or state change. They help optimize performance by preventing unnecessary renders.

```jsx
class PureComponentExample extends React.PureComponent {
  render() {
    return <Text>{this.props.name}</Text>;
  }
}
```

---

### **11. What is the difference between `undefined` and `null`?**

- `undefined` means a variable has been declared but not assigned.
- `null` is an intentional absence of value.

---

### **12. What is the difference between `let` and `var`?**

- `let` has block scope, `var` has function scope.
- `let` prevents re-declaration in the same scope.

---

### **13. What are Arrow Functions and Higher Order Functions?**

- **Arrow functions:** Short syntax for functions.
- **Higher-order functions:** Functions that take other functions as arguments or return functions.

Example:

```jsx
const add = (a, b) => a + b;
const higherOrder = (fn, x, y) => fn(x, y);
console.log(higherOrder(add, 2, 3)); // 5
```

---

### **14. What are Generator Functions?**

A generator function allows pausing and resuming execution using `yield`.

```jsx
function* generatorExample() {
  yield 1;
  yield 2;
}
const gen = generatorExample();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
```

---

### **15. What optimization techniques are used in React Native?**

- Using `React.memo` and `PureComponent`
- Optimizing images and assets
- Using FlatList instead of ScrollView
- Using `useCallback` and `useMemo`

---

### **16. How to write unit tests in React Native?**

Using Jest and React Native Testing Library.

Example:

```jsx
import { render } from '@testing-library/react-native';
import MyComponent from '../MyComponent';

test('renders correctly', () => {
  const { getByText } = render(<MyComponent />);
  expect(getByText('Hello')).toBeTruthy();
});
```

---

## **Coding Questions**

### **1. Find the character with the maximum occurrence in a string.**

```jsx
const maxChar = (str) => {
  const freq = {};
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  return Object.keys(freq).reduce((a, b) => (freq[a] > freq[b] ? a : b));
};
console.log(maxChar('hello')); // 'l'
```

---

### **2. Find the sum of the smallest and second smallest number from an array.**

```jsx
const sumSmallest = (arr) => {
  const [smallest, second] = arr.sort((a, b) => a - b);
  return smallest + second;
};
console.log(sumSmallest([5, 1, 2, 4])); // 3
```

---

### **3. Check if two words are anagrams.**

```jsx
const isAnagram = (str1, str2) =>
  str1.split('').sort().join('') === str2.split('').sort().join('');
console.log(isAnagram('listen', 'silent')); // true
```

---

This should help you prepare well for your interview! 🚀 Let me know if you need any modifications or explanations.

Here are the **Second Technical Round** questions with concise explanations:

---

### **1. Tell me about yourself and your experience in mobile app development.**

I am Vijayarahavan, a React Native developer with over two years of experience in building mobile applications. I have expertise in UI development, state management, API integration, and native module development. I have deployed apps on both the App Store and Play Store and have mentored interns in React Native.

---

### **2. What are props in React Native, and how do you send a value from a child to a parent component?**

Props are used to pass data from a parent component to a child component. To send data from a child to a parent, we use a callback function passed as a prop.

```jsx
const Parent = () => {
  const handleData = (data) => console.log(data);
  return <Child sendData={handleData} />;
};

const Child = ({ sendData }) => (
  <Button title='Send Data' onPress={() => sendData('Hello, Parent!')} />
);
```

---

### **3. What are closures in JavaScript?**

A closure is a function that retains access to its outer function’s variables even after the outer function has returned. Closures help in data encapsulation and maintaining state in functions.

```jsx
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const counter = outer();
counter(); // 1
counter(); // 2
```

---

### **4. What are native modules in React Native?**

Native modules allow React Native apps to interact with native platform code (Swift/Kotlin). They are used to access platform-specific APIs like Bluetooth, Face ID, and custom UI components.

---

### **5. Have you created any native modules, and how do they work in React Native?**

Yes, I have created native modules using Swift. A native module is written in the platform-specific language (Swift/Java), exposed to React Native using `RCT_EXPORT_METHOD`, and then accessed in JavaScript using `NativeModules`.

---

### **6. What are React Pure components in React Native?**

A **Pure Component** only re-renders if its props or state change, improving performance by preventing unnecessary renders. It uses a shallow comparison to detect changes.

```jsx
class MyComponent extends React.PureComponent {
  render() {
    return <Text>{this.props.name}</Text>;
  }
}
```

---

### **7. Difference between class-based and functional components in React Native?**

Class-based components use lifecycle methods and `this.state`, while functional components use hooks (`useState`, `useEffect`). Functional components are preferred due to better readability and performance.

---

### **8. What are React Hooks in React Native?**

Hooks allow functional components to have state and lifecycle methods. Examples include `useState` for state management and `useEffect` for side effects.

```jsx
const [count, setCount] = useState(0);
useEffect(() => console.log('Component mounted'), []);
```

---

### **9. How do you manage states in class-based and functional components?**

Class-based components use `this.state` and `this.setState()`, while functional components use `useState()`. Hooks make state management easier and more readable.

---

### **10. What is Redux, and how does it work?**

Redux is a state management library that uses a **single store** to manage app state. It follows a unidirectional data flow where actions trigger reducers to update the store.

---

### **11. What are Redux middlewares in React Native?**

Middleware sits between dispatching an action and the reducer, allowing side effects like logging, API calls, and async operations. Examples include Redux Thunk and Redux Saga.

---

### **12. What is Redux Thunk?**

Redux Thunk is a middleware that allows Redux to handle async operations like API calls by returning a function instead of an action.

```jsx
const fetchData = () => async (dispatch) => {
  const data = await fetch('https://api.example.com').then((res) => res.json());
  dispatch({ type: 'FETCH_SUCCESS', payload: data });
};
```

---

### **13. What is Redux Saga in React Native?**

Redux Saga is a middleware that handles async operations using generator functions. It helps manage complex async flows like background tasks and retries.

```jsx
function* fetchUser() {
  const user = yield call(api.getUser);
  yield put({ type: 'USER_SUCCESS', payload: user });
}
```

---

### **14. What are Promises and Callback functions in JavaScript?**

Callbacks are functions passed as arguments to other functions, while Promises handle async operations with `.then()` and `.catch()`. Promises improve readability over nested callbacks.

```jsx
const promise = new Promise((resolve) =>
  setTimeout(() => resolve('Success'), 1000)
);
promise.then(console.log);
```

---

### **15. Difference between `Promise` and `async-await`?**

`Promise` uses `.then()` and `.catch()`, while `async-await` makes async code look synchronous, improving readability.

```jsx
async function fetchData() {
  const response = await fetch('https://api.example.com');
  return response.json();
}
```

---

### **16. How do the `slice()` and `splice()` methods work in JavaScript?**

- `slice(start, end)`: Returns a portion of an array without modifying it.
- `splice(start, deleteCount, newItems)`: Modifies the original array by adding/removing items.

```jsx
const arr = [1, 2, 3, 4];
console.log(arr.slice(1, 3)); // [2,3]
console.log(arr.splice(1, 2)); // [2,3] (modifies `arr`)
```

---

### **17. How does the `reduce()` array method work in JavaScript?**

`reduce()` iterates over an array and reduces it to a single value.

```jsx
const sum = [1, 2, 3].reduce((acc, num) => acc + num, 0);
console.log(sum); // 6
```

---

## **Coding Questions**

### **1. Find the character with the maximum occurrence in a string.**

```jsx
const maxChar = (str) => {
  const freq = {};
  for (let char of str) freq[char] = (freq[char] || 0) + 1;
  return Object.keys(freq).reduce((a, b) => (freq[a] > freq[b] ? a : b));
};
console.log(maxChar('hello')); // 'l'
```

---

### **2. Find the sum of the smallest and second smallest number from an array.**

```jsx
const sumSmallest = (arr) => {
  const [smallest, second] = arr.sort((a, b) => a - b);
  return smallest + second;
};
console.log(sumSmallest([5, 1, 2, 4])); // 3
```

---

### **3. Check if two words are anagrams.**

```jsx
const isAnagram = (str1, str2) =>
  str1.split('').sort().join('') === str2.split('').sort().join('');
console.log(isAnagram('listen', 'silent')); // true
```

---

This gives you concise yet complete answers for your second technical round! 🚀 Let me know if you need further clarifications.
