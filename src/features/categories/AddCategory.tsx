import React, { useContext, useState } from 'react'
import CategoryContext, { CategoryContexInterface } from '../state/CategoryContext';

const AddCategory = () => {
  const {addCategory} = useContext(CategoryContext) as CategoryContexInterface
  const [categoryName, setCategoryName] =  useState<string>('');
  const [alert, setAlert] = useState<boolean>(false)

  const add = () =>{
    setAlert(false)
    if (categoryName){
      addCategory(categoryName)
      setCategoryName('')
    }
    else{
      setAlert(true)
    }
  }

  return (
    <div className='p-2 m-2 md:absolute inset-x-0 bottom-6'>
      <input 
        className='border border-gray-200 rounded'
        placeholder='Category Name'
        value={categoryName}
        onChange={(e)=>setCategoryName(e.target.value)}
      />
      <button className='border border-gray-500 rounded-md' onClick={add}>Add Category</button>
      
      <div className={(alert? '' : 'hidden')}>
        <p>Please Remember to Enter your task</p>
      </div>
    </div>
  )
}

export default AddCategory