1. What is React Native?
   Answer:React Native is a JavaScript framework used for building cross-platform mobile applications. It allows you to use React (a JavaScript library for building user interfaces) to develop applications for iOS and Android devices using a single codebase. React Native components are backed by native components, which means they offer a close-to-native experience in terms of performance and user interface.

2. What are the differences between React and React Native?
   Answer:

- React is a library for building user interfaces, typically for web applications.
- React Native allows you to build mobile applications for iOS and Android. While React is focused on the web, React Native focuses on mobile devices using native components like View, Text, and Image, rather than the traditional HTML tags like div, span, and img.

3. What is JSX in React Native?
   Answer:JSX (JavaScript XML) is a syntax extension for JavaScript used in React to write UI components. It looks like HTML inside JavaScript but is compiled into JavaScript function calls.

4. What is a component in React Native?
   Answer:A component is a building block of a React Native application. It is a reusable, self-contained piece of the user interface (UI) that can be rendered independently. Components in React Native can either be functional or class-based. For example, a button or a text field is a component.

5. What are props in React Native?
   Answer:Props (short for properties) are used to pass data from a parent component to a child component in React Native. They are immutable, meaning once a prop is set, it cannot be changed within the child component. Props are used to customize components with different values, making them reusable and dynamic.

6. What are state and setState in React Native?
   Answer:

- State: State is a JavaScript object that holds dynamic data for a component. It can be changed and used to trigger a re-render of the component when it changes.
- setState: The setState method is used to update the state of a component. Once the state is updated, the component re-renders to reflect the new data.

7. What is the difference between useState and useEffect hooks in React Native?
   Answer:

- useState is a hook that allows functional components to manage local state. It provides a way to declare state variables and update them.
- useEffect is a hook used for performing side effects in functional components, such as fetching data, subscribing to events, or manipulating the DOM. It runs after the component renders, and you can specify when it should run based on dependencies.

8. How does React Native handle navigation?
   Answer:React Native uses libraries like React Navigation or React Native Navigation for managing screen transitions and navigation flow within the app. React Navigation provides a declarative API to handle stack, tab, and drawer navigation in a simple way. It also supports deep linking, nested navigators, and custom navigation bar configurations.

9. What is Flexbox in React Native?
   Answer:Flexbox is a layout system that allows you to create complex layouts with ease. It works by distributing space along a container’s axis, either vertically or horizontally. React Native uses Flexbox to layout its components. Flexbox properties include flexDirection, justifyContent, alignItems, and alignSelf.

10. How do you handle styles in React Native?
    Answer:In React Native, styles are handled using a JavaScript object passed into components. The StyleSheet API is often used to create styles, which then get applied to the component’s style property. You can also use libraries like styled-components to apply styles in a more declarative manner.
    Example:
    const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    },
    });

11. What is the difference between View and Text in React Native?
    Answer:

- View: View is a container that can hold other components, such as Text, Image, or other View components. It is similar to a div in web development.
- Text: Text is used for displaying text content. It can only hold text and text-based components.

12. What are Native Modules in React Native?
    Answer:Native Modules in React Native allow you to write code that interacts with the platform’s native code (Java, Swift, Objective-C) to access APIs that are not available in React Native. These modules are written in the platform’s native language and then bridged to JavaScript to use in your app.

13. How do you handle network requests in React Native?
    Answer:Network requests in React Native are typically handled using the built-in fetch API, or third-party libraries like Axios. The fetch API is used to make HTTP requests to RESTful APIs and receive data in response.
    Example:
    fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log('Error:', error));

14. How can you debug a React Native application?
    Answer:You can debug a React Native app using various methods:

- Remote Debugging: Use the browser’s developer tools to inspect and debug JavaScript code.
- Console.log(): Use console.log() statements to inspect values in the console.
- React Native Debugger: A standalone debugger that integrates with Chrome and Redux DevTools.
- Flipper: A platform for debugging React Native apps, providing features like network inspection, UI inspection, and performance monitoring.

15. What is the difference between scrollView and flatList in React Native?
    Answer:

