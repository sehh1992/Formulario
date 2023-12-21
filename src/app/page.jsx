import { connectDB } from "@/utils/mongo";
import Task from "@/models/Task";
import TaskCard from "@/comoponets/Taskcard";

async function loadTask(params) {
  connectDB();
  const tasks = await Task.find();
  return tasks;
}

export default async function newPage() {
  const tasks = await loadTask();
  return (
    <div className="grid grid-cols-3 gap-2 ">
      {tasks.map((task) => (
        <TaskCard task={task} key={task._id} />
      ))}
    </div>
  );
}
