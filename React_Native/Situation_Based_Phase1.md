1. Handling Performance Issues in React Native
   Question: Tell me about a time you faced performance issues in a React Native app. How did you resolve them?
   Answer:"In one project, the app became sluggish, particularly when navigating between screens that displayed large lists of data.To address this, I:

- Used FlatList instead of ScrollView to render large lists efficiently by recycling elements as the user scrolls.
- Implemented shouldComponentUpdate and memoization to prevent unnecessary re-renders.
- Profiled the app using the React Native Debugger and removed heavy operations from the main thread.

These changes improved the app's performance significantly, and the user experience was smoother."

2. Debugging a Crash in Production
   Question: Have you ever encountered a crash in a React Native app that occurred only in production? How did you handle it?
   Answer:"We once had a critical bug where the app crashed on launch for some users in production but not in development.To resolve the issue, I:

- Analyzed crash logs from Firebase Crashlytics to identify patterns and narrow down the root cause.
- Discovered that a specific third-party library had a bug on certain versions of Android.
- Temporarily rolled back to a previous version of the library while the issue was being fixed.
- In parallel, I tested the app thoroughly using both simulators and real devices to reproduce the issue and verify the fix.
  This ensured that the bug was fixed quickly without affecting many users."

- Handling Compatibility Issues Between iOS and Android
  Question: Tell me about a time when you had to handle a compatibility issue between iOS and Android in React Native. How did you solve it?
  Answer:"In one of my projects, we faced issues where a feature worked perfectly on iOS but not on Android. It was related to the camera permissions, which behaved differently on the two platforms.To solve this, I:
- Investigated platform-specific implementation by checking the React Native documentation and the third-party camera library.
- Used the Platform module to apply different permission handling logic for iOS and Android.
- Wrote platform-specific code using Platform.OS to handle camera initialization and permissions separately for each platform.
  After testing thoroughly on both platforms, the feature worked seamlessly on both iOS and Android."

- Updating React Native Dependencies
  Question: How do you handle updating dependencies in a React Native app without breaking the app?
  Answer:"During an app update, I had to update several dependencies, including React Navigation and a few third-party libraries. To prevent breaking the app, I:
- First checked the release notes for each updated dependency to understand breaking changes and necessary adjustments.
- Updated dependencies one by one and tested the app after each update to identify potential issues early.
- Used version control and created a new branch so that I could isolate the changes and merge only once everything was stable.
- Wrote unit and integration tests to cover critical paths to ensure nothing broke during the update.
  This careful approach allowed us to update the app’s dependencies without causing regressions."

- Handling Push Notifications in React Native
  Question: Can you describe a situation where you had to implement push notifications in React Native? What challenges did you face?
  Answer:"I had to implement push notifications in a React Native app, and one challenge was ensuring that the notifications worked seamlessly on both iOS and Android.To resolve this, I:
- Integrated Firebase Cloud Messaging (FCM) for push notifications using the @react-native-firebase/messaging library.
- Set up platform-specific code for requesting permissions (especially on iOS, where we needed to request permissions explicitly).
- Managed notification handling when the app was in the foreground, background, and terminated state.
- Tested thoroughly using real devices to ensure notifications arrived reliably and were actionable.
  The result was a fully functional push notification system that worked across platforms."

- Implementing Navigation in a Complex App
  Question: Describe a situation where you implemented navigation in a complex React Native app. How did you approach it?
  Answer:"In one project, the app had a complex navigation structure with deep linking and multiple nested navigators.To implement this, I:
- Used React Navigation’s stack, tab, and drawer navigators to manage different sections of the app.
- Implemented deep linking to allow users to open specific screens via URLs.
- Managed nested navigators within each feature module, keeping the code modular and maintainable.
- Ensured that navigation transitions were smooth and that the app responded to changes in screen size and orientation.
  The app’s navigation was robust and easy to maintain, making it scalable for future features."

- Handling Asynchronous Data Fetching in React Native
  Question: Tell me about a time when you had to handle asynchronous data fetching in React Native. How did you manage loading and error states?
  Answer:"In one of my projects, I had to fetch data from an API and display it in a list. I needed to manage loading and error states properly.To do this, I:
- Used React’s useEffect hook to initiate the data fetching when the component mounted.
- Used useState to maintain the loading state, setting it to true initially and then updating it based on the data fetching outcome.
- Added an error state to display an error message if the API call failed.
- Used FlatList to display the data and showed a loading spinner until the data was ready.
  This approach ensured a smooth user experience by showing the loading state while data was being fetched and handling errors gracefully if the request failed."

