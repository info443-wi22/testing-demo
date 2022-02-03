import { useState } from 'react';
import { useSelector} from 'react-redux'

import { selectTasks, selectIncompleteTasks } from '../redux/taskSlice';

import TaskList from './Tasks';
import { AddTaskForm } from './TaskForms';

function App(props) {
  //const [tasks, setTasks] = useState(props.initialTasks);
  const tasks = useSelector(selectTasks)

  const addTask = (taskDescription) => {
    // const newTask = {
    //   id: tasks.length + 1, //add 1 to id
    //   description: taskDescription,
    //   complete: false
    // }
    // const updatedTasks = [...tasks, newTask];
    // setTasks(updatedTasks);
  }

  const toggleTaskCompletion = (taskId) => {
    // const updatedTasks = tasks.map((eachTask) => {
    //   const copy = {...eachTask}; //copy the object
    //   if(copy.id === taskId)
    //     copy.complete = !copy.complete;
    //   return copy; //put copy in the mapped list
    // })
    // setTasks(updatedTasks)
  }

  //do data processing
  //let incompleteArray = tasks.filter((task) => !task.complete);
  // console.log("Number of incomplete tasks", incompleteArray.length);
  const incompleteArray = useSelector(selectIncompleteTasks);

  return (
    <div className="container">
      <h1>To Do List</h1>
      <p className="lead">
        Num things I have to do: <strong>{incompleteArray.length}</strong>
      </p>
      {/* pass down the array */}
      <TaskList tasks={tasks} />
      <AddTaskForm />
    </div>
  );
}

export default App;
