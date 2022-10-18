import React, { useState }  from 'react'
import { Task } from './Interface'



const AddTask = () => {
  const [taskName, setTaskName] = useState<string>('');
  const [categoryName, setCategoryName] = useState<string>('Main')

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

        <button>Add New Task</button>
        
      </div>
    
  )
}

export default AddTask