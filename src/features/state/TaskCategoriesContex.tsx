import { createContext, ReactNode, useState } from "react";
import { Task } from "../tasks/Interface";

interface Props {
    children?: ReactNode
}

interface TaskContexInterface {
    tasks: Task[]
    addTask: (task: Task) => void,
    activeTaskArray: Task[]
    setActiveTaskArray: (task: Task) => void,
    categories : string[],
    addCategory : (category: string) => void,
    activeCategory: string,
    setActiveCategory: (category: string) => void
}


const TaskContext = createContext<TaskContexInterface|null>(null);

export function TasksProvider({ children }: Props){
    const [tasks, setTasks] = useState<Task[]>([{task:'Example Main Task', id: 0, category: 'Main', complete : false}, {task:'Example Secondary Task', id: 1, category: 'Secondary', complete : false}])
    const [categories, setCategories] =  useState<string[]>(['Main', 'Secondary'])
    const [activeCategory, setActiveCategory] = useState<string>('Main');
    const [activeTaskArray, setActiveTaskArray] = useState<Task[]>([])
    
    const addNewTask = () =>{
        setTasks([...tasks, 
            {task: taskName, 
            id: Math.floor(Math.random()*1000),
            category: categoryName,
            complete: false
          }])
          setTaskName('')
        
      }
    return(
        <TaskContext.Provider value={{}}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskContext