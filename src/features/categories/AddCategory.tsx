import React, { useContext, useState } from 'react'
import CategoryContext, { CategoryContexInterface } from '../state/CategoryContext';

const AddCategory = () => {
  const {categories} = useContext(CategoryContext) as CategoryContexInterface
  const [categoryName, setCategoryName] =  useState<string>('');
  const [alert, setAlert] = useState<boolean>(false)

  const addCategory = () =>{
    
  }

  return (
    <div className='p-2 m-2 md:absolute inset-x-0 bottom-6'>
      <input 
        className='border border-gray-200 rounded'
        placeholder='Category Name'
        value={categoryName}
        onChange={(e)=>setCategoryName(e.target.value)}
      />
      <button className='border border-gray-500 rounded-md' onClick={addCategory}>Add Category</button>
      
      <div className={(alert? '' : 'hidden')}>
        <p>Please Remember to Enter your task</p>
      </div>
    </div>
  )
}

export default AddCategory