import React from 'react'

interface Props{
  category: string,
  categories: string[]
}

const DeleteCategory = ({category, categories}:Props) => {

  const deleteCategory = ()=>{
    
  }
  return (
    <button onClick={deleteCategory}>X</button>
  )
}

export default DeleteCategory