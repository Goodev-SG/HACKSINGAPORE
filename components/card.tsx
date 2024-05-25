interface CardDetail {
  title: string;
  data: string;
  dataColor: string;
  describtion: string;
}
export default function CardX({
  title,
  data,
  dataColor,
  describtion,
}: CardDetail) {
  return (
    <div className="flex flex-col border rounded-lg w-4/12 h-40 p-3 gap-4 shadow-lg">
      <h3 className="font-medium text-lg">{title}</h3>
      {dataColor === "green" ? (
        <p className="font-medium text-3xl text-green-600">{data}</p>
      ) : (
        <p className="font-medium text-3xl text-red-600">{data}</p>
      )}
      <p className="text-gray-500">{describtion}</p>
    </div>
  );
}
