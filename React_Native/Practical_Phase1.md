1. How does the React Native bridge work, and what are its limitations?
   Answer:

- The React Native bridge enables communication between JavaScript (JS) and Native code (Objective-C/Swift for iOS, Java/Kotlin for Android).
- It uses a batched asynchronous messaging system where data is serialized into JSON and sent across the bridge.

- Limitations:
  - The bridge is slow because of JSON serialization and the async nature.
  - It introduces a performance bottleneck when handling animations or high-frequency updates.
  - There’s no direct memory sharing between JS and Native, leading to inefficiencies.
  - Solutions like TurboModules and Fabric aim to improve this.

2. What are TurboModules and Fabric, and how do they improve React Native performance?
   Answer:

- TurboModules:
  - They allow on-demand, lazy loading of native modules, reducing the initial startup time.
  - Uses JSI (JavaScript Interface) to enable direct method calls without going through the bridge.
- Fabric:
  - It’s the new UI rendering system that enables synchronous communication between JS and Native.
  - Moves UI updates to the C++ layer, reducing frame drops and making animations smoother.
  - Supports concurrent rendering, improving responsiveness.

3. How does Hermes improve React Native performance?
   Answer:

- Hermes is a lightweight JS engine optimized for React Native.
- Key benefits:
  - Faster startup time with ahead-of-time (AOT) compilation.
  - Lower memory usage due to efficient garbage collection.
  - Reduced APK size (by pre-compiling JavaScript).
  - Better debugging with Hermes-specific tools like hermes-profile-transformer.

4. How does Zustand compare to Redux in terms of performance and ease of use?
   Answer:

- Zustand is a minimalistic state management library that uses React hooks.
- Differences from Redux:
  - No boilerplate – Zustand is easier to set up.
  - Direct state mutation instead of actions/reducers.
  - No context API dependency, so it avoids unnecessary re-renders.
  - Built-in persistence without extra libraries.
- Performance:
  - Zustand updates only the components that use the changed state, unlike Redux, which may cause unnecessary re-renders.

5. How do you handle large-scale data synchronization between frontend and backend in React Native?
   Answer:

- Use React Query or Apollo Client for efficient data fetching and caching.
- Implement WebSockets or GraphQL Subscriptions for real-time updates.
- Use SQLite, WatermelonDB, or AsyncStorage for offline data storage.
- Implement background sync using react-native-background-fetch.
- Optimize data updates using diff/patch strategies instead of full data replacements.

6. What are the key differences between Animated API and Reanimated in React Native?
   Answer:
   Feature Animated API Reanimated
   Execution Runs on JS thread Runs on the UI thread
   Performance Laggy for complex animations Smooth at 60 FPS
   Gesture Handling Not built-in Has Gesture Handler integration
   API Complexity Simple, declarative More complex but powerful
   Recommended for Basic animations Complex, high-performance animations
   • Use Reanimated for animations that need to run independently of the JavaScript thread (e.g., complex gestures).

7. How would you implement a smooth parallax scrolling effect in React Native?
   Answer:

- Use Animated API or Reanimated 2 with interpolate().
- Attach an Animated.Value to ScrollView's onScroll event.
- Example:jsx
- const scrollY = useRef(new Animated.Value(0)).current;
- const translateY = scrollY.interpolate({
- inputRange: [0, 200],
- outputRange: [0, -50],
- extrapolate: "clamp",
- });
-
- return (
- <Animated.ScrollView
-     onScroll={Animated.event(
-       [{ nativeEvent: { contentOffset: { y: scrollY } } }],
-       { useNativeDriver: true }
-     )}
- >
-     <Animated.Image style={{ transform: [{ translateY }] }} />
- </Animated.ScrollView>
- );
-
- Ensures smooth animations by using useNativeDriver: true.

8. How do you securely store API keys and sensitive data in React Native?
   Answer:

- Do NOT store API keys in the frontend code!
- Use react-native-config for environment variables.
- Store sensitive data in Keychain (iOS) and EncryptedSharedPreferences (Android).
- For authentication tokens, use SecureStore or AsyncStorage with encryption.
- Use .env files and keep them out of version control (.gitignore).
- Example .env:env
- API_URL=https://api.example.com
- API_KEY=supersecretkey
- Access in React Native:javascript
- import Config from "react-native-config";
- console.log(Config.API_KEY);

9. How do you optimize APK and IPA sizes for a React Native app?
   Answer:
