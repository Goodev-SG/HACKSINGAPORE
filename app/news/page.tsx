"use client";
import LineChart from "@/components/linechart";
import ScrollAreaDemo from "@/components/scrollarea";

export default function News() {
  return (
    <div>
      <div className="flex flex-row gap-5">
        <LineChart
          title="Approximate rate of property price $"
          width="w-full"
        />
        <ScrollAreaDemo title="Latest News" width="w-full" height="h-3/4" />
      </div>
    </div>
  );
}
