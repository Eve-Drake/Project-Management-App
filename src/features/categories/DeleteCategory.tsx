import React, { useContext } from 'react'
import CategoryContext, { CategoryContexInterface } from '../state/CategoryContext';

interface Props {
  category: string
}

const DeleteCategory = ({category} : Props) => {
  const { deleteCategory } = useContext(CategoryContext) as CategoryContexInterface
  return (
    <button onClick={()=>deleteCategory(category)}>X</button>
  )
}

export default DeleteCategory