1. Enable Hermes to reduce JS bundle size (enableHermes: true in android/app/build.gradle).
1. Use ProGuard to remove unused Java code (proguard-rules.pro).
1. Compress assets using react-native-asset and webp format for images.
1. Use Android App Bundles (AAB) instead of APK.
1. Enable bitcode for iOS (though optional).
1. Tree-shaking & Code Splitting to remove unused imports.

1. How would you set up end-to-end testing in a React Native app?
   Answer:

- Use Detox (preferred for React Native) or Appium.
- Example setup for Detox:bashCopyEdit
- npm install -g detox-cli
- npm install --save-dev detox jest-circus
- detox init -r jest
- Sample Detox test:javascriptCopyEdit
- describe("Login Flow", () => {
- it("should log in successfully", async () => {
-     await device.reloadReactNative();
-     await element(by.id("emailInput")).typeText("test@example.com");
-     await element(by.id("passwordInput")).typeText("password123");
-     await element(by.id("loginButton")).tap();
-     await expect(element(by.id("welcomeText"))).toBeVisible();
- });
- });

11. How do you handle offline caching in React Native?
    Answer:

- Use AsyncStorage for small key-value storage.
- Use SQLite or WatermelonDB for large structured data.
- Implement NetInfo to check network status and sync data when online.
- React Query/Apollo Client supports automatic caching and background refetching.
- Use Service Workers (on web) or Background Fetch (on mobile) for background sync.
  Example using AsyncStorage:
  javascript
  CopyEdit
  import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key, value) => {
try {
await AsyncStorage.setItem(key, JSON.stringify(value));
} catch (e) {
console.error('Error storing data', e);
}
};

const getData = async (key) => {
try {
const value = await AsyncStorage.getItem(key);
return value ? JSON.parse(value) : null;
} catch (e) {
console.error('Error retrieving data', e);
}
};

12. How do you implement real-time updates in a React Native app without WebSockets?
    Answer:
1. Long Polling:
   - Send periodic requests to the server and fetch new data if available.
1. Server-Sent Events (SSE):
   - Uses an event stream from the server that sends real-time updates.
1. GraphQL Subscriptions (Apollo/Hasura):
   - Uses WebSockets or HTTP polling under the hood.
1. Firebase Realtime Database: \* Built-in real-time updates when data changes.
   Example using Firebase:
   javascript
   CopyEdit
   import database from '@react-native-firebase/database';

const reference = database().ref('/messages');
reference.on('value', snapshot => {
console.log('New messages:', snapshot.val());
});

13. How would you handle animations and gestures together in React Native?
    Answer:

- Use Reanimated 2 + Gesture Handler for best performance.
- Offload animations to the UI thread using useSharedValue and useAnimatedStyle.
  Example of a draggable box with Reanimated and Gesture Handler:
  javascript
  CopyEdit
  import React from 'react';
  import { View } from 'react-native';
  import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
  import { PanGestureHandler } from 'react-native-gesture-handler';

export default function DraggableBox() {
const translateX = useSharedValue(0);
const translateY = useSharedValue(0);

const animatedStyle = useAnimatedStyle(() => ({
transform: [{ translateX: translateX.value }, { translateY: translateY.value }]
}));

return (
<PanGestureHandler
onGestureEvent={(event) => {
translateX.value = withSpring(event.translationX);
translateY.value = withSpring(event.translationY);
}} >
<Animated.View style={[{ width: 100, height: 100, backgroundColor: 'blue' }, animatedStyle]} />
</PanGestureHandler>
);
}

- Uses withSpring for smooth animations.
- Runs on UI thread, avoiding lag.

14. How do you handle deep linking in a React Native application?
    Answer:

- Use react-navigation with deep linking support.
- Define deep linking structure in app.json (for Expo) or AndroidManifest.xml (for Android).
- Handle links with Linking API.
  Example using react-navigation:
  javascript
  CopyEdit
  const linking = {
  prefixes: ['myapp://', 'https://myapp.com'],
  config: {
  screens: {
  Home: 'home',
  Profile: 'user/:id',
  },
  },
  };

export default function App() {
return (
<NavigationContainer linking={linking}>
<Stack.Navigator>
<Stack.Screen name="Home" component={HomeScreen} />
<Stack.Screen name="Profile" component={ProfileScreen} />
</Stack.Navigator>
</NavigationContainer>
);
}

- myapp://user/123 opens ProfileScreen with id=123.

15. How do you implement biometric authentication in React Native?
    Answer:

- Use react-native-local-authentication (Expo) or react-native-touch-id.
- Supports Fingerprint, Face ID, and Passcode.
  Example:
  javascript
  CopyEdit
  import React from 'react';
  import { Alert, Button } from 'react-native';
  import TouchID from 'react-native-touch-id';

const BiometricAuth = () => {
const authenticate = () => {
TouchID.authenticate('Authenticate with Fingerprint')
.then(success => Alert.alert('Success', 'Authentication successful!'))
.catch(error => Alert.alert('Error', 'Authentication failed'));
};

return <Button title="Authenticate" onPress={authenticate} />;
};

export default BiometricAuth;

- Requires proper permissions in Android and iOS settings.

16. How would you debug performance issues in React Native?
    Answer:
1.  Use Flipper – Debug UI, network requests, and performance.
1.  Enable Hermes – Use hermes-profile-transformer for JS profiling.
1.  Use React Profiler – React DevTools > Profiler tab.
1.  Reduce re-renders – Use useMemo, useCallback, and React.memo.
1.  Optimize animations – Use Reanimated instead of the bridge.
1.  Monitor memory leaks – Use useEffect cleanup and avoid unnecessary event listeners.

1.  How do you set up Fastlane for automating React Native builds?
    Answer:
1.  Install Fastlane:
1.  brew install fastlane
1.  Navigate to ios/ and run:bash
1.  fastlane init
1.  Define Fastfile for iOS release:
1.  platform :ios do
1.  lane :release do
1.       increment_build_number
1.       gym(scheme: "MyApp") # Build IPA
1.       deliver # Upload to App Store
1.  end
1.  end
1.
1.  Run:bash
1.  fastlane ios release
    For Android:

- Use gradle commands inside Fastfile.

18. How do you implement feature flagging in a React Native application?
    Answer:

- Use LaunchDarkly, Firebase Remote Config, or a custom feature flagging system.
- Store feature flags in AsyncStorage or an API and update on app launch.
  Example using Firebase Remote Config:
  javascript
  CopyEdit
  import remoteConfig from '@react-native-firebase/remote-config';

async function fetchConfig() {
await remoteConfig().setDefaults({ newFeature: false });
await remoteConfig().fetchAndActivate();
return remoteConfig().getValue('newFeature').asBoolean();
}

useEffect(() => {
fetchConfig().then(setFeatureEnabled);
}, []);

- This enables dynamic feature toggling without redeploying the app.

19. How do you optimize WebView performance in React Native?
    Answer:

- Use react-native-webview instead of react-native's deprecated WebView.
- Enable hardware acceleration:javascriptCopyEdit<WebView
- source={{ uri: 'https://example.com' }}
- javaScriptEnabled={true}
- domStorageEnabled={true}
- renderLoading={() => <ActivityIndicator />}
- />
-
- Disable unnecessary JS execution (injectedJavaScriptBeforeContentLoaded).
- Optimize images and assets on the loaded page.

20. How does React Native handle memory management, and how can you prevent memory leaks?
    Answer:React Native uses JavaScript’s garbage collection, but memory leaks can still occur due to:

- Unclosed event listeners (e.g., addEventListener without removeEventListener).
- Unsubscribed API calls (especially in useEffect).
- Large image memory consumption (not clearing cache).
- Retaining references to unused components in closures.
  To prevent memory leaks:
- Always clean up listeners and timers in useEffect's return function.
- Use tools like Flipper Memory Plugin or Xcode's Instruments to monitor memory usage.

21. What are the differences between React Native’s New Architecture (Fabric) and the Old Architecture?
    Answer:

- Fabric (New Architecture) replaces the Bridge model with JSI (JavaScript Interface) for better performance.
- Fabric uses TurboModules for improved native module communication.
- It allows synchronous execution of JS-to-native calls, whereas the old architecture was asynchronous.
- Rendering is done with Concurrent React for smoother UI updates.
  Benefits:
- Reduces UI lag.
- Lower memory usage.
- Faster native module interactions.

22. How do you optimize a React Native app for a low-end device?
    Answer:

- Reduce bundle size using Hermes and code splitting.
- Use FlatList instead of ScrollView for large datasets.
- Optimize image sizes and use caching libraries like FastImage.
- Avoid unnecessary re-renders with React.memo, useCallback, and useMemo.
- Reduce JS thread workload by offloading tasks to the UI thread using Reanimated 2.

23. How does React Native handle concurrent rendering with React 18?
    Answer:React 18 introduces Concurrent Rendering, which:

- Allows the UI to remain responsive during heavy updates.
- Uses automatic batching to optimize state updates.
- Supports Suspense for Data Fetching to avoid unnecessary re-renders.
  Benefits in React Native:
- Helps with animations, gestures, and large state updates.
- Works well with Fabric, improving responsiveness.

24. How does React Native handle background tasks efficiently?
    Answer:

- Uses Headless JS for executing tasks when the app is in the background.
- Can schedule periodic tasks using react-native-background-fetch.
- On iOS, Background Modes must be enabled in Info.plist.
- On Android, WorkManager (or JobScheduler) is used for long-running tasks.
  Common use cases:
- Syncing data in the background.
- Fetching location updates.
- Running periodic API calls.

25. What are the major differences between Expo and Bare React Native CLI?
    Answer:
    Feature Expo Bare React Native CLI
    Ease of Setup ✅ Simple ❌ Manual setup required
    Native Code Editing ❌ Not possible ✅ Full control
    OTA Updates ✅ Built-in (Expo Updates) ❌ Requires CodePush or manual deployment
    Performance ❌ Slightly slower ✅ Better for large apps
    Third-Party Libraries ❌ Limited ✅ Full access
    Use Expo if: You need quick prototyping and don’t require heavy native modifications.Use Bare React Native CLI if: You need full native control and advanced performance optimizations.

26. How does React Native handle gesture interactions efficiently?
    Answer:

- react-native-gesture-handler is used instead of Touchable components for better performance.
- Reanimated 2 allows animations to run on the UI thread, avoiding JS thread delays.
- PanResponder (deprecated) was used for complex gestures but has been replaced by GestureHandler.
  Example gestures:
- Swipe gestures for navigation.
- Pinch-to-zoom interactions.
- Drag-and-drop components.

27. How do you debug and profile a React Native app?
    Answer:

- Flipper (official debugging tool) provides network logs, performance insights, and crash reports.
- React DevTools Profiler helps detect unnecessary re-renders.
- Use Chrome DevTools for JS debugging.
- Android Studio Profiler and Xcode Instruments help analyze memory and CPU usage.
- Logbox shows errors and warnings with stack traces.

28. What are the challenges with React Native navigation, and how can you improve it?
    Answer:Challenges:

- Navigation performance issues (especially for complex screens).
- Handling deep linking and dynamic routing.
- State persistence across navigation.
  Optimizations:
- Use react-native-screens to improve screen rendering.
- Enable gesture-based navigation for smooth transitions.
- Prefetch screens to reduce load time.

29. How do you handle in-app purchases in React Native?
    Answer:

- Use react-native-iap for handling both Google Play Store and Apple App Store purchases.
- Follow Apple’s StoreKit and Google’s Billing API for secure transactions.
- Implement receipt validation on the backend to prevent fraud.
- Handle subscription renewals and cancellations properly.

30. How do you implement push notifications in React Native?
    Answer:

- Use Firebase Cloud Messaging (FCM) for Android & iOS.
- For iOS, configure APNs (Apple Push Notification Service).
- Handle background notifications using react-native-push-notification.
- Manage notification click actions and deep linking.
  Challenges:
- Handling push notification permissions.
- Delivering messages reliably when the app is in the background.

31. How do you optimize the app startup time in React Native?
    Answer:

- Reduce bundle size using Hermes and Metro bundler optimizations.
- Use lazy loading and code splitting.
- Optimize asset loading using react-native-fast-image.
- Minimize the number of third-party libraries.
- Implement a splash screen to preload necessary data before launching the main app.

32. How do you secure sensitive data in a React Native app?
    Answer:

- Never store sensitive information in AsyncStorage (use SecureStore or Keychain instead).
- Use react-native-encrypted-storage for encrypted key-value storage.
- Implement JWT (JSON Web Tokens) for authentication.
- Use SSL Pinning to prevent Man-in-the-Middle (MITM) attacks.
- Obfuscate JavaScript code using metro-react-native-babel-preset.

33. What are the trade-offs of using Redux vs. Context API in React Native?
    Answer:
    Feature Redux Context API
    Boilerplate ✅ High ✅ Minimal
    Performance ✅ Optimized (with middleware) ❌ Can cause re-renders
    DevTools Support ✅ Strong (Redux DevTools) ❌ Limited
    Asynchronous Handling ✅ Supports middlewares (Redux-Saga, Thunk) ❌ Requires extra work
    Best For Large-scale apps Small to medium apps
    Use Redux for apps requiring global state management with complex logic.Use Context API for simple state sharing across components.

