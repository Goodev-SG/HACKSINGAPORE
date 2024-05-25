"use client";
import CarouselX from "@/components/carousel";
import LineChart from "@/components/linechart";
import ScrollAreaDemo from "@/components/scrollarea";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import NewsCard from "@/components/ui/newsCard";

export default function News() {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-3xl font-extrabold">Latest News</h1>
      <CarouselX />
      <Separator className="my-10" />
      <div className="flex flex-row gap-5">
        <LineChart title="Approximate rate of property price $" width="w-4/6" />
        <ScrollAreaDemo
          title="Latest News about properties"
          width="w-full"
          height=""
        />
      </div>
      <h1 className="font-bold text-xl mt-10">Market News</h1>
      <div className="flex flex-row gap-5">
        <ScrollArea className="border p-5 rounded-xl shadow-xl w-5/6">
          <NewsCard
            width="2/6"
            height="h-52"
            imageSrc="cna_news.avif"
            title="Edge buffet restaurant at Pan Pacific Hotel suspended after 16 diners fall ill"
            news="The Health Ministry and the Singapore Food Agency are investigating six incidents of gastroenteritis, with 16 people falling ill after eating food prepared by Edge restaurant between May 2 and May 18."
            date="12 May 2024"
            time="10:10 PM"
          />
          <NewsCard
            width="2/6"
            height="h-52"
            imageSrc="cna_news.avif"
            title="Edge buffet restaurant at Pan Pacific Hotel suspended after 16 diners fall ill"
            news="The Health Ministry and the Singapore Food Agency are investigating six incidents of gastroenteritis, with 16 people falling ill after eating food prepared by Edge restaurant between May 2 and May 18."
            date="12 May 2024"
            time="10:10 PM"
          />
          <NewsCard
            width="2/6"
            height="h-52"
            imageSrc="p.avif"
            title="Edge buffet restaurant at Pan Pacific Hotel suspended after 16 diners fall ill"
            news="The Health Ministry and the Singapore Food Agency are investigating six incidents of gastroenteritis, with 16 people falling ill after eating food prepared by Edge restaurant between May 2 and May 18."
            date="12 May 2024"
            time="10:10 PM"
          />
        </ScrollArea>
        <LineChart title="Prediction $" width="w-4/6" />
      </div>
      <h1 className="font-bold text-xl mt-10">General News</h1>
      <ScrollArea className="border p-5 rounded-xl shadow-xl ">
        <NewsCard
          width="full"
          height="h-72"
          imageSrc="cna_news.avif"
          title="Edge buffet restaurant at Pan Pacific Hotel suspended after 16 diners fall ill"
          news="The Health Ministry and the Singapore Food Agency are investigating six incidents of gastroenteritis, with 16 people falling ill after eating food prepared by Edge restaurant between May 2 and May 18."
          date="12 May 2024"
          time="10:10 PM"
        />
        <NewsCard
          width="full"
          height="h-72"
          imageSrc="cna_news.avif"
          title="Edge buffet restaurant at Pan Pacific Hotel suspended after 16 diners fall ill"
          news="The Health Ministry and the Singapore Food Agency are investigating six incidents of gastroenteritis, with 16 people falling ill after eating food prepared by Edge restaurant between May 2 and May 18."
          date="12 May 2024"
          time="10:10 PM"
        />
        <NewsCard
          width="full"
          height="h-72"
          imageSrc="cna_news.avif"
          title="Edge buffet restaurant at Pan Pacific Hotel suspended after 16 diners fall ill"
          news="The Health Ministry and the Singapore Food Agency are investigating six incidents of gastroenteritis, with 16 people falling ill after eating food prepared by Edge restaurant between May 2 and May 18."
          date="12 May 2024"
          time="10:10 PM"
        />
      </ScrollArea>
    </div>
  );
}
