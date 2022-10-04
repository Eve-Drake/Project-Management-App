import React from 'react'

interface Props{
  categories : string[]
}
const DisplayCategories = ({categories} : Props) => {
  return (
    <div className='overflow-y-auto h-5/6'>
      {categories.map((category)=>(
        <p key={category}>{category}</p>
      ))}
    </div>
  )
}

export default DisplayCategories