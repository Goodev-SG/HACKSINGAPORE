import CardX from "@/components/card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="px-20 py-5 flex flex-row gap-5">
      <CardX
        title="Saving"
        data="S$4,355,355"
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
}