- ScrollView: ScrollView is a simple container component that allows scrolling through child components. It is good for smaller lists of items or dynamic content that may not fit on the screen. However, it is not optimal for large lists because it renders all items at once.
- FlatList: FlatList is a more efficient component for rendering large lists of data. It only renders the items that are visible on the screen (virtualization), improving performance by not rendering off-screen items. It also offers features like item separators, pull-to-refresh, and pagination.

16. What is the purpose of the keyExtractor in FlatList?
    Answer:The keyExtractor is a function used in FlatList to uniquely identify each item in the list by providing a unique key for each element. This helps React Native optimize the rendering of list items and maintain their state during updates.
    Example:
    <FlatList
    data={data}
    keyExtractor={(item) => item.id.toString()} // Each item must have a unique key
    renderItem={({ item }) => <Text>{item.name}</Text>}
    />

17. How do you handle forms in React Native?
    Answer:Forms in React Native can be handled using controlled components, where the form data is managed by React state. You can use the TextInput component for user inputs and update the state accordingly. To handle form submission, you typically use a button component and call a handler function.
    Example:
    const [name, setName] = useState('');

const handleSubmit = () => {
console.log(name);
};

return (
<View>
<TextInput
      value={name}
      onChangeText={setName}
      placeholder="Enter your name"
    />
<Button title="Submit" onPress={handleSubmit} />
</View>
);

18. What is useRef in React Native?
    Answer:useRef is a hook that provides a way to access and persist values across renders without causing re-renders. It is often used for accessing DOM elements or React Native components directly (like focus on a TextInput) or storing mutable values.
    Example:
    const inputRef = useRef(null);

const focusInput = () => {
inputRef.current.focus();
};

return (
<View>
<TextInput ref={inputRef} placeholder="Focus on me" />
<Button title="Focus" onPress={focusInput} />
</View>
);

19. How do you handle animations in React Native?
    Answer:Animations in React Native can be created using the Animated API. You can animate properties like opacity, transform, and scale to create smooth UI transitions and interactions. The useNativeDriver option is used to improve performance by offloading the animation work to the native thread.
    Example:
    const fadeAnim = useRef(new Animated.Value(0)).current;

const fadeIn = () => {
Animated.timing(fadeAnim, {
toValue: 1,
duration: 1000,
useNativeDriver: true,
}).start();
};

return (
<Animated.View style={{ opacity: fadeAnim }}>
<Text>Hello, World!</Text>
</Animated.View>
);

20. How do you handle permissions in React Native?
    Answer:Permissions in React Native can be managed using libraries like react-native-permissions or platform-specific APIs like PermissionsAndroid for Android and Permissions for iOS. These libraries provide a way to request and check for permissions required by the app, such as camera or location access.
    Example using react-native-permissions:
    import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

const checkPermission = async () => {
const result = await check(PERMISSIONS.ANDROID.CAMERA);
console.log(result); // 'granted', 'denied', etc.
};

const requestPermission = async () => {
const result = await request(PERMISSIONS.ANDROID.CAMERA);
if (result === RESULTS.GRANTED) {
console.log('Permission granted');
}
};

21. What are the lifecycle methods in React Native?
    Answer:React Native components have lifecycle methods that determine when a component should be created, updated, and destroyed. These methods are similar to React’s lifecycle methods:

- componentDidMount(): Called when the component is mounted for the first time.
- componentDidUpdate(): Called after the component updates due to changes in state or props.
- componentWillUnmount(): Called just before the component is unmounted and destroyed.
  For functional components, the equivalent behavior can be achieved using the useEffect hook.

22. How do you implement deep linking in React Native?
    Answer:Deep linking in React Native allows your app to respond to URLs and navigate to specific screens based on the URL scheme. React Navigation provides built-in support for deep linking.
    Example:
    import { Linking } from 'react-native';

const handleDeepLink = (event) => {
const { url } = event;
console.log(url);
};

useEffect(() => {
Linking.addEventListener('url', handleDeepLink);

return () => {
Linking.removeEventListener('url', handleDeepLink);
};
}, []);

23. What are controlled and uncontrolled components in React Native?
    Answer:

- Controlled Components: The form data is controlled by React state. Every user input is reflected in the state and managed by the component.
- Uncontrolled Components: The form data is handled by the DOM itself. You interact with the form elements directly via refs rather than managing state.
  Example of controlled:
  const [text, setText] = useState('');

return <TextInput value={text} onChangeText={setText} />;
Example of uncontrolled:
const inputRef = useRef(null);

return <TextInput ref={inputRef} />;

24. What is the useEffect hook and how does it work?
    Answer:useEffect is a hook used in functional components to perform side effects, such as data fetching, setting up subscriptions, or manually modifying the DOM. It runs after the component has rendered and can be configured to run on specific dependencies (e.g., when certain state values change).
    Example:
    useEffect(() => {
    console.log('Component mounted or updated!');
    }, [dependency]); // Runs when the dependency changes

25. How do you optimize the performance of a React Native app?
    Answer:There are several strategies to optimize performance in React Native:

- Use FlatList for large lists: It renders only the visible items, improving the app’s memory usage.
- Memoization with React.memo: Prevent unnecessary re-renders of components.
- Avoid unnecessary re-renders: Use shouldComponentUpdate in class components or React.memo in functional components.
- Lazy loading of assets: Load images and other assets only when needed.
- Use the useCallback and useMemo hooks: Prevent unnecessary function and object recreations.

Here are some more theory-based questions related to React Native:

26. What are the advantages of using React Native over native development?
    Answer:

- Cross-platform development: React Native allows developers to write one codebase for both iOS and Android, reducing development time and cost.
- Performance close to native apps: React Native uses native components, providing performance that’s close to native apps.
- Hot reloading: React Native supports hot reloading, meaning changes can be seen immediately without needing to rebuild the app, speeding up the development process.
- Large community and ecosystem: React Native has a large community, and there are many libraries and tools available for developers, which helps in faster development and troubleshooting.
- JavaScript knowledge: If you already know JavaScript, you can quickly transition to React Native without needing to learn platform-specific languages like Swift (iOS) or Java (Android).

27. Explain the concept of "bridging" in React Native.
    Answer:Bridging in React Native refers to the communication layer between the JavaScript thread and the native thread (iOS or Android). React Native provides a bridge to allow JavaScript code to interact with native code. This is particularly useful when native code is needed for tasks that cannot be handled with JavaScript alone, such as using platform-specific APIs or optimizing performance for certain operations.
    When an interaction happens, JavaScript sends a message through the bridge to native code, and the native module processes the request and sends back the results. This allows React Native to maintain its cross-platform nature while leveraging platform-specific features.

28. What is the purpose of the "Virtual DOM" in React Native?
    Answer:The Virtual DOM is an abstraction of the actual DOM (or native view hierarchy in React Native). It allows React to optimize rendering by maintaining a lightweight in-memory representation of the UI. When a component’s state or props change, React updates the Virtual DOM first. Then, it compares the new Virtual DOM with the previous one (using a process called “reconciliation”) to calculate the minimal set of changes needed to update the actual UI.
    This improves performance by reducing direct manipulation of the actual DOM and avoiding unnecessary re-rendering of the entire UI.

29. How does React Native handle navigation differently from React?
    Answer:In React, navigation is typically handled using routing libraries like React Router, which allows for navigation between different pages or views within a web app. React’s routing relies on the browser's history API to manage the navigation stack.

React Native uses libraries like React Navigation or React Native Navigation, which are specifically designed for mobile navigation patterns. These libraries provide stack-based, tab-based, and drawer navigation tailored for mobile devices, and they also include features like deep linking, modal navigation, and gesture-based navigation.

30. What is "state lifting" in React Native?
    Answer:State lifting refers to the process of moving state from a child component to a common parent component so that it can be shared between multiple child components. This is typically done when different components need to access or modify the same piece of state.
    In React Native, lifting state up allows the parent component to manage the shared state, and it can pass it down as props to its children. This improves the modularity and reusability of components while ensuring state is kept in sync.
    Example:
    function Parent() {
    const [count, setCount] = useState(0);

return (
<Child count={count} onCountChange={setCount} />
);
}