- Working with Native Modules in React Native
  Question: Have you ever had to write a custom native module in React Native? How did you approach it?
  Answer:"Yes, I had to write a custom native module to access a device-specific feature that was not supported by existing libraries.To do this, I:
- Created a native module in Swift (for iOS) and Java/Kotlin (for Android) to expose the device's functionality to React Native.
- Used React Native’s bridge to send data between the native code and JavaScript.
- Created JavaScript wrapper functions that called the native code and handled responses asynchronously.
- Tested the module extensively to ensure that the feature worked seamlessly across devices.
  The custom module enabled us to integrate the device functionality into the app, providing a feature that users found highly valuable.”

- Handling Navigation on Background and Foreground in React Native
  Question: Describe a situation where you had to handle navigation and state persistence when the app was moved to the background and then reopened.
  Answer:"In one project, we needed to preserve the user's navigation state when the app was sent to the background and later reopened.To handle this, I:
- Used React Navigation’s persist option to save the navigation state when the app went into the background.
- Implemented state persistence for other app data using AsyncStorage to ensure the user’s session data was not lost.
- Used AppState to detect when the app went to the background and when it returned to the foreground, restoring navigation and app state appropriately.
  This approach ensured that the user could pick up right where they left off, improving the overall experience."

- Handling Large Data Sets in React Native
  Question: Tell me about a time when you had to manage a large data set in a React Native app. How did you ensure the app’s performance stayed optimal?
  Answer:"In a project, I needed to display a large data set, and rendering all of it at once would have impacted the app's performance.To handle this, I:
- Used FlatList with pagination to load data in chunks rather than loading it all at once.
- Implemented lazy loading to only render data as it was needed.
- Cached previously loaded data in local storage to avoid fetching it again.
- Used the getItemLayout prop for efficient scrolling, which improved performance when navigating through long lists.
  This approach ensured that the app performed well even with large data sets."

- Handling Device-Specific Code in React Native
  Question: Tell me about a time when you had to handle device-specific code in React Native. How did you approach it?
  Answer:"In one project, we needed to handle specific behavior for Android and iOS devices due to differences in how they handle notifications.To address this, I:
- Used the Platform module to conditionally render different behavior for Android and iOS.
- For iOS, we used local notification permissions and background fetch, while for Android, we implemented Firebase Cloud Messaging (FCM) for notifications.
- Ensured that the notification behavior was consistent across devices by testing on both iOS and Android devices.
  This allowed us to provide a native experience on both platforms while maintaining a single codebase."

- Implementing Dark Mode in React Native
  Question: Have you ever had to implement dark mode in a React Native app? How did you approach it?
  Answer:"In one app, we had a requirement to implement dark mode.To do this, I:
- Used the Appearance API to detect the system’s theme (light or dark mode).
- Created a global theme context that would dynamically switch between light and dark themes.
- Applied styles using conditional logic based on the active theme.
- Stored the user’s theme preference in AsyncStorage so that the app remembered their choice across sessions.
  This allowed the app to provide a consistent experience, respecting both system settings and user preferences."

- Handling App State Management with React Native
  Question: Can you give an example of a time when you needed to manage complex app state in a React Native app? What approach did you use?
  Answer:"In a recent project, I had to manage global state for user authentication, preferences, and app data across multiple screens.To handle this, I:
- Used Redux for managing global state, which allowed me to centralize all the app’s state and make it accessible across components.
- Used middleware like redux-thunk to handle asynchronous actions, particularly for data fetching.
- Optimized state updates by using reselect to memoize selectors and avoid unnecessary re-renders.
- For some parts of the app, I used React Context for simpler, more localized state management where Redux felt overkill.
  This approach gave us full control over the app’s state, ensuring scalability and ease of maintenance."

- Addressing App Crashes During Navigation
  Question: Describe a situation where navigating between screens caused app crashes. How did you solve it?
  Answer:"In one app, navigating between certain screens caused crashes, particularly when passing large amounts of data between screens.To resolve this, I:
- Used React Navigation to handle data passing and ensured we were not passing large objects directly. Instead, I used state management and passed only necessary data (IDs or simple values).
- Added checks to prevent navigation to screens that weren’t ready or had incomplete data.
- Optimized data loading strategies by using lazy loading to avoid large initial payloads on screen transitions.
- Tested navigation extensively across different devices to ensure stability.
  These steps helped us eliminate crashes and improve the app’s stability."

- Handling Dynamic Forms in React Native
  Question: Tell me about a time when you needed to create a dynamic form with multiple input fields in React Native. How did you approach it?
  Answer:"In one project, we had a requirement to create a dynamic form where users could add multiple input fields, and each input could have a different validation rule.To handle this, I:
- Stored the form data in an array of objects, where each object represented a field and its validation rules.
- Used map to dynamically render the fields based on the state array.
- Applied custom validation logic based on the field’s type and rules, showing error messages when necessary.
- Ensured that the form was responsive by using KeyboardAvoidingView to handle the keyboard.
  This approach allowed us to handle dynamic forms flexibly and ensured a smooth user experience."

- Working with API Rate Limiting
  Question: Have you ever had to deal with API rate limits in React Native? How did you handle it?
  Answer:"In one project, we were integrating with a third-party API that had strict rate limits, and we had to ensure we didn’t exceed those limits.To handle this, I:
- Implemented a retry mechanism with exponential backoff using axios interceptors to handle API retries gracefully.
- Cached responses locally in AsyncStorage to avoid making redundant requests.
- Added a loading spinner and a message to notify the user if an API request was delayed due to rate limiting.
- Used a queueing system to ensure requests were sent in order and didn’t overwhelm the API.
  This approach ensured the app continued functioning well even with rate limits."

- Managing App Updates and Rollbacks
  Question: Describe a situation where you had to manage an app update and rollback in React Native. What challenges did you face?
  Answer:"During a recent release, we encountered a bug after an update that was causing crashes for some users.To manage this, I:
- Immediately rolled back the problematic update using the app distribution tools (App Store/Play Store).
- Investigated the bug in depth by analyzing logs and user reports, identifying a third-party library that was incompatible with the latest update.
- Released a hotfix after fixing the issue and tested it in different environments to ensure compatibility.
- Used Firebase App Distribution to distribute the hotfix to beta testers before deploying it to production.
  This process ensured minimal user impact and quick recovery from the issue."

- Implementing User Authentication in React Native
  Question: Can you describe how you implemented user authentication in a React Native app?
  Answer:"In a recent project, we implemented user authentication using Firebase Authentication.To do this, I:
- Integrated Firebase SDK into the app and set up email/password authentication and social login providers (Google, Facebook).
- Created a global authentication context using React Context API to manage user session state across the app.
- Added logic to handle session persistence so that users stayed logged in even after app restarts, using AsyncStorage to store the authentication token.
- Implemented custom login and registration screens, as well as error handling for login failures.
  This approach provided a secure and smooth user authentication experience."

- Using TypeScript with React Native
  Question: Have you used TypeScript in React Native projects? How did it improve your development process?
  Answer:"Yes, I have worked on React Native projects using TypeScript.To integrate TypeScript, I:
- Configured TypeScript in the React Native project by setting up the tsconfig.json file.
- Converted JavaScript files to .tsx and defined strict types for props, state, and functions.
- Used TypeScript’s static typing to catch type-related errors during development, improving code quality.
- Leveraged TypeScript interfaces to define reusable types for components and API responses.
  Using TypeScript made the development process more efficient by reducing bugs, improving code readability, and enabling better auto-completion in the IDE."

- Handling Background Tasks in React Native
  Question: Have you worked with background tasks in React Native? How did you implement them?
  Answer:"In one project, we needed to handle background tasks such as fetching data from an API even when the app was not in the foreground.To implement this, I:
- Used the react-native-background-fetch library to handle periodic background tasks.
- Configured the task to run at specific intervals, even when the app was closed or in the background.
- Managed API calls and local storage updates in background tasks, ensuring they didn’t interfere with the app’s performance.
- Tested the background task thoroughly on both iOS and Android, considering platform-specific limitations.
  This allowed us to continue fetching data and updating the app’s state without requiring the app to be actively in use."

- Handling Long Lists in React Native
  Question: Tell me about a time when you had to handle long lists of data in React Native. How did you optimize performance?
  Answer:"In a recent project, we had to display a long list of items, which caused performance issues such as lag and slow rendering.To optimize the performance, I:
- Used the FlatList component, which is optimized for rendering large lists.
- Enabled initialNumToRender to limit the number of items rendered initially.
- Implemented getItemLayout to help the FlatList calculate the height of each row, improving scroll performance.
- Applied memoization techniques such as React.memo to prevent unnecessary re-renders of list items.
- Implemented lazy loading for images to avoid loading all images at once.
  These optimizations significantly improved the performance of the list and ensured smooth scrolling."

- Integrating Third-Party Libraries in React Native
  Question: Describe a situation where you had to integrate a third-party library in React Native. What challenges did you face and how did you overcome them?
  Answer:"In one project, I had to integrate a third-party library for charts and graphs.The challenge was that the library wasn’t optimized for React Native and had some compatibility issues with our existing dependencies.To overcome this, I:
- Thoroughly reviewed the documentation and GitHub issues to understand potential conflicts.
- Used react-native link and manually linked some native dependencies to resolve conflicts.
- Refactored parts of the library’s code to ensure compatibility with our project.
- Ran extensive tests on both Android and iOS to ensure consistent behavior.
  This approach allowed me to successfully integrate the library and customize it to fit our app’s needs."

- Managing Offline Data in React Native
  Question: Can you give an example of when you needed to manage offline data in a React Native app? How did you handle it?
  Answer:"In one project, we had a requirement to allow users to access certain app features offline, such as viewing previously loaded content.To manage offline data, I:
- Used AsyncStorage to cache data locally on the device when the user was online.
- Integrated a data synchronization mechanism, so when the user came back online, the app would sync any locally stored data with the server.
- Used react-native-offline to detect the app’s connectivity status and conditionally render content based on whether the user was online or offline.
- Ensured that offline data updates were handled efficiently to prevent data loss when switching between online and offline states.
  This allowed users to seamlessly interact with the app, even when they were offline."

- Handling Large File Uploads in React Native
  Question: Describe a time when you had to handle large file uploads in React Native. How did you ensure smooth functionality?
  Answer:"In one project, we needed to handle large image uploads from users.To ensure smooth functionality, I:
- Used react-native-image-picker to allow users to choose images from their device.
- Implemented chunked uploads using FormData and the fetch API, uploading files in smaller parts to avoid timeouts or memory issues.
- Showed a progress bar to inform users about the upload status and handled retries in case of network failure.
- Used react-native-background-upload to allow uploads to continue in the background even if the user navigated away from the app.
  This approach ensured that large file uploads were efficient and user-friendly."

- Working with Push Notifications in React Native
  Question: Can you tell me about a time when you implemented push notifications in React Native? What challenges did you face and how did you overcome them?
  Answer:"In one project, we needed to implement push notifications using Firebase Cloud Messaging (FCM).The challenges included handling background notifications and ensuring notifications were delivered consistently across both iOS and Android.To overcome this, I:
- Integrated the react-native-firebase library for push notifications.
- Configured background notifications for iOS and Android, ensuring that notifications were received when the app was in the background.
- Used FCM to send notifications, including handling different types of payloads and custom actions.
- Managed notification handling by implementing custom actions and deep linking to specific screens based on the notification content.
  This allowed us to provide reliable push notifications across devices with custom handling based on the app state."

- Improving App Startup Time in React Native
  Question: Have you ever had to improve the startup time of a React Native app? What steps did you take?
  Answer:"In one project, the app had a slow startup time due to the heavy initial loading of resources.To improve the startup time, I:
- Implemented lazy loading by splitting the app into smaller chunks using React.lazy() and Suspense.
- Optimized images by reducing their size and using react-native-fast-image for better caching.
- Minimized the size of the initial bundle by removing unnecessary dependencies and optimizing assets.
- Used CodePush for deploying updates without requiring users to wait for app store reviews.
  These optimizations reduced the startup time significantly, providing a better user experience."

- Handling Device Permissions in React Native
  Question: Tell me about a time when you needed to request permissions in a React Native app. How did you handle it?
  Answer:"In one project, we needed to request device permissions for accessing the camera and location.To handle this, I:
- Used the react-native-permissions library to request and check for permissions in a clean and consistent manner.
- Handled cases where the user denied permissions, showing appropriate explanations using custom dialogs to inform them why the app needed the permissions.
- Ensured the app didn’t crash when permissions were not granted by adding fallback logic.
- Tested the app across various Android and iOS versions to ensure compatibility.
  This approach ensured that the app worked smoothly, even when permissions were denied or not granted."

