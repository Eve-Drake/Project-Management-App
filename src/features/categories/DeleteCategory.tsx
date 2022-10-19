import React from 'react'

const DeleteCategory = () => {

  const deleteCategory = ()=>{
    console.log('delete')
  }
  return (
    <button onClick={deleteCategory}>X</button>
  )
}

export default DeleteCategory