function Child({ count, onCountChange }) {
return (
<View>
<Text>{count}</Text>
<Button title="Increment" onPress={() => onCountChange(count + 1)} />
</View>
);
}

31. What is the difference between "stateless" and "stateful" components in React Native?
    Answer:

- Stateless Components: These are components that do not manage any internal state. They only receive data via props and render the UI accordingly. These components are simpler and usually used for presentation or displaying data.
- Stateful Components: These components manage their internal state using React’s state API (useState or class component state). They can update their state and cause the component to re-render based on that state change.

32. What is the importance of key prop in lists in React Native?
    Answer:The key prop is important in lists because it helps React Native identify which items in the list have changed, been added, or been removed. Without the key prop, React Native would have to re-render all items in the list every time there is a change, leading to performance issues. The key prop ensures that each list item is uniquely identified and can be efficiently updated when the list changes.
    Keys should be unique and stable, ideally coming from a unique identifier in the data (like an ID).

33. What is the "reconciliation" process in React Native?
    Answer:Reconciliation is the process by which React compares the current UI (Virtual DOM) with a new version after a component’s state or props change. It then updates only the parts of the UI that have changed, avoiding unnecessary re-renders and improving performance.

34. What is the difference between componentDidMount and componentWillUnmount in React Native?
    Answer:

- componentDidMount(): This is a lifecycle method in class components that is called once the component has been rendered and is available in the DOM (or the view in React Native). It is commonly used for fetching data, setting up subscriptions, or any initialization needed once the component is mounted.
- componentWillUnmount(): This lifecycle method is called right before the component is removed from the view hierarchy (unmounted). It is commonly used for cleaning up resources such as timers, subscriptions, or network requests to avoid memory leaks.

35. What is "context" in React Native, and when should it be used?
    Answer:Context in React Native is a way to pass data through the component tree without having to manually pass props down at every level. It is typically used when some data needs to be accessible by many components at different nesting levels, such as user authentication status or theming.
    Context is useful when:

- You need to pass data through many layers of components.
- Prop-drilling becomes cumbersome.
- The data is global and needs to be accessed by multiple parts of the app.
  Example:
  const UserContext = createContext();

function Parent() {
const user = { name: "John Doe" };
return (
<UserContext.Provider value={user}>
<Child />
</UserContext.Provider>
);
}

function Child() {
const user = useContext(UserContext);
return <Text>{user.name}</Text>;
}

36. What is the purpose of async and await in React Native?
    Answer:async and await are used to work with asynchronous operations more effectively in JavaScript (and React Native). They allow you to write asynchronous code in a more synchronous and readable manner, avoiding callback hell and improving error handling.

- async: Makes a function return a promise.
- await: Pauses the execution of the async function until the promise resolves or rejects, simplifying code that works with asynchronous operations like fetching data.
  Example:
  const fetchData = async () => {
  try {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  console.log(data);
  } catch (error) {
  console.error('Error fetching data', error);
  }
  };

Here are more theory-based questions related to React Native:

37. What is JSX in React Native, and why is it used?
    Answer:JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. React Native uses JSX to describe what the UI should look like. It is not a string but gets compiled into JavaScript code. JSX makes it easier to visualize and define the component structure, as it closely resembles the HTML code used in web development.
    Example:
    const element = <Text>Hello, World!</Text>;
    JSX is used because it improves readability and makes React components more intuitive to write. It allows you to express component structure and logic in a familiar, declarative way.

38. What is the difference between props and state in React Native?
    Answer:

- Props: Short for "properties," props are passed to a component by its parent. They are immutable and cannot be changed by the component receiving them. Props are used to pass data and event handlers down the component tree.
- State: State is a local data storage that is mutable and can be changed within a component. It is used to store values that can change over time, and when state changes, the component re-renders to reflect the updated values.
  Example:
  // Using props
  function Greeting({ name }) {
  return <Text>Hello, {name}!</Text>;
  }

// Using state
function Counter() {
const [count, setCount] = useState(0);

return (
<View>
<Text>{count}</Text>
<Button title="Increment" onPress={() => setCount(count + 1)} />
</View>
);
}

