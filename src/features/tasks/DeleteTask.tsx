import React from 'react';
import { Task } from './TaskInterface';

interface Props{
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>,
  tasks: Task[],
  id: number
}

const DeleteTask = ({setTasks, tasks, id}:Props) => {

  const handleDelete = (id:number) =>{
    setTasks(tasks.filter(el=>el.id !== id))
  }
  return (
    <div>
      <button onClick={()=>handleDelete(id)}>Delete</button>
    </div>
  )
}

export default DeleteTask