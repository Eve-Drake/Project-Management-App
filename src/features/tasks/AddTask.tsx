import React, { useContext, useState }  from 'react'
import CategoryContext, { CategoryContexInterface } from "../state/CategoryContext"
import TaskContext, { TaskContexInterface } from '../state/TaskContex'



const AddTask = () => {

  const {categories} = useContext(CategoryContext) as CategoryContexInterface
  const {addTask} = useContext(TaskContext) as TaskContexInterface
  const [taskName, setTaskName] = useState<string>('');
  const [categoryName, setCategoryName] = useState<string>('Main')
  
  
  const handleAdd =()=>{
    addTask(taskName, categoryName);
    setTaskName('')
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
          {categories.map((el, index)=>
          <option key={index} value={el}>{el}</option>)}
        </select>

        <button onClick={handleAdd}>Add New Task</button>
        
      </div>
    
  )
}

export default AddTask