import { useState } from "react"
import AddCategory from "./features/categories/AddCategory"
import DisplayCategories from "./features/categories/DisplayCategories"
import AddTask from "./features/tasks/AddTask"
import DisplayTasks from "./features/tasks/DisplayTasks"
import { Task } from "./features/tasks/TaskInterface"
import './index.css'


function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [categories, setCategories] =  useState<string[]>([])
  return (
    <div className="grid grid-cols-1 md:grid-cols-4">
      <div className="grid col-span-1 h-32 md:h-screen border-2 border-black ">
        <DisplayCategories categories={categories}/>
        <AddCategory setCategories={setCategories} categories={categories}/>
      </div>
      <div className="grid col-span-3 p-2 h-96 md:h-screen">
        <AddTask setTasks={setTasks} categories={categories} tasks={tasks}/>
        <DisplayTasks tasks={tasks}/>
      </div>
    </div>
  )
}

export default App
