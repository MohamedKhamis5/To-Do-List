
const TaskCard = ({task}) => {
    const {title,description,completed}=task
  return (
    <div className='bg-slate-200 py-4 px-6  rounded-xl my-6 flex items-center justify-between'>
        <div>
            <h2 className="font-bold text-[18px] ">{title}</h2>
            <p className="text-gray-400">{description}</p>
        </div>
        <div className={(completed)?"bg-green-100 py-2 px-3  rounded-full text-green-600":"bg-orange-100 py-2 px-3 rounded-full text-orange-600"}>
            <h3 className="font-semibold">{(completed)?"Completed":"Pending"}</h3>
        </div>

    </div>
  )
}

export default TaskCard