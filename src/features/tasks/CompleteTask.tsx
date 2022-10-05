import React from 'react'
import { Task } from './TaskInterface';

interface Props{
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>,
  tasks: Task[],
  id: number
}


const CompleteTask = ({setTasks, tasks, id}:Props) => {

  const completeTask = () =>{
    
  }
  return (
    <div>
        <button onClick={completeTask}>Complete</button>
    </div>
  )
}

export default CompleteTask