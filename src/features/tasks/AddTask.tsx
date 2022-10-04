import React, { useState }  from 'react'
import { Task } from './TaskInterface'

interface Props{
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>,
  categories: string[],
  tasks: Task[]
}

const AddTask = ({setTasks, categories, tasks}: Props) => {
  const [taskName, setTaskName] = useState<string>('');
  const [categoryName, setCategoryName] = useState<string>('')

  const addNewTask = () =>{
    if(categoryName && taskName){
      setTasks([...tasks, 
        {task: taskName, 
        id: Math.floor(Math.random()*1000),
        completed: false,
        category: categoryName
      }])
    }
  }

  return (
      <div className='grid grid-cols-1 md:grid-cols-5 h-8 m-2 gap-2'>
        <input 
        className='grid col-span-3 '
        placeholder='Task Name'
        value={taskName}
        onChange={(e)=>setTaskName(e.target.value)}
        />
    
        <select className='grid col-span-1 '
        onChange={(e)=>setCategoryName(e.target.value)}>
          {categories.map((el)=>
          <option key={el} value={el}>{el}</option>)}
        </select>

        <button onClick={addNewTask}>Add New Task</button>
        
      </div>
    
  )
}

export default AddTask