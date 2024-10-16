import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { appleAuth } from '@invertase/react-native-apple-authentication';

// Initialize Google Sign-In
GoogleSignin.configure({
  webClientId:
    '698645867401-asiavnhvlv748t836dlkftm1hs7jdrhp.apps.googleusercontent.com', // Replace with your Web Client ID
});

// Types
export type UserCredential = FirebaseAuthTypes.UserCredential;

// Email sign-in
const signInWithEmail = async (
  email: string,
  password: string
): Promise<UserCredential> => {
  return auth().signInWithEmailAndPassword(email, password);
};

// Google Sign-In
const signInWithGoogle = async (): Promise<UserCredential> => {
  const { idToken } = await GoogleSignin.signIn();
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  return auth().signInWithCredential(googleCredential);
};

// Apple Sign-In
const signInWithApple = async (): Promise<UserCredential> => {
  const appleAuthRequestResponse = await appleAuth.performRequest({
    requestedOperation: appleAuth.Operation.LOGIN,
    requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
  });
  const { identityToken, nonce } = appleAuthRequestResponse;
  const appleCredential = auth.AppleAuthProvider.credential(
    identityToken,
    nonce
  );
  return auth().signInWithCredential(appleCredential);
};

// Sign Out
const signOut = async (): Promise<void> => {
  return auth().signOut();
};

// Observe user state
const onAuthStateChanged = (
  callback: (user: FirebaseAuthTypes.User | null) => void
): (() => void) => {
  return auth().onAuthStateChanged(callback);
};

export const AuthService: any = {
  signInWithEmail,
  signInWithApple,
  signInWithGoogle,
  signOut,
  onAuthStateChanged,
};
