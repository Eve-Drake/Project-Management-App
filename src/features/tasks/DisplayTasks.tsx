import React from 'react'
import CompleteTask from './CompleteTask'
import DeleteTask from './DeleteTask'
import { Task } from './TaskInterface'

interface Props{
  tasks: Task[],
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const DisplayTasks = ({tasks, setTasks} : Props) => {
  return (
    <div className='overflow-y-auto p-2 m-2 md:absolute md:w-4/6 right-20 sm:top-8 md:top-16'>
      {tasks.map((task)=>(
        <div key={task.id} className='border border-black rounded m-2 grid grid-cols-3'>
          <div className='grid col-span-2'>
          <h1>{task.task}</h1>
          <p>{task.category}</p>
          </div>
          <div className='grid col-span-1 content-end'>
            <DeleteTask setTasks={setTasks} tasks={tasks} id={task.id}/>
            <CompleteTask />
          </div>
        </div>
      ))}
    </div>
  )
}

export default DisplayTasks