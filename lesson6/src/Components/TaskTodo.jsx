import React from 'react'
import {RiDeleteBinLine} from 'react-icons/ri'

const TaskTodo = ({task,handleChecked,deleteTask}) => {
  return (
    <div className='task' style={{opacity: task.completed && 0.5}}>
        <div className='task-left'>
            <input type="checkbox"
            checked={task.completed}
             onChange={(e) => handleChecked(task.id)}></input>
            <sapn className='task-title'
            style={{textDecoration: task.completed && "line-through"}}
            >{task.title}</sapn>
        </div>
        <div className="task-right">
            <RiDeleteBinLine fontSize="20px"
            onClick={(e) => deleteTask(task.id)}
            />
        </div>
    </div>
  )
}

export default TaskTodo