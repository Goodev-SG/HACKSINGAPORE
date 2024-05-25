// "use client";

// import {
//   ReactNode,
//   createContext,
//   useContext,
//   useEffect,
//   useState,
// } from "react";
// import { useAuth } from "@clerk/nextjs";
// import { db } from "@/lib/firebase";
// import { doc, getDoc, setDoc } from "firebase/firestore";

// interface user {
//   uid: string;
//   age: number | undefined;
//   bill: number | undefined;
//   expense: number | undefined;
//   income: number | undefined;
//   investment: number | undefined;
//   retireAge: number | undefined;
//   wallet: number | undefined;
// }

// const userContextDefaultValues: user = {
//   uid: "asdf",
//   age: 10,
//   bill: 10,
//   expense: 10,
//   income: 10,
//   investment: 10,
//   retireAge: 10,
//   wallet: 10,
// };
// const userContext = createContext<user>(userContextDefaultValues);

// export function useUserData() {
//   return useContext(userContext);
// }

// export function UserProvider({ children }: { children: ReactNode }) {
//   const [isSignedIn, setIsSignedIn] = useState(useAuth().isSignedIn);
//   const [userData, setUserData] = useState<user>({
//     uid: "asdf",
//     age: 10,
//     bill: 10,
//     expense: 10,
//     income: 10,
//     investment: 10,
//     retireAge: 10,
//     wallet: 10,
//   });

//   useEffect(() => {
//     console.log("Auth Changed!");
//     const getUserData = async () => {
//       if (isSignedIn) {
//         const userRef = doc(db, "users", useAuth().user.id); // Use user ID
//         const docSnap = await getDoc(userRef);

//         if (docSnap.exists()) {
//           setUserData(docSnap.data() as User); // Update context with existing data
//         } else {
//           // Create new document with default values
//           await setDoc(userRef, userContextDefaultValues);
//           setUserData(userContextDefaultValues);
//         }
//       }
//     };
//     getUserData();
//   }, [isSignedIn]);

//   return (
//     <userContext.Provider value={userData}>{children}</userContext.Provider>
//   );
// }

// // const getFirestoreData = async () => {
// //   const docRef = doc(db, "user", "ZbiOzsnFXnCLBLVlMVwd");
// //   const docSnap = await getDoc(docRef);
// //   if (docSnap.exists()) {
// //     console.log("Document data:", docSnap.data());
// //   } else {
// //     // docSnap.data() will be undefined in this case
// //     console.log("No such document!");
// //   }
// // };

"use client";

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useAuth } from "@clerk/nextjs";
import { db } from "@/lib/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

interface User {
  uid: string;
  age: number;
  expense: number;
  income: number;
  investment: number;
  retireAge: number;
  wallet: number;
  saving: number;
  monthlyDeposit: number;
}

const userContextDefaultValues: User = {
  uid: "default",
  age: 0,
  expense: 0,
  income: 0,
  investment: 0,
  retireAge: 0,
  wallet: 0,
  saving: 0,
  monthlyDeposit: 0,
};

const UserContext = createContext<User>(userContextDefaultValues);

export function useUserData() {
  return useContext(UserContext);
}

export function UserProvider({ children }: { children: ReactNode }) {
  const { userId } = useAuth();
  const [userData, setUserData] = useState<User>(userContextDefaultValues);

  useEffect(() => {
    const fetchOrCreateUserData = async () => {
      if (!userId) return;

      const userDocRef = doc(db, "users", userId);
      const userDoc = await getDoc(userDocRef);

      if (!userDoc.exists()) {
        const newUser: User = {
          uid: userId,
          age: 0,
          expense: 0,
          income: 0,
          investment: 0,
          retireAge: 0,
          wallet: 0,
          saving: 0,
          monthlyDeposit: 0,
        };

        await setDoc(userDocRef, newUser);
        setUserData(newUser);
      } else {
        setUserData(userDoc.data() as User);
      }
    };

    fetchOrCreateUserData();
  }, [userId]);

  return (
    <UserContext.Provider value={userData}>{children}</UserContext.Provider>
  );
}
