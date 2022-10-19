import DeleteCategory from './DeleteCategory'
import CategoryContext, { CategoryContexInterface } from '../state/CategoryContext';
import { useContext } from 'react'
import ActiveCategoryContext, { ActiveCategoryContexInterface } from '../state/ActiveCategoryContext';

const DisplayCategories = () => {
  const {categories} = useContext(CategoryContext) as CategoryContexInterface
  const {selectCategory} = useContext(ActiveCategoryContext) as ActiveCategoryContexInterface

  const setActiveCategory = (category : string) => {

  }
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