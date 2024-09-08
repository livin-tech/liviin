// import auth from '@react-native-firebase/auth';
// import React, { createContext, useContext, useEffect, useState } from 'react';

// // Create a context to hold the user state
// const AuthContext = createContext(null);

// // Create a provider component
// export const AuthProvider = ({ children }) => {
//   const [initializing, setInitializing] = useState(true);
//   const [user, setUser] = useState(null);

//   // Handle user state changes
//   const onAuthStateChanged = (user) => {
//     setUser(user);
//     if (initializing) setInitializing(false);
//   };

//   useEffect(() => {
//     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber; 
//   }, []);

//   if (initializing) {
//     return null; 
//   }

//   return (
//     <AuthContext.Provider value={{ user }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);