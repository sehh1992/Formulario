import Link from "next/link";
import { date } from "yup";
function TaskCard({ task }) {
  return (
    <Link href={`/task/${task._id}`}>
      <div
        className="p-10 text-white text-center rounded-md 
    hover:cursor-pointer hover:bg-blue-500"
      >
        <h1>{task.title}</h1>
        <p>{task.description}</p>
      </div>
    </Link>
  );
}
export default TaskCard;
