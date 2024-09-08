// import auth from '@react-native-firebase/auth';

// // Sign-up with Email and Password
// export const signUpWithEmail = async (email: string, password: string) => {
//   try {
//     const userCredential = await auth().createUserWithEmailAndPassword(email, password);
//     console.log('User account created & signed in!');
//     return userCredential;
//   } catch (error: any) {
//     console.error('Error signing up with email:', error);
//   }
// };

// // Login with Email and Password
// export const loginWithEmail = async (email: string, password: string) => {
//   try {
//     const userCredential = await auth().signInWithEmailAndPassword(email, password);
//     console.log('User signed in!');
//     return userCredential;
//   } catch (error: any) {
//     console.error('Error logging in with email:', error);
//   }
// };

// // Sign out
// export const signOut = async () => {
//   try {
//     await auth().signOut();
//     console.log('User signed out!');
//   } catch (error) {
//     console.error('Error signing out:', error);
//   }
// };

// // Sign in with Apple
// export const signInWithApple = async () => {
//   try {
//     console.log('User signed in with Apple!');
//   } catch (error) {
//     console.error('Error signing in with Apple:', error);
//   }
// };

// // Sign in with Google
// export const signInWithGoogle = async () => {
//   try {
//     console.log('User signed in with Google!');
//   } catch (error) {
//     console.error('Error signing in with Apple:', error);
//   }
// };