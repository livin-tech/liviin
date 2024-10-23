import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import appleAuth from '@invertase/react-native-apple-authentication';
// import { useRouter } from 'expo-router';
import { api } from '@/src/services';
import { Alert } from 'react-native';
// import { User } from '@/services/types';

GoogleSignin.configure({
  webClientId:
    '518935595191-gkmb50q93bta9tu4hilho1ccl8dkqc56.apps.googleusercontent.com',
});

// https://liviin-36465.firebaseapp.com/__/auth/handler

interface AuthContextType {
  // user: User | null;
  user: any;
  idToken: string | null;
  showQuestionnaire: boolean;
  showBmiQuestions: boolean;
  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  loginWithApple: () => Promise<void>;
  register: (
    email: string,
    password: string,
    newUser: Partial<User>
  ) => Promise<void>;
  logout: () => Promise<void>;
  refreshIdToken: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  deleteAccount: () => Promise<void>;
  changePassword: (newPassword: string) => Promise<void>;
  setShowQuestionnaire: (value: boolean) => void;
  setShowBmiQuestions: (value: boolean) => void;
  isLogged: boolean;
  registerWithEmail: (data: RegisterFormData) => void;
  handleUserRegistration: (
    user: FirebaseAuthTypes.UserCredential,
    token: string
  ) => void;
  isRegistering: boolean;
  // fetchUser: () => Promise<User>;
  fetchUser: () => Promise<any>;
  getUser: () => Promise<void>;
  resendConfirmationEmail: () => Promise<void>;
  firebaseUser: FirebaseAuthTypes.User | null;
  refreshAuthState: () => Promise<void>;
  confirmPassword: (oobCode: string, password: string) => Promise<void>;
}

type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const defaultAuthContextValue: AuthContextType = {
  user: null,
  idToken: null,
  showQuestionnaire: false,
  showBmiQuestions: false,
  isLogged: false,
  login: async () => {},
  loginWithGoogle: async () => {},
  loginWithApple: async () => {},
  register: async () => {},
  logout: async () => {},
  refreshIdToken: async () => {},
  resetPassword: async () => {},
  deleteAccount: async () => {},
  changePassword: async () => {},
  confirmPassword: async () => {},
  setShowQuestionnaire: () => {},
  setShowBmiQuestions: () => {},
  registerWithEmail: async () => Promise<any>,
  handleUserRegistration: async () => {},
  isRegistering: false,
  // fetchUser: async () => ({}) as User,
  fetchUser: async () => ({} as any),
  resendConfirmationEmail: async () => {},
  firebaseUser: null,
  refreshAuthState: async () => {},
  getUser: async () => {},
};