- Using React Native Navigation Efficiently
  Question: Can you describe how you managed navigation in a React Native app with complex navigation flows?
  Answer:"In a project with complex navigation flows, I had to manage nested navigators and dynamic routing.To handle this, I:
- Used React Navigation to create a flexible navigation structure, including nested stack and tab navigators.
- Used deep linking to handle navigation between screens both within the app and externally.
- Used the navigation prop to manage transitions between screens dynamically.
- Optimized navigation performance by using React.memo and useCallback to prevent unnecessary re-renders of components.
  This approach allowed me to manage complex navigation logic efficiently, ensuring a smooth and intuitive user experience."

- Implementing Custom UI Components in React Native
  Question: Tell me about a time when you needed to implement a custom UI component in React Native. How did you approach it?
  Answer:"In one project, we needed to create a custom slider component for selecting a value.To implement this, I:
- Used PanResponder to track touch events and create a custom dragging interaction.
- Styled the slider using Animated to create smooth transitions and effects.
- Ensured that the slider worked across both Android and iOS, considering platform-specific UI guidelines.
- Created reusable props such as min, max, and value to allow flexibility for the component's usage.
  This approach allowed us to create a highly customizable and performant slider component that could be easily reused across the app."

- Handling App Updates and Hotfixes in React Native
  Question: Have you ever had to roll out a critical hotfix or update for a React Native app? What was your approach?
  Answer:"In one situation, we had to release a hotfix due to a crash occurring in production after a major update.To handle the hotfix, I:
- Quickly identified the bug by analyzing the error logs and user feedback.
- Fixed the bug in the codebase and tested it thoroughly in staging.
- Used CodePush to deploy the hotfix directly to users, minimizing downtime.
- Ensured the updated version didn’t break any other functionality by performing regression testing across the app.
  This allowed us to quickly resolve the issue without requiring users to wait for an App Store/Play Store review."

- Handling Async Data Fetching in React Native
  Question: Describe a time when you had to handle async data fetching in a React Native app. How did you manage the loading, success, and error states?
  Answer:"In a recent project, I had to fetch data from a REST API and display it in a list.To manage async data fetching, I:
- Used useEffect with async/await to fetch data when the component mounted.
- Managed the loading state using useState to show a loading spinner while the data was being fetched.
- Handled success by updating the state with the fetched data and rendering it on the screen.
- Managed errors by catching any network or API errors and displaying an error message to the user.
- Ensured that the loading state was properly cleared and displayed a retry button if there was an error.
  This approach provided a smooth experience for the user with clear feedback about the data fetching process."

- Handling Multiple Screen Transitions in React Native
  Question: Have you ever had to manage multiple screen transitions in React Native? How did you ensure smooth transitions between screens?
  Answer:"In a previous project, I had to manage complex screen transitions due to the need for various steps in the user onboarding process.To ensure smooth transitions, I:
- Used React Navigation with custom transition animations to create a smooth flow between screens.
- Added navigation listeners to detect when a screen is focused or blurred, and used this information to trigger animations or updates on the UI.
- Employed Animated components to animate elements during transitions for a more dynamic user experience.
- Optimized performance by lazy-loading screens only when they were needed to avoid unnecessary memory usage.
  These steps helped make the navigation between screens seamless and visually appealing."

- Handling Deep Linking in React Native
  Question: Can you tell me about a time when you implemented deep linking in a React Native app? How did you set it up and ensure it worked across both iOS and Android?
  Answer:"In a recent app, we needed deep linking for navigating users directly to specific content.To implement deep linking, I:
- Used React Navigation's deep linking API to set up URL schemas.
- Configured the app’s Info.plist (iOS) and AndroidManifest.xml (Android) files to define the schemes.
- Set up a deep linking handler to manage incoming URLs and route users to the appropriate screen.
- Tested deep linking on both platforms to ensure consistent behavior, especially when the app was in the background or not running.
- Implemented universal links on iOS for a more seamless deep linking experience when the app was not installed.
  The result was a seamless experience that allowed users to navigate to specific screens directly via links."

- Working with Custom Fonts in React Native
  Question: Describe a situation where you had to integrate custom fonts into your React Native app. How did you implement it?
  Answer:"In one project, we needed to use a custom font to match the branding of the app.To integrate the font, I:
