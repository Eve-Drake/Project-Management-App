import React from 'react'
import DeleteCategory from './DeleteCategory'


const DisplayCategories = () => {
  return (
    <div className='overflow-y-auto h-5/6 '>
      {categories.map((category)=>(
        <div key={category}>
          <button key={category} onClick={()=>setActiveCategory(category)} className='p-2 m-2 border rounded cursor-pointer w-5/6'> 
            {category}
          </button>
          <DeleteCategory />
        </div>
      ))}
    </div>
  )
}
export default DisplayCategories