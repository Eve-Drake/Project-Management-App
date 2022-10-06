import React from 'react'
import DeleteCategory from './DeleteCategory'

interface Props{
  categories : string[]
  setActiveCategory: React.Dispatch<React.SetStateAction<string>>
  activeCategory: string
}
const DisplayCategories = ({categories, setActiveCategory} : Props) => {
  return (
    <div className='overflow-y-auto h-5/6 '>
      {categories.map((category)=>(
        <div>
          <button key={category} onClick={()=>setActiveCategory(category)} className='p-2 m-2 border rounded cursor-pointer w-5/6'> 
            {category}
          </button>
          <DeleteCategory category={category} categories={categories}/>
        </div>
      ))}
    </div>
  )
}
export default DisplayCategories