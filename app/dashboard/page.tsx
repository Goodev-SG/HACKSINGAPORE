"use client";
import CardX from "@/components/card";
import LineChart from "@/components/linechart";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-10 px-[10%] py-10">
      <div className="flex flex-row gap-5">
        <CardX
          title="Saving"
          data="S$4,355,355"
          dataColor="green"
          describtion="+20% month over month"
          width="w-4/12"
          height="h-40"
        />
        <CardX
          title="Monthly Income"
          data="+S$7,355"
          dataColor="green"
          describtion="+20% month over month"
          width="w-4/12"
          height="h-40"
        />
        <CardX
          title="Monthly Expense"
          data="-S$3,466"
          dataColor="red"
          describtion="-20% month over month"
          width="w-4/12"
          height="h-40"
        />
      </div>
      <div className="flex flex-row gap-5">
        <div className="w-8/12">
          <LineChart />
        </div>
        <div className="grid grid-cols-2 w-4/12 gap-5">
          <CardX
            title="GST rate %"
            data="9%"
            dataColor="red"
            describtion="+1% than last year"
            width="w-full"
            height=""
          />
          <CardX
            title="Income Tax %"
            data="12%"
            dataColor="red"
            describtion="+1% than last year"
            width="w-full"
            height=""
          />
          <div className="col-span-2">
            <CardX
              title="Portfolio Value (est.)"
              data="+S$323,040,242"
              dataColor="green"
              describtion="Monthly Investment"
              describtionData="-S$3,000"
              width="w-[100%]"
              height="h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
