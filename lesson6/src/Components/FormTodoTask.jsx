import React, { useState } from 'react'
import "./Style.css"
import { toast } from 'react-toastify';
import {FcTodoList} from 'react-icons/fc'
import TaskTodo from './TaskTodo';

const FormTodoTask = ({props}) => {

const [input, setInput] = useState("");
const [tasks, setTasks] = useState([]);

const  handleSubmit = (e) => {
    e.preventDefault();
    if(!input){
      toast.warning("Input should be not empty!");
      return;
    }

    const newTask = {
      title: input,
      completed: false,
      id: new Date()
  };
    setTasks([...tasks,newTask]);
    setInput("");
  }

  const handleChecked = (id) => {
      setTasks(tasks.map(item => 
      item.id === id ? {...item,completed : !item.completed} : item));
  }

  const deleteTask = (id) => {
      setTasks(tasks.filter(item => item.id !== id))
  }
  console.log(tasks);
  return (
    <div className='container'>
        <h3 className='title'>TodoList
        <FcTodoList color='white' className='icon'/></h3>
        <form className='formTodo' onSubmit={handleSubmit}>
            <input 
            placeholder='add a todoTask'
            type="text"
            value={input}
            onChange={(e) => setInput((e.target.value))}
            ></input>
            <button type='submit'>Add</button>
        </form>
        <div className='todoTaskContainer'>
            {
              tasks.map((task,index) =>(
                  <TaskTodo key={index}
                  index = {index} 
                  task={task} 
                  deleteTask = {deleteTask}
                  handleChecked = {handleChecked}/>
              ))}
        </div>
       
    </div>
  )
}

export default FormTodoTask