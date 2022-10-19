import React from 'react'
import DeleteTask from './DeleteTask'
import { Task } from './Interface'

interface Props {
  tasks: Task[]
}

const DisplayTasks = ({tasks} : Props) => {
  return (
    <div className='overflow-y-auto p-2 m-2 md:absolute md:w-4/6 right-20 sm:top-8 md:top-16'>
      {tasks.map((task)=>(
        <div key={task.id} className='border border-black rounded m-2 grid grid-cols-3'>
          <div className='grid col-span-2'>
          <h2>{task.task}</h2>
          <p className='pl-2'>{task.category}</p>
          </div>
          <div className='grid col-span-1 content-end'>
            <DeleteTask id={task.id}/>
          </div>
        </div>
      ))}
    </div>
  )
}

export default DisplayTasks