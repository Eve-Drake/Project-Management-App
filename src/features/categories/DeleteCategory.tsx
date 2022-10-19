import React, { useContext, useState } from 'react'
import ActiveCategoryContext, { ActiveCategoryContexInterface } from '../state/ActiveCategoryContext';
import CategoryContext, { CategoryContexInterface } from '../state/CategoryContext';
import { BiX } from "react-icons/bi";

interface Props {
  category: string,
  setAlert: React.Dispatch<React.SetStateAction<boolean>>
}

const DeleteCategory = ({category, setAlert} : Props) => {
  const { deleteCategory } = useContext(CategoryContext) as CategoryContexInterface
  const {activeCategory, selectCategory} =  useContext(ActiveCategoryContext) as ActiveCategoryContexInterface


  const handleDelete =()=>{
    setAlert(false)
    if (category === 'Main'){
      setAlert(true)
      return
    }
    deleteCategory(category)
    if (activeCategory === category){
      selectCategory('Main')
    }

  }

  return (
    <button onClick={handleDelete}><BiX /></button>
  )
}

export default DeleteCategory