const Card = ({title,number,color}) => {
    const colors = {
  orange: "text-orange-400",
  blue: "text-blue-600",
  purple: "text-purple-700",
  green: "text-green-500",
};
  return (
    <div className="w-full  bg-white border-2 border-gray-300 rounded-md px-4 py-6 flex flex-col items-center gap-2">
        <p className="text-gray-400 ">{title}</p>
        <h2 className={`font-bold text-3xl ${colors[color]}`}>{number}</h2>
    </div>
  )
}

export default Card