39. What are Hooks in React Native, and how do they differ from class components?
    Answer:Hooks are functions that let you "hook into" React features such as state, lifecycle methods, and context, without needing to write a class. Hooks were introduced in React 16.8, and they allow functional components to manage state, side effects, and more.
    Some commonly used hooks in React Native:

- useState: Adds state to functional components.
- useEffect: Performs side effects such as data fetching, subscriptions, and DOM manipulations.
- useContext: Allows access to context values in a functional component.
  Hooks are simpler, promote cleaner and more reusable code, and make it easier to manage side effects compared to class components. They replace the need for lifecycle methods such as componentDidMount and componentWillUnmount in class components.

40. What is the difference between useEffect and useLayoutEffect in React Native?
    Answer:

- useEffect: This hook is used for side effects that don’t require immediate DOM mutations, such as data fetching, event listeners, or logging. It runs asynchronously after the render is committed to the screen.
- useLayoutEffect: This hook is similar to useEffect, but it runs synchronously after the DOM has been updated, but before the paint is committed to the screen. It is useful for situations where you need to make DOM mutations or measure layout before the browser paints.
  Example:
  useEffect(() => {
  // runs after the render
  console.log('Component rendered!');
  }, []);

useLayoutEffect(() => {
// runs before the paint
console.log('Component layout updated!');
}, []);

41. How does React Native handle styling?
    Answer:In React Native, styling is handled through a JavaScript object that mirrors CSS properties but with some differences. Instead of using CSS stylesheets, you define styles directly in your components using the StyleSheet API or inline styles.
    Example:
    const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    },
    text: {
    fontSize: 20,
    color: 'blue',
    },
    });

return (
<View style={styles.container}>
<Text style={styles.text}>Hello, World!</Text>
</View>
);
React Native also supports flexbox, which is commonly used for layout, and many CSS properties like padding, margin, and font styles are supported, but there are some differences like shadow and overflow that may need platform-specific adjustments.

42. What is the purpose of the TouchableOpacity component in React Native?
    Answer:TouchableOpacity is a wrapper component in React Native used to create a touchable area for interactive UI elements such as buttons or images. It provides a visual feedback (opacity change) when the user taps on it, making the app feel more responsive.
    It is often used for buttons, as it can make an element appear pressed when touched, improving user experience.
    Example:
    <TouchableOpacity onPress={handlePress}>
    <Text>Click Me</Text>
    </TouchableOpacity>

43. What is the purpose of redux in React Native?
    Answer:Redux is a state management library used to manage the state of an application in a predictable manner. It is especially useful for managing complex states or when different parts of the application need to share state or data. Redux follows a unidirectional data flow model where:
44. Actions describe "what happened."
45. Reducers describe how the state changes in response to an action.
46. Store holds the application state.
    Redux allows for centralizing the application's state in one store, which simplifies debugging and testing, and it also enables features like undo/redo or time travel debugging.
    Example:
    // Action
    const increment = () => ({ type: 'INCREMENT' });

// Reducer
const counterReducer = (state = { count: 0 }, action) => {
switch (action.type) {
case 'INCREMENT':
return { count: state.count + 1 };
default:
return state;
}
};

44. How do you manage navigation in React Native?
    Answer:React Native uses navigation libraries such as React Navigation and React Native Navigation to manage app navigation. These libraries provide different types of navigation patterns like stack, tab, and drawer navigation.

- React Navigation is a JavaScript-based solution that is easy to use and integrates well with React Native. It provides an easy-to-implement stack navigator, tab navigator, and drawer navigator.
- React Native Navigation is a more complex, native navigation library that offers performance benefits due to its reliance on native navigation components.
  Example with React Navigation:
  import { NavigationContainer } from '@react-navigation/native';
  import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
return (
<NavigationContainer>
<Stack.Navigator>
<Stack.Screen name="Home" component={HomeScreen} />
<Stack.Screen name="Profile" component={ProfileScreen} />
</Stack.Navigator>
</NavigationContainer>
);
}

45. How does React Native handle background tasks?
    Answer:React Native provides a few methods and libraries to handle background tasks such as fetching data, notifications, or running long-running tasks. Some common libraries include:

- React Native Background Fetch: Allows running background tasks periodically, even when the app is not in the foreground.
- React Native Push Notification: Provides background task handling for delivering push notifications while the app is in the background or terminated.
  These background processes can be managed through native code or using JavaScript with the help of third-party libraries. Background tasks are essential for apps that require real-time updates or periodic sync operations.

46. What is "prop drilling" and how can you avoid it in React Native?
    Answer:Prop drilling refers to the process of passing data from parent components down to child components through multiple layers of the component tree. This can lead to cluttered and hard-to-maintain code, especially in large applications.
    You can avoid prop drilling by using:

- Context API: This allows passing data directly to components that need it, without the need to pass props through each intermediate component.
- State management libraries: Such as Redux or Zustand, which allow global state management that components can access without prop drilling.

47. What is the difference between flex: 1 and flexGrow: 1 in React Native?
    Answer:

- flex: 1: It is shorthand for defining how much a component should grow relative to other components inside a flex container. If you set flex: 1 on an element, it will take up all available space in the container, and any other components with flex: 1 will share the space equally.
- flexGrow: 1: This property is used to make a component grow relative to other components in a container. It defines the proportion of available space that a component will occupy. Unlike flex, it does not define the layout direction but tells the component how to distribute the available space.
  Example:
  <View style={{ flexDirection: 'row' }}>
  <View style={{ flex: 1, backgroundColor: 'red' }} />
  <View style={{ flexGrow: 1, backgroundColor: 'blue' }} />
  </View>
  In this case, the red View will take up all available space, while the blue View will grow to take any extra space after the red one.

48. What is "debouncing" and when would you use it in React Native?
    Answer:Debouncing is a technique used to limit the number of times a function is executed. It is commonly used when dealing with user input events, such as typing in a search bar, where you don't want the function (e.g., API calls) to run after every keystroke but rather after the user has stopped typing for a certain amount of time.
    Debouncing ensures that the function only executes once after a specified delay, improving performance and reducing unnecessary calls.
    Example with useEffect and debounce:
    import { useState, useEffect } from 'react';

function SearchComponent() {
const [query, setQuery] = useState('');

const handleChange = (e) => {
setQuery(e.target.value);
};

useEffect(() => {
const timer = setTimeout(() => {
fetchData(query);
}, 500);

    return () => clearTimeout(timer);

}, [query]);

return <input type="text" value={query} onChange={handleChange} />;
}
In this example, the fetchData function will only be called after the user stops typing for 500 milliseconds.

49. What is "code splitting" in React Native?
    Answer:Code splitting is the practice of breaking down your application's code into smaller bundles that can be loaded as needed. This helps reduce the initial loading time of the app, as only the necessary code for the current screen or feature is loaded at first. As the user navigates to other parts of the app, the remaining code is loaded dynamically.
    In React Native, code splitting can be achieved by using dynamic imports to load components or libraries when they are required, rather than including everything in a single large bundle.
    Example:
    const Component = React.lazy(() => import('./SomeComponent'));

50. What is a "controlled component" in React Native?
    Answer:A controlled component is a component that does not maintain its own state for input fields, but instead, the value of the input is controlled by React’s state. The component receives the current value and a callback function to update the value from its parent component.
    For example, an input field that updates its value based on a state managed by React is considered controlled.
    Example:
    const ControlledInput = () => {
    const [text, setText] = useState('');

const handleChange = (e) => {
setText(e.target.value);
};

return (
<TextInput
      value={text}
      onChangeText={handleChange}
    />
);
};

51. What is a "uncontrolled component" in React Native?
    Answer:An uncontrolled component is a component that maintains its own internal state for input fields, meaning the input value is not controlled by React state. Instead, the DOM itself manages the input’s state, and you can access the value through a ref.
    Uncontrolled components are typically used for simple forms where you don’t need to manage the form state through React, and instead, you allow the DOM to handle the value.
    Example:
    const UncontrolledInput = () => {
    const inputRef = useRef();

const handleSubmit = () => {
console.log(inputRef.current.value);
};

return (
<View>
<TextInput ref={inputRef} />
<Button title="Submit" onPress={handleSubmit} />
</View>
);
};

