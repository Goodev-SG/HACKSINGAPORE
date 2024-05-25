import * as React from "react";

import { ScrollArea } from "@/components/ui/scroll-area";

const plans = [
  {
    title: "Health Care",
    price: "-S$300",
  },
  {
    title: "Retirement Investment",
    price: "-S$3000",
  },
  {
    title: "Car Insurance",
    price: "-S$1000",
  },
];
const plan = plans.map((data) => data);

interface Data {
  title: string;
  width: string;
  height: string;
}

export default function ScrollAreaDemo({ title, width, height }: Data) {
  return (
    <ScrollArea className={`${width} ${height} border rounded-xl shadow-xl`}>
      <div className="p-5">
        <h4 className="mb-4 text-lg font-semibold leading-none">{title}</h4>
        {plan.map((plan) => (
          <div className="border mb-3 p-3 rounded-lg h-24">
            <h4 className="text-md mb-3 font-medium">{plan.title}</h4>
            <p className="text-xl text-red-600 font-semibold">{plan.price}</p>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
