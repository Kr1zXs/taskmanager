import { DEFAULT_TASK } from "../../utils.js";
import BoardTasksForm from "./BoardTaskForms/BoardTasksForm.js";
import BoardTasksItem from "./BoardTasksItem";

function BoardTasks({ tasks }) {
  console.log(tasks);
  return (
    <div class="board__tasks">
      <BoardTasksForm task={DEFAULT_TASK} />
      {tasks.map((task) => {
        return <BoardTasksItem task={task} />      
      })}
    </div>
  )
}

      


export default BoardTasks;
