interface CardDetail {
  title: string;
  data: string;
  dataColor: string;
  describtion?: string;
  describtionData?: string;
  width: string;
  height: string;
}
export default function CardX({
  title,
  data,
  dataColor,
  describtion,
  describtionData,
  width,
  height,
}: CardDetail) {
  return (
    <div
      className={`flex flex-col border rounded-lg p-3 gap-4 shadow-lg justify-center ${width}  ${height}`}
    >
      <h3 className="font-medium text-lg">{title}</h3>
      {dataColor === "green" ? (
        <p className="font-medium text-3xl text-green-600">{data}</p>
      ) : (
        <p className="font-medium text-3xl text-red-600">{data}</p>
      )}
      <p className="text-gray-500">{describtion}</p>
      <p className="text-red-600 text-2xl font-semibold">{describtionData}</p>
    </div>
  );
}
