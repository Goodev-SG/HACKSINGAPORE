"use client";

import CardX from "@/components/card";
import { useUserData } from "@/context";
import Image from "next/image";

const Dashboard = () => {
  const userData = useUserData();
  return (
    <div className="px-20 py-5 flex flex-row gap-5">
      <CardX
        title="Saving"
        data={userData ? userData.uid : "undefined"}
        dataColor="green"
        describtion="+20% month over month"
      />
      <CardX
        title="Monthly Income"
        data="+S$7,355"
        dataColor="green"
        describtion="+20% month over month"
      />
      <CardX
        title="Monthly Expense"
        data="-S$3,466"
        dataColor="red"
        describtion="-20% month over month"
      />
    </div>
  );
};

export default Dashboard;
