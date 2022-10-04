import React from 'react'
import CompleteTask from './CompleteTask'
import DeleteTask from './DeleteTask'
import { Task } from './TaskInterface'

interface Props{
  tasks: Task[]
}

const DisplayTasks = ({tasks} : Props) => {
  return (
    <div className='p-2 m-2'>
      {tasks.map((task)=>(
        <div key={task.id} className='border border-black rounded m-2 grid grid-cols-3'>
          <div className='grid col-span-2'>
          <h1>{task.task}</h1>
          <p>{task.category}</p>
          </div>
          <div className='grid col-span-1 content-end'>
            <DeleteTask/>
            <CompleteTask />
          </div>
        </div>
      ))}
    </div>
  )
}

export default DisplayTasks