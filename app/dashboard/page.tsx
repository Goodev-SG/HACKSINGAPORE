"use client";

import CardX from "@/components/card";
import LineChart from "@/components/linechart";
import ScrollAreaDemo from "@/components/scrollarea";
import { useUserData } from "@/context";
import { useAuth } from "@clerk/nextjs";

const Dashboard = () => {
  const userData = useUserData();
  console.log(userData);

  const profitCalculator = (
    investment: number,
    monthlyDeposit: number,
    retireAge: number,
    age: number
  ) => {
    return (
      investment +
      (retireAge - age) * monthlyDeposit * 12 * 2
    ).toString();
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-row gap-5">
        <CardX
          title="Saving"
          data={
            "S$" +
            (userData.saving?.toString() ? userData.saving?.toString() : "0.00")
          }
          dataColor="green"
          description="+20% month over month"
          width="w-4/12"
          height="h-40"
        />
        <CardX
          title="Monthly Income"
          data={
            "S$" +
            (userData.income?.toString() ? userData.income?.toString() : "0.00")
          }
          dataColor="green"
          description="+20% month over month"
          width="w-4/12"
          height="h-40"
        />
        <CardX
          title="Monthly Expense"
          data={
            "S$" +
            (userData.expense?.toString()
              ? userData.expense?.toString()
              : "0.00")
          }
          dataColor="red"
          description="-20% month over month"
          width="w-4/12"
          height="h-40"
        />
      </div>
      <div className="flex flex-row gap-5">
        <div className="w-8/12">
          <LineChart title="Rate of inflation %" width="w-full" />
        </div>
        <div className="grid grid-cols-2 w-4/12 gap-5">
          <CardX
            title="GST rate %"
            data="9%"
            dataColor="red"
            description="+1% than last year"
            width="w-full"
            height=""
          />
          <CardX
            title="Income Tax %"
            data="12%"
            dataColor="red"
            description="+1% than last year"
            width="w-full"
            height=""
          />
          <div className="col-span-2">
            <CardX
              title="Portfolio Value (est.)"
              data={profitCalculator(
                userData.investment,
                userData.monthlyDeposit,
                userData.retireAge,
                userData.age
              )}
              dataColor="green"
              description="Monthly Investment"
              descriptionData={
                "-S$" +
                (userData.monthlyDeposit?.toString()
                  ? userData.monthlyDeposit?.toString()
                  : "0.00")
              }
              width="w-[100%]"
              height="h-full"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-5">
        <ScrollAreaDemo width="w-96" height="h-3/4" title="Active Plans" />
        <ScrollAreaDemo width="w-3/4" height="h-3/4" title="Latest News" />
      </div>
    </div>
  );
};

export default Dashboard;
