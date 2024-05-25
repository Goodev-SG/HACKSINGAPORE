interface Data {
  imageSrc: string;
  title: string;
  news: string;
  date: string;
  time: string;
  width: string;
  height: string;
}
export default function NewsCard({
  imageSrc,
  title,
  news,
  date,
  time,
  width,
  height,
}: Data) {
  return (
    <div
      className={`flex flex-row w-full ${height} gap-5 border rounded-xl overflow-hidden mb-5`}
    >
      <img className={`w-${width}`} src={imageSrc}></img>
      <div className="flex flex-col gap-5 p-3">
        <h1
          className={`font-medium ${
            width === "2/6" ? "text-base" : "text-3xl"
          }`}
        >
          {title}
        </h1>
        <p
          className={`text-gray-600 font-medium ${
            width === "2/6" ? "text-xs" : "text-base"
          }`}
        >
          {news}
        </p>
        <div className="flex flex-row gap-5 ">
          <p
            className={`text-gray-600 font-medium ${
              width === "2/6" ? "text-xs" : "text-base"
            }`}
          >
            {time}
          </p>
          <p
            className={`text-gray-600 font-medium ${
              width === "2/6" ? "text-xs" : "text-base"
            }`}
          >
            {date}
          </p>
        </div>
      </div>
    </div>
  );
}