const AuthContext = createContext<AuthContextType>(defaultAuthContextValue);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isRegistering, setIsRegistering] = useState(true);
  // const [user, setUser] = useState<User | null>(null);
  const [user, setUser] = useState<any>(null);
  const [firebaseUser, setFirebaseUser] =
    useState<FirebaseAuthTypes.User | null>(null);
  const [idToken, setIdToken] = useState<string | null>(null);
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);
  const [showBmiQuestions, setShowBmiQuestions] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  //   const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(async (fbUser) => {
      console.log('Auth state changed', fbUser?.displayName);
      setIsRegistering(true);

      if (fbUser) {
        if (!fbUser.emailVerified) {
          console.log('Not logged in due to unverified email');
        } else {
          const token = await fbUser.getIdToken();
          const providers = fbUser.providerData.map(
            (provider) => provider.providerId
          );
          const isAuthLogin =
            providers.includes('google.com') || providers.includes('apple.com');
          let userProfile = null;

          api.setToken(token);

          try {
            console.log('Fetching user profile');
            // userProfile = await api.get<User>("/profile");
          } catch (e) {
            console.error('User dont exist - Trying Register first');
          }

          if (isAuthLogin && !userProfile) {
            await handleUserRegistration({ user: fbUser }, token);
            console.log('User registered');
          }

          try {
            if (!userProfile) {
              console.log('Trying to fetch user again');
              //   userProfile = await api.get<User>("/profile");
            }
          } catch (e) {
            console.error('Error fetching user after firebase:', e);
          }

          if (userProfile) {
            setIdToken(token);
            setIsLogged(true);
            setUser(userProfile);
          }
        }

        setFirebaseUser(fbUser);
        setIsRegistering(() => false);
      } else {
        console.log('No user is signed in.');
        setFirebaseUser(null);
        setIdToken(null);
        setIsLogged(false);
        setShowQuestionnaire(false);
        setUser(null);
        setIsRegistering(() => false);
      }
    });
    return unsubscribe;
  }, []);

  //   useEffect(() => {
  //     if(isLogged) {
  //   router.replace('/');
  //     } else {
  //       while (router.canGoBack()) {
  //         router.back();
  //       }
  //       router.replace('/landing');
  //     }
  //   }, [isLogged]);

  const fetchUser = async (token?: string) => {
    // api.setAuthToken(() => token || idToken);
    // return api.get<User>("/profile");
  };

  const getUser = async () => {
    // const user = await fetchUser();
    // setUser(user);
  };

  //   useEffect(() => {
  //     const intervalId = setInterval(() => {
  //       refreshIdToken();
  //     }, 10 * 60 * 1000);

  //     return () => clearInterval(intervalId);
  //   }, [user]);

  // const handleUserRegistration = async (
  //   userCredential: FirebaseAuthTypes.UserCredential,
  //   token: string
  // ) => {
  //   try {
  //     const user: Partial<any> = {
  //       email: userCredential.user.email || '',
  //       phoneNumber: userCredential.user.phoneNumber || '',
  //       photoURL: userCredential.user.photoURL || '',
  //       name: userCredential?.user?.displayName || userCredential?.additionalUserInfo?.username || `User-${Date.now()}`
  //     }
  //     await api.post('/profile/signup', user);
  //     setShowBmiQuestions(true);
  //   } catch (error) {
  //     console.error("Error creating user:", error);
  //     throw error;
  //   }
  // };

  // Done
  const registerWithEmail = async (
    data: RegisterFormData
  ): Promise<void> => {
    const { firstName, lastName, email, password } = data;

    try {
      const userCredential: FirebaseAuthTypes.UserCredential =
        await auth().createUserWithEmailAndPassword(email, password);

      const user = userCredential.user;
      const idToken = await user.getIdToken(); // Firebase ID Token

      // await setIdToken(idToken)
      await api.setAuthToken(() => idToken);

      const userData = {
        firstName,
        lastName,
        email: user.email,
        firebaseID: user.uid, // Firebase UID
      };

      await api.post('/users', userData);
  
    } catch (error) {
      console.error('Error during registration:', error);
      throw error;
    }
  };

  // Done
  const login = async (email: string, password: string) => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
  
      // If the login is successful, proceed with reloading the user
      if (auth().currentUser) {
        await auth().currentUser?.reload();
        const updatedUser = auth().currentUser;
  
        const token = await updatedUser?.getIdToken();
        const uid = updatedUser?.uid;

        const user = await api.getById('users', uid);
        await setUser(user)
  
        setFirebaseUser(updatedUser);
        setIdToken(token);
        setIsLogged(true);
      }
    } catch (error: any) {
      // Handle specific Firebase authentication errors
      if (error.code === 'auth/wrong-password') {
        console.error('Incorrect password.');
        throw new Error('Incorrect password. Please try again.');
      } else if (error.code === 'auth/user-not-found') {
        console.error('User not found.');
        throw new Error('No user found with this email. Please check the email address.');
      } else if (error.code === 'auth/invalid-email') {
        console.error('Invalid email format.');
        throw new Error('Invalid email format. Please enter a valid email.');
      } else {
        console.error('Login error:', error);
        throw new Error('Failed to login. Please try again.');
      }
    }
  };

  /**
   * Calls /signup with { email, displayName }
   */
  const loginWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const googleCredential = auth.GoogleAuthProvider.credential(
        (await GoogleSignin.signIn()).idToken
      );
      console.log({ googleCredential });
      await auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.error('Google login error:', error);
      throw error;
    }
  };

  const loginWithApple = async () => {
    setIsRegistering(true);
    try {
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
      });

      if (!appleAuthRequestResponse.identityToken) {
        throw new Error('Apple Sign-In failed - no identity token returned');
      }

      const { identityToken, nonce } = appleAuthRequestResponse;

      const appleCredential = auth.AppleAuthProvider.credential(
        identityToken,
        nonce
      );
      await auth().signInWithCredential(appleCredential);
    } catch (error) {
      console.error('Apple login error:', error);
      setIsRegistering(false);
      throw error;
    }
  };

  /**
   * Calls /signup with { firstName, address, city, cap, email, password }
   */
  const register = async (
    email: string,
    password: string,
    newUser: Partial<any>
  ) => {
    try {
      setIsRegistering(true);

      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        password
      );

      const token = await userCredential.user.getIdToken();

      //   await api.setAuthToken(() => token);

      //   await api.post('/profile/signup', {
      //     ...newUser,
      //     phoneNumber: auth().currentUser?.phoneNumber || '',
      //     photoURL: auth().currentUser?.photoURL || '',
      //   });

      await userCredential.user.sendEmailVerification();
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    } finally {
      setIsRegistering(false);
    }
  };

  const logout = async () => {
    try {
      if (firebaseUser) {
        await auth().signOut();
      }
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const refreshIdToken = async () => {
    if (firebaseUser) {
      try {
        const token = await firebaseUser.getIdToken(true);
        setIdToken(token);
        console.log('ID Token refreshed');
      } catch (error) {
        console.error('Failed to refresh ID Token:', error);
      }
    } else {
      console.log('Unable to refresh ID token - no user is logged in');
    }
  };

  const resetPassword = async (email: string) => {
    try {
      await auth().sendPasswordResetEmail(email);
      console.log('Password reset email sent');
    } catch (error) {
      console.error('Failed to send password reset email:', error);
      throw error;
    }
  };

  const deleteAccount = async () => {
    if (firebaseUser) {
      try {
        await firebaseUser.delete();
        console.log('Account deleted');
      } catch (error) {
        console.error('Failed to delete account:', error);
        throw error;
      }
    }
  };

  const changePassword = async (newPassword: string) => {
    if (firebaseUser) {
      try {
        await firebaseUser.updatePassword(newPassword);
      } catch (error) {
        console.error('Failed to change password:', error);
        throw error;
      }
    }
  };

  const resendConfirmationEmail = async () => {
    if (firebaseUser) {
      try {
        await firebaseUser.sendEmailVerification();
      } catch (error) {
        console.error('Failed to resend confirmation email:', error);
        throw error;
      }
    }
  };

  const confirmPassword = async (oobCode: string, password: string) => {
    try {
      await auth().confirmPasswordReset(oobCode, password);
    } catch (error) {
      console.log((error as Error).message);
      throw error;
    }
  };

  const refreshAuthState = async () => {
    const user = auth().currentUser;

    if (user) {
      try {
        await user.reload();
        const updatedUser = auth().currentUser;

        if (updatedUser?.emailVerified) {
          console.log('Email is verified.');
          const token = await updatedUser.getIdToken();
          //   const user = await api.get<User>("/profile");
          setFirebaseUser(updatedUser);
          setIdToken(token);
          setIsLogged(true);
          //   setUser(user);
        } else {
          console.log('Email is still not verified.');
          Alert.alert('Email non verificata', "Verificare l'indirizzo email.");
        }
      } catch (error) {
        console.error('Error fetching after email verification:', error);
        Alert.alert('Impossibile effettuare il login', 'Riprova più tardi.');
      }
    } else {
      console.log('No user is currently signed in.');
    }
  };

  return (
    <AuthContext.Provider
      value={{
        changePassword,
        confirmPassword,
        deleteAccount,
        firebaseUser,
        fetchUser,
        getUser,
        // handleUserRegistration,
        registerWithEmail,
        idToken,
        isLogged,
        isRegistering,
        login,
        loginWithApple,
        loginWithGoogle,
        logout,
        refreshAuthState,
        refreshIdToken,
        register,
        resendConfirmationEmail,
        resetPassword,
        setShowBmiQuestions,
        setShowQuestionnaire,
        showBmiQuestions,
        showQuestionnaire,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