34. How does Hermes improve React Native performance?
    Answer:Hermes is a lightweight JavaScript engine optimized for React Native. It improves performance by:

- Reducing app startup time through ahead-of-time (AOT) compilation.
- Lowering memory consumption by optimizing bytecode execution.
- Optimizing garbage collection to handle large objects efficiently.
- Reducing bundle size, as Hermes compiles JS into an optimized bytecode format.
  Ideal for: Low-end Android devices, apps with large JavaScript bundles, and improving startup performance.

35. How do you handle deep linking in a React Native app?
    Answer:Deep linking allows users to open specific screens in an app via external links (e.g., myapp://profile/123).

- For iOS: Configure Universal Links in apple-app-site-association.
- For Android: Set up Android App Links in AndroidManifest.xml.
- For React Navigation: Use Linking to map URL patterns to screens.
  Challenges:
- Handling nested screens and dynamic parameters.
- Managing deep links when the app is in the background or killed.
- Ensuring proper redirection across web and mobile.

36. How do you improve React Native performance for animations?
    Answer:

- Use Reanimated 2 for smooth UI-thread-based animations.
- Avoid JavaScript-driven animations; instead, leverage native drivers.
- Use react-native-gesture-handler for efficient touch interactions.
- Reduce layout recalculations by optimizing the component tree.
- Minimize unnecessary re-renders using React.memo and useCallback.

37. How do you implement offline-first functionality in React Native?
    Answer:Offline-first apps ensure functionality even without an internet connection.

- Local Storage: Use AsyncStorage or MMKV for caching data.
- Database: Use WatermelonDB or Realm for local DB management.
- Sync Mechanism: Use Redux Persist to keep state between sessions.
- Network Detection: Use NetInfo to detect connectivity and sync data accordingly.
- Background Syncing: Implement background tasks to update data when online.

38. How do you handle biometric authentication in React Native?
    Answer:

- Use react-native-keychain or react-native-biometrics for fingerprint/Face ID authentication.
- On iOS, use LocalAuthentication (Face ID, Touch ID).
- On Android, use BiometricPrompt API for authentication.
- Store sensitive authentication tokens securely in SecureStore (Expo) or Keychain (iOS).
  Challenges:
- Handling biometric failures and fallback authentication.
- Ensuring biometric support across all devices.

39. How do you manage accessibility (a11y) in React Native?
    Answer:Accessibility ensures apps are usable for people with disabilities.

- Use accessibilityLabel for screen readers (VoiceOver, TalkBack).
- Enable keyboard navigation with focusable={true}.
- Support dynamic font scaling with allowFontScaling={true}.
- Test with Accessibility Inspector (iOS) and TalkBack (Android).
- Implement gesture-based navigation for users with limited mobility.

40. How do you prevent UI jank in a React Native app?
    Answer:UI jank occurs when UI updates feel slow or laggy.

- Reduce main thread workload by offloading work to native threads.
- Batch state updates to minimize re-renders.
- Use FlatList with getItemLayout to improve list performance.
- Use InteractionManager to defer non-critical UI updates.
- Enable Hermes to optimize JS execution.

41. How do you handle large lists efficiently in React Native?
    Answer:Rendering large lists can cause performance issues.

- Use FlatList instead of ScrollView to enable virtualization.
- Implement getItemLayout for fixed-height items.
- Use initialNumToRender to control rendering on mount.
- Enable removeClippedSubviews to free up memory.
- Consider SectionList for grouped data.

42. How do you secure API requests in React Native?
    Answer:

- Use HTTPS to encrypt API traffic.
- Token-based authentication (JWT, OAuth) with token refreshing.
- SSL Pinning to prevent MITM attacks.
- Obfuscate API keys using environment variables.
- Rate limiting and CAPTCHAs to prevent abuse.

43. What are the common memory leaks in React Native?
    Answer:Memory leaks slow down apps and increase crashes.
    Common causes:

- Not unsubscribing event listeners in useEffect.
- Retaining unused component state in closures.
- Holding references to large objects in global state.
- Not releasing native resources (e.g., camera, file handlers).

44. How do you implement multi-language support in React Native?
    Answer:

- Use react-native-localize to detect device language.
- Store translations in JSON files and use i18next for internationalization.
- Use context or Redux to update language dynamically.
- Consider Right-to-Left (RTL) support for Arabic, Hebrew, etc.

45. How do you handle large images in React Native?
    Answer:Large images increase memory usage and slow down rendering.
    Solutions:

- Use react-native-fast-image for efficient caching.
- Optimize image formats (use WebP for better compression).
- Use resizeMode="cover" to avoid unnecessary scaling.
- Load images progressively (lazy loading).

46. How does React Native handle state persistence?
    Answer:

- Use AsyncStorage for lightweight storage.
- Use Redux Persist to persist Redux store state.
- Use SecureStore for sensitive user data.
- Implement background syncing to update state when online.

47. How do you handle app crashes in React Native?
    Answer:

- Use Sentry or Firebase Crashlytics to log crashes.
- Catch global errors using ErrorBoundary.
- Monitor performance with Flipper.
- Handle unexpected errors gracefully with alerts or fallback UIs.

48. How do you reduce React Native APK/IPA size?
    Answer:

- Enable Hermes for smaller JS bundle size.
- Use Proguard (Android) and Bitcode (iOS) for code optimization.
- Remove unused assets and fonts.
- Optimize native dependencies to avoid unnecessary bloat.

49. How do you implement CI/CD for a React Native app?
    Answer:

- Use Fastlane for automated builds and deployments.
- Configure GitHub Actions or Bitrise for CI/CD pipelines.
- Use Firebase App Distribution for internal testing.
- Automate code signing for iOS using Fastlane match.

50. How do you test a React Native app?
    Answer:

- Unit Testing: Use Jest for testing individual components and functions.
- Integration Testing: Use Detox for end-to-end UI tests.
- Snapshot Testing: Use Jest snapshots to detect UI changes.
- Manual Testing: Test across different screen sizes and OS versions.

51. How does React Native handle WebSockets for real-time communication?
    Answer:React Native supports WebSockets for real-time data exchange.

- Use cases: Chat applications, live notifications, real-time updates.
- Challenges: Handling reconnections, network failures, and server-side events.
- Optimizations: Implement heartbeat mechanisms and fallback strategies (like polling).

52. How do you implement background tasks in React Native?
    Answer:Background tasks allow apps to execute code when the app is minimized or closed.

- Use react-native-background-fetch for periodic background tasks.
- Use react-native-background-timer for executing tasks at intervals.
- For iOS, tasks must comply with Apple's background execution policies (e.g., Background Modes).
- For Android, use WorkManager for more reliable background execution.

53. How do you implement push notifications in a React Native app?
    Answer:Push notifications improve engagement and user retention.

- Use Firebase Cloud Messaging (FCM) for Android and iOS.
- Use APNs (Apple Push Notification Service) for iOS-specific notifications.
- Handle foreground, background, and terminated state notifications properly.
- Use React Native Notifee for advanced notification customization.
  Challenges:
- Managing device tokens and permissions.
- Handling deep linking from push notifications.
- Ensuring notifications work across all Android OEMs.

54. How does React Native handle multi-threading?
    Answer:React Native is single-threaded by default but utilizes multiple threads under the hood.

- Main thread (UI Thread): Handles rendering and user interactions.
- JavaScript thread: Executes business logic and API calls.
- Native modules can spawn additional threads for heavy computations (e.g., image processing).
- Use react-native-worker or JSI to perform operations off the main thread.

56. How do you optimize navigation performance in a React Native app?
    Answer:Navigation impacts user experience significantly.

- Use React Navigation with native stack (@react-navigation/native-stack) for better performance.
- Avoid unnecessary re-renders by memoizing screens.
- Implement lazy loading of screens.
- Use gesture-based navigation for smooth animations.
- Optimize transition animations to prevent frame drops.

57. How do you handle memory management in React Native?
    Answer:Memory leaks can slow down an app and cause crashes.

- Avoid retaining large objects in state when unnecessary.
- Use FlatList instead of ScrollView for large lists.
- Optimize image loading with FastImage.
- Use NativeModules to release native resources when no longer needed.
- Debug memory issues using Xcode Instruments (iOS) and Android Profiler.

58. How do you ensure app compatibility across different screen sizes?
    Answer:

- Use Flexbox for responsive layouts.
- Implement percentage-based widths/heights instead of fixed values.
- Use react-native-size-matters for dynamic scaling.
- Test on multiple screen sizes using responsive design tools (like Xcode Simulator, Android Studio).
- Implement adaptive font scaling to maintain readability.

59. How do you implement in-app purchases in a React Native app?
    Answer:In-app purchases allow users to buy content or subscriptions within the app.

- Use react-native-iap to integrate in-app purchases for iOS and Android.
- Handle receipt validation on the backend to prevent fraud.
- Follow App Store & Play Store guidelines for in-app billing policies.
- Implement restoring purchases for users switching devices.
  Challenges:
- Handling failed transactions and refunds.
- Managing cross-platform subscription logic.

60. How do you handle app updates and versioning in React Native?
    Answer:App updates ensure users always have the latest features.

- Use CodePush for over-the-air JavaScript updates (without App Store/Play Store re-submission).
- Implement version checks to force users to update.
- Handle backward compatibility for older versions.
- Use fastlane for automated builds and deployments.

61. How do you handle OAuth authentication in React Native?
    Answer:OAuth allows secure third-party logins like Google, Apple, and Facebook.

- Use react-native-app-auth for secure authentication flows.
- Implement PKCE (Proof Key for Code Exchange) for added security.
- Store access tokens securely in SecureStore (iOS) or EncryptedStorage (Android).
- Refresh tokens periodically to maintain user sessions.

62. How does React Native handle permissions?
    Answer:Permissions ensure user data privacy and security.

- Use react-native-permissions to request and manage permissions dynamically.
- Handle platform-specific permissions (e.g., background location on Android).
- Show rationale popups to explain why permissions are needed.

63. How do you handle animations in React Native for better performance?
    Answer:Animations enhance user experience but can cause jank if not optimized.

- Use Reanimated 2 for native-driven animations.
- Use Layout Animations for smooth transitions.
- Minimize use of JavaScript-based animations to avoid UI thread blocking.
- Test performance using Flipper's Performance Monitor.

64. How do you manage dependencies in a React Native project?
    Answer:

- Keep dependencies up to date using yarn outdated or npm audit.
- Avoid unnecessary third-party libraries to reduce bundle size.
- Use patch-package to fix issues in third-party libraries.
- Monitor dependency security using Snyk or npm audit.

65. How does React Native handle gestures efficiently?
    Answer:

- Use react-native-gesture-handler for performant gestures.
- Use Reanimated 2 for native gesture animations.
- Implement debouncing or throttling for gesture events.
- Test touch performance using React DevTools profiler.

66. How do you handle errors in a React Native app?
    Answer:

- Use Error Boundaries for catching UI-level errors.
- Use Sentry or Firebase Crashlytics for error monitoring.
- Implement proper error handling in async calls.
- Show user-friendly error messages and fallback UIs.

67. What are the key differences between React Native CLI and Expo?
    Answer:
    Feature React Native CLI Expo
    Flexibility Full control Limited native module access
    Performance Optimized Slightly heavier
    Native Modules Full access Only supported APIs
    OTA Updates Not built-in Built-in with Expo Updates
    Ease of Use More setup required Faster setup

68. How does React Native bridge work, and what are its performance implications?
    Answer:The React Native Bridge enables communication between JavaScript and native code.

- Bidirectional communication: JS sends commands to native modules, and native modules return data.
- Asynchronous processing: Messages pass through the bridge, which can cause performance bottlenecks.
- Performance issues: The bridge can slow down animations, gestures, and data-heavy tasks.
- Alternatives:
  - JSI (JavaScript Interface): Bypasses the bridge for direct C++ communication.
  - TurboModules: Faster native module execution.
  - Fabric Renderer: Improves UI rendering performance.

69. How do TurboModules improve React Native’s performance?
    Answer:TurboModules are the next-gen native modules in React Native that:

- Use JSI instead of the bridge for direct JS-to-native interaction.
- Allow lazy loading of native modules, reducing startup time.
- Enable synchronous execution, reducing bottlenecks.
- Improve memory management and performance.

70. What is Fabric in React Native, and why is it important?
    Answer:Fabric is React Native's new rendering engine that replaces the traditional UI manager.

- Uses JSI for direct JS-native interaction.
- Lowers memory footprint by reducing the number of re-renders.
- Supports concurrent rendering with React 18’s concurrent mode.
- Improves animations and gesture responsiveness.

71. How do you prevent UI thread blocking in React Native?
    Answer:Blocking the UI thread causes janky interactions. Solutions include:

- Offload heavy computations to the native side (using TurboModules or JSI).
- Use Background threads (e.g., WorkManager for Android).
- Use InteractionManager to defer operations until after animations.
- Batch state updates to minimize renders.
- Optimize FlatLists with proper keyExtractor and getItemLayout.

72. How do you optimize startup time in a React Native app?
    Answer:Faster startup improves user retention. Key strategies:

- Reduce bundle size by tree-shaking unused dependencies.
- Lazy load screens using React.lazy and Suspense.
- Use Hermes engine for faster JS parsing.
- Avoid expensive operations in componentDidMount.
- Use a splash screen to preload essential assets.

73. How do you handle offline mode in a React Native app?
    Answer:Ensuring smooth offline functionality is crucial. Key techniques:

- Use NetInfo to detect connectivity changes.
- Cache data with AsyncStorage, MMKV, or SQLite for offline access.
- Use Redux Persist to maintain state between sessions.
- Enable offline syncing with Apollo Client or WatermelonDB for large datasets.
- Implement optimistic UI updates to enhance UX.

74. How do you handle deep linking in React Native?
    Answer:Deep linking allows users to open specific screens via a URL.

- Use react-navigation with linking configuration.
- Use Branch.io or Firebase Dynamic Links for advanced deep linking.
- Handle universal links (iOS) and app links (Android) for better UX.
- Test with npx uri-scheme open myapp://profile/123.

75. How do you ensure security in a React Native app?
    Answer:Security best practices include:

- Store sensitive data securely using SecureStore (iOS) or EncryptedStorage (Android).
- Use HTTPS and SSL Pinning to prevent MITM attacks.
- Enable Two-Factor Authentication (2FA) for login.
- Use Code Obfuscation to prevent reverse engineering.
- Restrict WebView usage to trusted sources.

76. What are the key differences between Hermes and JavaScriptCore (JSC)?
    Feature Hermes JavaScriptCore (JSC)
    Startup Time Faster Slower
    Bundle Size Smaller Larger
    Memory Usage Lower Higher
    Debugging Uses Metro Debugger Standard React Debugger
    Garbage Collection Optimized for React Native Standard
    Hermes is recommended for faster execution and smaller app sizes, especially on Android.

77. How do you implement biometric authentication in React Native?
    Answer:Biometric authentication (Face ID, Touch ID) enhances security.

- Use react-native-biometrics for fingerprint and facial recognition.
- For iOS, enable Face ID in Info.plist.
- For Android, configure fingerprint authentication in AndroidManifest.xml.
- Securely store authentication tokens using EncryptedStorage.

78. How do you optimize animations in React Native?
    Answer:Animations should be GPU-accelerated for smooth performance.

- Use Reanimated 2 for native-driven animations.
- Avoid Animated API for complex animations (causes frame drops).
- Use requestAnimationFrame for precise timing.
- Profile animations using Flipper's performance tools.

79. How do you handle multiple app environments (dev, staging, production) in React Native?
    Answer:Managing environments avoids misconfigurations.

- Use .env files with react-native-config.
- Set up different Firebase/Google services JSON files.
- Configure app flavors in android/app/build.gradle.
- Use Xcode schemes for switching environments in iOS.

80. How do you implement drag-and-drop functionality in React Native?
    Answer:Drag-and-drop enhances UX for interactive elements.

- Use react-native-draggable-flatlist for list reordering.
- Use react-native-gesture-handler for custom gestures.
- Ensure smooth animations using Reanimated.
- Handle accessibility for keyboard users when implementing drag-and-drop.

81. How does React Native handle accessibility?
    Answer:Accessibility ensures inclusivity for all users.

- Use accessible={true} on important elements.
- Provide accessibilityLabel for screen readers.
- Use VoiceOver (iOS) and TalkBack (Android) to test.
- Ensure touch targets are at least 48x48dp for better usability.

82. How do you handle large media files in React Native?
    Answer:

- Use react-native-fast-image for optimized image loading.
- Compress videos before uploading using react-native-video-processing.
- Stream large files instead of loading them in memory.
- Use caching to avoid re-downloading media.

83. What is the best way to implement code splitting in React Native?
    Answer:Code splitting reduces the initial load time.

- Use dynamic imports (import()) for lazy loading components.
- Use React.lazy and Suspense.
- Split large dependencies using Metro Bundler’s getModules() API.
- Analyze bundle size with source-map-explorer.

84. How do you improve React Native app performance on low-end devices?
    Answer:

- Reduce re-renders by using React.memo and useCallback.
- Optimize navigation stack with native stack.
- Use Hermes engine for lower memory consumption.
- Load images asynchronously to prevent UI lag.
- Use VirtualizedLists instead of ScrollView for large datasets.

85. How do you integrate Augmented Reality (AR) in a React Native app?
    Answer:AR in React Native can be implemented using:

- react-native-arkit for iOS (ARKit).
- react-native-viro for cross-platform AR/VR.
- WebAR using three.js for browser-based AR.
- Use plane detection and object tracking for realistic AR scenes.
