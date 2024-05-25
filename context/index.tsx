"use client";

import { ReactNode, createContext, useContext, useState } from "react";

interface user {
  uid: string;
  age: number | undefined;
  bill: number | undefined;
  expense: number | undefined;
  income: number | undefined;
  investment: number | undefined;
  retireAge: number | undefined;
  wallet: number | undefined;
}

const userContextDefaultValues: user = {
  uid: "asdf",
  age: 10,
  bill: 10,
  expense: 10,
  income: 10,
  investment: 10,
  retireAge: 10,
  wallet: 10,
};
const userContext = createContext<user>(userContextDefaultValues);

export function useUserData() {
  return useContext(userContext);
}

export function UserProvider({ children }: { children: ReactNode }) {
  const [userData, setUserData] = useState<user>({
    uid: "asdf",
    age: 10,
    bill: 10,
    expense: 10,
    income: 10,
    investment: 10,
    retireAge: 10,
    wallet: 10,
  });

  return (
    <userContext.Provider value={userData}>{children}</userContext.Provider>
  );
}
