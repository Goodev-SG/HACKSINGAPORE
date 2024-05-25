import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import NewsCard from "./ui/newsCard";
import Autoplay from "embla-carousel-autoplay";

export default function CarouselX() {
  return (
    <div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem>
            <NewsCard
              width="w-full"
              height="h-72"
              imageSrc="cna_news.avif"
              title="Edge buffet restaurant at Pan Pacific Hotel suspended after 16 diners fall ill"
              news="The Health Ministry and the Singapore Food Agency are investigating six incidents of gastroenteritis, with 16 people falling ill after eating food prepared by Edge restaurant between May 2 and May 18."
              date="12 May 2024"
              time="10:10 PM"
            />
          </CarouselItem>
          <CarouselItem>
            <NewsCard
              width="w-full"
              height="h-72"
              imageSrc="cna_news.avif"
              title="Edge buffet restaurant at Pan Pacific Hotel suspended after 16 diners fall ill"
              news="The Health Ministry and the Singapore Food Agency are investigating six incidents of gastroenteritis, with 16 people falling ill after eating food prepared by Edge restaurant between May 2 and May 18."
              date="12 May 2024"
              time="10:10 PM"
            />
          </CarouselItem>
          <CarouselItem>
            <NewsCard
              width="w-full"
              height="h-72"
              imageSrc="cna_news.avif"
              title="Edge buffet restaurant at Pan Pacific Hotel suspended after 16 diners fall ill"
              news="The Health Ministry and the Singapore Food Agency are investigating six incidents of gastroenteritis, with 16 people falling ill after eating food prepared by Edge restaurant between May 2 and May 18."
              date="12 May 2024"
              time="10:10 PM"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}
