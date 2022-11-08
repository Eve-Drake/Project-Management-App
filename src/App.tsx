import { useContext, useEffect, useState } from "react"
import AddCategory from "./features/categories/AddCategory"
import DisplayCategories from "./features/categories/DisplayCategories"
import AddTask from "./features/tasks/AddTask"
import DisplayTasks from "./features/tasks/DisplayTasks"
import { Task } from "./features/state/Interface"
import './index.css'
import TaskContext, { TaskContexInterface } from "./features/state/TaskContex"
import CategoryContext, { CategoryContexInterface } from "./features/state/CategoryContext"
import ActiveCategoryContext, { ActiveCategoryContexInterface } from "./features/state/ActiveCategoryContext"
import LightDarkModeContext, { LightDarkModeInterface } from "./features/state/LightDarkMode"

function App() {
  const {tasks} =  useContext(TaskContext) as TaskContexInterface
  const {categories} = useContext(CategoryContext) as CategoryContexInterface
  const {activeCategory} = useContext(ActiveCategoryContext) as ActiveCategoryContexInterface
 

  const [activeTaskArray, setActiveTaskArray] = useState<Task[]>([])

  useEffect(()=>{
   setActiveTaskArray(tasks.filter(el => el.category === activeCategory))
   localStorage.setItem('tasks', JSON.stringify(tasks))
   localStorage.setItem('categories', JSON.stringify(categories))
  },[activeCategory, tasks, categories])


  return (

    <div className="grid grid-cols-1 md:grid-cols-4">
      <div className="grid col-span-1 h-32 md:h-screen border-2 md:border-r-black ">
        <DisplayCategories />
        <AddCategory  />
      </div>
      <div className="grid col-span-3 p-2 h-96 md:h-screen">
        <AddTask/>

        <h1 className="md:absolute  md:inset-x-94  md:top-12">
          {activeCategory}
        </h1>
        <DisplayTasks tasks={activeTaskArray}/>
      </div>
    </div>
  )
}

export default App
