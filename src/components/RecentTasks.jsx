import TaskCard from "./TaskCard";
import { Link } from "react-router-dom";
const RecentTasks = ({tasks}) => {

  return (
    <div className='w-full rounded-lg bg-white p-6 mt-5'>
      <div className="flex justify-between items-center px-5 py-2">
        <h2 className="font-bold text-2xl ">Recent Tasks</h2>
        <Link to={"/add-task"} className="p-2.5 bg-indigo-500 rounded-2xl text-white" >+ Add Task</Link>
      </div>
      <div>
       {tasks.map((task)=>(
        <TaskCard key={task.id} task={task}/>
       ))}
      </div>
    </div>
  )
}

export default RecentTasks