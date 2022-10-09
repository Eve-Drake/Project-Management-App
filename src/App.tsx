import { useEffect} from "react"
import AddCategory from "./features/categories/AddCategory"
import DisplayCategories from "./features/categories/DisplayCategories"
import AddTask from "./features/tasks/AddTask"
import DisplayTasks from "./features/tasks/DisplayTasks"
import './index.css'


function App() {


  useEffect(()=>{
   setActiveTaskArray(tasks.filter(el => el.category === activeCategory))
  },[activeCategory, tasks])

  return (
    <div className="grid grid-cols-1 md:grid-cols-4">
      <div className="grid col-span-1 h-32 md:h-screen border-2 md:border-r-black ">
        <DisplayCategories />
        <AddCategory />
      </div>
      <div className="grid col-span-3 p-2 h-96 md:h-screen">
        
        <AddTask setTasks=/>
        <h1 className="md:absolute  md:inset-x-94  md:top-12">
          {activeCategory}
        </h1>
        <DisplayTasks />
      </div>
    </div>
  )
}

export default App