- Added the font files to the project’s assets folder (i.e., .ttf or .otf files).
- Updated the react-native.config.js to include the font files so React Native could load them.
- Used Text components with the style property to specify the custom font family.
- Tested the fonts on both iOS and Android devices to ensure proper rendering.
- Used font-family for styling components globally, to keep the UI consistent across the app.
  This approach allowed me to successfully integrate the custom font and ensure consistency across different devices."

- Handling Authentication in React Native
  Question: Tell me about a time when you implemented authentication in a React Native app. How did you manage authentication flow and user sessions?
  Answer:"In a project, we needed to implement user authentication via email and password, along with a session management system.To implement authentication, I:
- Used Firebase Authentication for handling sign-up, sign-in, and password recovery.
- Managed the authentication state using React Context and useReducer to track the user's login state globally.
- Implemented token-based authentication to persist the user session and automatically sign them in on app launch.
- Ensured secure storage of tokens by using react-native-keychain for iOS and Android to store sensitive data securely.
- Handled both login and sign-up flows, including error handling for invalid credentials and providing feedback to the user.
  This approach ensured a seamless and secure authentication process for users."

- Managing State Across Multiple Components in React Native
  Question: Can you describe how you managed state across multiple components in a React Native app?
  Answer:"In a recent project, I had to manage shared state across various components.To handle this, I:
- Used React Context to create a global state and shared data between components.
- Used useReducer for more complex state logic and actions within the context.
- Used hooks like useState and useEffect in individual components to update and react to changes in the global state.
- Ensured that state changes triggered re-renders only when necessary to improve performance.
- Used the React.memo and useCallback hooks to prevent unnecessary re-renders of child components.
  This approach allowed me to efficiently manage state across multiple components without prop-drilling or excessive re-renders."

- Debugging React Native Performance Issues
  Question: Can you describe a time when you encountered performance issues in a React Native app? How did you debug and resolve them?
  Answer:"In one project, we faced performance issues with slow rendering when displaying large datasets in a list.To debug and resolve the issue, I:
- Used React Native's built-in Profiler to identify components that were taking too long to render.
- Used React DevTools to examine re-renders and identify unnecessary state changes.
- Switched to FlatList from ScrollView, as it’s optimized for rendering large data sets.
- Implemented shouldComponentUpdate and React.memo to avoid unnecessary re-renders.
- Optimized images by resizing and caching them using react-native-fast-image.
  This helped us significantly improve the app's performance, especially when dealing with large lists."

- Integrating Native Modules in React Native
  Question: Have you ever had to integrate native modules in a React Native project? Can you walk me through how you did it?
  Answer:"In one project, we needed to access a device’s native camera API to add a custom functionality that wasn’t available in React Native.To integrate native modules, I:
- Created a custom native module in Java/Kotlin (Android) and Objective-C/Swift (iOS) to expose the camera functionality.
- Used NativeModules from react-native to access the native module in JavaScript.
- Handled the permissions for both platforms, ensuring the app worked seamlessly on both Android and iOS.
- Ensured that the module was well-documented and that the interface was easy to use for other developers.
  This approach allowed us to successfully integrate native functionality and expose it to JavaScript in a clean and reusable manner."

- Handling Device-Specific Issues in React Native
  Question: Tell me about a time when you encountered device-specific issues in React Native. How did you address them?
  Answer:"In one project, we encountered an issue where a feature worked fine on iOS but caused performance degradation on certain Android devices.To address the issue, I:
- Used Platform module to implement platform-specific code and handle the differences in behavior.
- Used device detection to determine screen size, resolution, and hardware capabilities.
- Optimized the feature for lower-end Android devices by reducing image sizes, optimizing rendering, and minimizing the number of concurrent operations.
- Tested the feature on a range of devices using Android Virtual Device (AVD) and physical devices.
  This approach allowed the feature to work smoothly across various devices without compromising performance."

- Managing App Navigation Based on User Roles
  Question: Can you describe a time when you had to manage different navigation flows based on user roles in a React Native app?
  Answer:"In a recent app, we had to manage different navigation flows based on whether the user was an admin or a regular user.To handle this, I:
- Used React Navigation and created different stacks for admins and regular users.
- Stored the user's role in the global state (using React Context or Redux) after successful login.
- Conditioned the root navigator to switch between the two stacks based on the user’s role.
- Made sure to update the navigation state dynamically whenever the user’s role changed.
  This approach ensured that users saw the correct flow based on their permissions."
