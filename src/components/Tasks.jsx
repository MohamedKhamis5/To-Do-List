import DashHead from "./DashHead";
import TaskCardT from "./TaskCardT";
const Tasks = ({ tasks,setTasks }) => {
  return (
    <div className="bg-slate-50 min-h-screen p-4">
      <DashHead
        head={"My Tasks"}
        quote={"Manage your tasks and track your progress."}
      />
      <div className="grid md:grid-cols-1 w-full gap-5 mt-8 lg:grid-cols-2">
        {tasks.map((task) => (
          <TaskCardT key={task.id} task={task} setTasks={setTasks} />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
