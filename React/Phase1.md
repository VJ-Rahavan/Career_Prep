1. What are the limitations of React in building large-scale applications?

   State Management Complexity: As the application scales, managing global and component state becomes complex.
   Performance Bottlenecks: Frequent re-renders and large component trees can slow down performance if not optimized properly.
   SEO Challenges: React is primarily client-side rendered, which can negatively affect SEO without server-side rendering (SSR).
   Tooling Overhead: Requires additional libraries for routing, state management, and side effect handling.
   Steep Learning Curve: Advanced concepts like hooks, context, and optimizations require deep understanding.

2. How does React manage the Virtual DOM, and what are the benefits?

   React creates a lightweight Virtual DOM (VDOM) that represents the actual DOM.
   When state changes, React updates the VDOM and calculates the differences (diffing).
   The reconciliation process applies only the necessary changes to the real DOM.
   Benefits:
   Performance Optimization: Reduces direct DOM manipulations.
   Efficient Updates: Only updates components that have changed.
   Improved User Experience: Faster UI updates lead to smoother interactions.

3. Can React Hooks fully replace Redux for state management? Explain why or why not.

   Yes, for small to medium apps: Hooks like useState, useReducer, and Context API can handle state efficiently.
   No, for complex apps: Redux provides better state management when handling deeply nested state, caching, and debugging (Redux DevTools).
   Trade-offs:
   React Hooks are simpler and built-in.
   Redux is more scalable and provides better state persistence and middleware support.

4. What are the best practices for managing state in large React applications?

   Use Context API for global state (if simple).
   Use Redux/Zustand for complex state management.
   Keep local state at the component level when possible.
   Normalize state to avoid deeply nested objects.
   Use derived state instead of duplicating values.

5. How would you optimize performance in a React app with large component trees?

   Use React.memo() to prevent unnecessary re-renders.
   Use useCallback() and useMemo() to optimize expensive functions.
   Use lazy loading (React.lazy) for components.
   Virtualize lists using react-window or react-virtualized.
   Avoid prop drilling by using Context API or Redux.

6. Explain React's Strict Mode and its impact on development.

   Strict Mode is a development-only feature that detects potential issues.
   Detects unsafe lifecycle methods.
   Warns about side effects in useEffect() (double execution in dev mode).
   Improves forward compatibility for React updates.

7. How can you prevent unnecessary re-renders in React functional components?

   Use React.memo() to memoize components.
   Use useCallback() for functions and useMemo() for computed values.
   Avoid unnecessary state updates.
   Use key props efficiently to prevent unnecessary re-renders in lists.

8. Describe the key differences between functional and class components in React.

   Feature Functional Components Class Components
   Syntax Uses functions Uses ES6 classes
   State Uses useState() Uses this.state
   Lifecycle Uses useEffect() Uses lifecycle methods (componentDidMount(), etc.)
   Performance More optimized Slightly heavier

9. What is the significance of the React Fiber architecture?

   Fiber is a reimplementation of React’s core algorithm, making rendering more efficient.
   Benefits:
   Enables concurrent rendering.
   Supports suspense and lazy loading.
   Improves reconciliation and performance.

10. How does React handle side effects, and how can you manage them effectively?

    Side effects (e.g., fetching data, subscriptions) are handled using useEffect().
    Best Practices:
    Use cleanup functions to prevent memory leaks.
    Use dependencies correctly to avoid unnecessary calls.
    Use custom hooks to encapsulate complex logic.

11. Explain the differences between useMemo() and useCallback() in React.

    useMemo(): Memoizes computed values to prevent expensive recalculations.
    useCallback(): Memoizes functions to prevent unnecessary re-renders.

12. How would you implement dynamic form handling and validation in React?

    Use Formik or React Hook Form.
    Manage dynamic fields using state (useState() or useReducer()).
    Use Yup for schema-based validation.

13. What is lazy loading in React, and how does it improve application performance?

    Lazy loading loads components only when needed, reducing initial load time.
    Uses React.lazy() + Suspense for dynamic imports.

14. How would you handle errors in a React app, and what is the role of error boundaries?

    Use componentDidCatch() in class components.
    Use a custom error boundary to catch rendering errors.

15. What are the benefits of server-side rendering (SSR) in React applications?

    Improved SEO
    Faster initial load times
    Better performance on slow networks

16. How do you handle styling in React components? Discuss different approaches.

    CSS Modules
    Styled Components
    Tailwind CSS
    Inline Styles

17. How would you pass data between sibling components in React without using Redux?

    Use React Context API.
    Use a shared parent state.

18. Explain the use case of useEffect() for fetching data from an API.

    Call API in useEffect() with empty dependency array ([]) to fetch on mount.
    Use cleanup function to prevent memory leaks.

19. How do you handle asynchronous operations in React using async/await or Promises?
    Use useEffect() with async/await.
    Use state to manage loading and error states.

20. How would you re-render a component when the window is resized?
    Use useState() + useEffect() with window.addEventListener().

21. Describe how React Context API can be used for state management in an app.
    Provides a way to pass state without prop drilling.
    Uses createContext() and useContext().

22. What is the role of React Router, and how does it work with dynamic routing?
    Enables client-side routing.
    Supports dynamic routes (/user/:id).

23. Explain React's reconciliation process and how it updates the DOM efficiently.
    React compares Virtual DOM trees and updates only the changed parts.
    Uses key prop to optimize list rendering.
