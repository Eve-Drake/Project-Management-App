import { useEffect, useState } from "react"
import AddCategory from "./features/categories/AddCategory"
import DisplayCategories from "./features/categories/DisplayCategories"
import AddTask from "./features/tasks/AddTask"
import DisplayTasks from "./features/tasks/DisplayTasks"
import { Task } from "./features/tasks/Interface"
import './index.css'
import {TasksProvider} from './features/state/TaskContex'


function App() {
  const [tasks, setTasks] = useState<Task[]>([{task:'Example Main Task', id: 0, category: 'Main', complete : false}, {task:'Example Secondary Task', id: 1, category: 'Secondary', complete : false}])
  const [categories, setCategories] =  useState<string[]>(['Main', 'Secondary'])
  const [activeCategory, setActiveCategory] = useState<string>('Main');
  const [activeTaskArray, setActiveTaskArray] = useState<Task[]>([])

  useEffect(()=>{
   setActiveTaskArray(tasks.filter(el => el.category === activeCategory))
   localStorage.setItem('tasks', JSON.stringify(tasks))
   localStorage.setItem('categories', JSON.stringify(categories))
  },[activeCategory, tasks, categories])


  return (
    <div className="grid grid-cols-1 md:grid-cols-4">
      <div className="grid col-span-1 h-32 md:h-screen border-2 md:border-r-black ">
        <DisplayCategories 
          categories={categories} 
          setActiveCategory={setActiveCategory} 
          activeCategory={activeCategory} 
        />

        <AddCategory 
          setCategories={setCategories} 
          categories={categories} 
        />
      </div>
      <div className="grid col-span-3 p-2 h-96 md:h-screen">
        <AddTask 
          setTasks={setTasks} 
          categories={categories} 
          tasks={tasks} 
        />

        <h1 className="md:absolute  md:inset-x-94  md:top-12">
          {activeCategory}
        </h1>
        <DisplayTasks 
          activeTasks={activeTaskArray} 
          tasks={tasks}
          setTasks={setTasks} />
      </div>
    </div>
  )
}

export default App
