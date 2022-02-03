import React from 'react';

import { useSelector, useDispatch } from 'react-redux'
import tasksSlice from '../redux/taskSlice';

export function Task({ task, clickCallback }) { 

	const dispatch = useDispatch()
	
  const handleClick = () => {
		dispatch(tasksSlice.actions.toggleComplete(task.id))
    //clickCallback(task.id)
  }
  
  //some data processing
	let className = '';
	if(task.complete) {
		className = 'font-strike';
	}

	return (
		<li className={className} onClick={handleClick}>
			{task.description}
		</li>
	);
}
	
export default function TaskList(props) {
	let taskComponents = props.tasks.map((eachTask) => {
    let singleTaskElem = (
        <Task 
          key={eachTask.id} 
          task={eachTask} 
          clickCallback={props.whatToDoWhenClicked} 
        />
    )
	  return singleTaskElem;
	})

	return (
	  <ol>
		  {taskComponents}
	  </ol>
	);
}