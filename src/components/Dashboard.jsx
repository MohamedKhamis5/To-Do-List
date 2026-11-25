import DashHead from "./DashHead";
import Card from "./Card";
import RecentTasks from "./RecentTasks";

const Dashboard = ({tasks}) => {
  return (
    <div className="bg-slate-50 min-h-screen p-4 ">
      <DashHead head={"Dashboard"} quote={"Welcome Back ! Here Is Your Task Overview"}/>
      <div className="grid grid-cols-2 gap-5 w-full p-6 lg:grid-cols-4">
        <Card title={"Total Tasks"} number={tasks.length} color={"blue"} />
        <Card title={"Completed"} number={tasks.filter((t)=>t.completed).length} color={"green"} />
        <Card title={"Pending"} number={tasks.filter((t)=>!t.completed).length} color={"orange"} />
        <Card title={"Completion"} number={`${Math.round((((tasks.filter((t)=>t.completed).length)/tasks.length)*100))}%`} color={"purple"}>%</Card> 
      </div>
      <RecentTasks tasks={tasks}/>
    </div>
  );
};

export default Dashboard;
