import { LuDot } from "react-icons/lu";
const DashHead = ({head,quote}) => {
  return (
    <div className="flex justify-between items-center p-2 mx-4">
      <div >
        <h1 className="text-black font-bold text-2xl">{head}</h1>
        <p className="text-gray-500">{quote}</p>
      </div>
      <div className="flex items-center bg-gray-100 p-1 rounded-xl border border-gray-300">
        <LuDot size={30}/>
        <p className="text-[18px] font-semibold">profile</p>
      </div>
    </div>
  );
};

export default DashHead;
