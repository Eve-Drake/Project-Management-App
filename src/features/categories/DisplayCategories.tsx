import DeleteCategory from './DeleteCategory'
import CategoryContext, { CategoryContexInterface } from '../state/CategoryContext';
import { useContext, useState } from 'react'
import ActiveCategoryContext, { ActiveCategoryContexInterface } from '../state/ActiveCategoryContext';

const DisplayCategories = () => {
  const {categories} = useContext(CategoryContext) as CategoryContexInterface
  const {selectCategory} = useContext(ActiveCategoryContext) as ActiveCategoryContexInterface

  const [alert, setAlert] = useState(false)

  return (
    <div className='overflow-y-auto h-5/6 '>
     <p className={alert? 'text-ORANGE' : 'hidden'}>Cannot Delete Main Category</p> 
     {categories.map((category, index)=>(
        <div key={index}>
          <button onClick={()=>selectCategory(category)} className='p-2 m-2 border rounded cursor-pointer w-5/6'> 
            {category}
          </button>
          <DeleteCategory category={category} setAlert={setAlert}/>
        </div>
      ))}
    
    </div>
  )
}
export default DisplayCategories