52. What are keys in React Native lists and why are they important?
    Answer:In React Native (and React in general), the key prop is used to uniquely identify elements in a list. Keys help React identify which items have changed, been added, or removed, which makes the reconciliation process more efficient.
    Using key helps prevent unnecessary re-renders and improves the performance of the application, especially when dealing with large lists.
    For example, when rendering a list of items with FlatList or ScrollView, you must provide a unique key for each list item:
    const data = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];

return (
<FlatList
data={data}
renderItem={({ item }) => <Text>{item.name}</Text>}
keyExtractor={(item) => item.id.toString()}
/>
);

53. What is the difference between React Native and Expo?
    Answer:

- React Native: React Native is a framework for building mobile applications using JavaScript and React. It provides the core libraries and tools to build and run the application natively on iOS and Android. However, you must manage dependencies, setup, and configuration yourself, which can require more time and effort.
- Expo: Expo is a set of tools built on top of React Native that simplifies the development process by providing a managed workflow. It offers a range of pre-configured libraries and tools, such as asset management, push notifications, camera access, and more. Expo handles much of the native configuration for you, allowing you to focus on writing the app without worrying about native code, but it may limit flexibility in some cases.

54. How does React Native handle performance optimization?
    Answer:React Native provides several techniques and tools to optimize the performance of mobile apps:
1. Avoid Re-rendering: Use PureComponent or React.memo to prevent unnecessary re-renders of components.
1. Optimize List Rendering: Use FlatList or SectionList for rendering large lists, as they only render the items that are visible on the screen.
1. Image Optimization: Use Image components with appropriate resolution and caching to optimize image rendering.
1. Lazy Loading: Implement code splitting and lazy load components only when necessary to reduce initial load time.
1. Native Modules: Offload complex tasks to native code for better performance using native modules.

1. How do you handle deep linking in React Native?
   Answer:Deep linking in React Native allows your app to respond to URLs and navigate directly to specific content or screens within the app. React Native supports deep linking via two main methods:
1. URL Scheme: iOS and Android support custom URL schemes that can open your app when a specific URL is clicked. For example, a URL scheme like myapp://some-screen can be set up to open your app and navigate to a particular screen.
1. Universal Links and App Links: These are links that can open your app on both iOS and Android, or if the app isn’t installed, they can open in a web browser.
   You can implement deep linking by setting up URL scheme handlers and linking events in your app.
   Example using React Navigation with deep linking:
   const linking = {
   prefixes: ['myapp://'],
   config: {
   screens: {
   Home: '',
   Profile: 'profile/:id',
   },
   },
   };

function App() {
return (
<NavigationContainer linking={linking}>
<Stack.Navigator>
<Stack.Screen name="Home" component={HomeScreen} />
<Stack.Screen name="Profile" component={ProfileScreen} />
</Stack.Navigator>
</NavigationContainer>
);
}

56. What is the purpose of Platform.OS in React Native?
    Answer:Platform.OS is a property in React Native used to check the operating system (OS) on which the app is running. It helps in writing platform-specific code by determining whether the app is running on Android or iOS. You can use it to customize behavior or styles for each platform.
    Example:
    import { Platform, Text } from 'react-native';

function PlatformSpecificComponent() {
return (
<Text>
{Platform.OS === 'ios' ? 'This is an iOS device' : 'This is an Android device'}
</Text>
);
}

57. What is Reconciliation ?
    Reconciliation is the process through which React updates the Browser DOM and makes React work faster. React use a diffing algorithm so that component updates are predictable and faster. React would first calculate the difference between the real DOM and the copy of DOM (Virtual DOM) when there's an update of components. React stores a copy of Browser DOM which is called Virtual DOM. When we make changes or add data, React creates a new Virtual DOM and compares it with the previous one. This comparison is done by Diffing Algorithm. Now React compares the Virtual DOM with Real DOM. It finds out the changed nodes and updates only the changed nodes in Real DOM leaving the rest nodes as it is. This process is called Reconciliation.
