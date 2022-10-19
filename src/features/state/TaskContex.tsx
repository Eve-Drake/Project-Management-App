import { createContext, ReactNode, useState } from "react";
import { Task } from "../tasks/Interface";

interface Props {
    children?: ReactNode
}

export interface TaskContexInterface {
    tasks: Task[]
    addTask: (taskName : string, categoryName : string) => void,
    deleteTask : (id: number) => void,
}

const TaskContext = createContext<TaskContexInterface|null>(null);

export function TasksProvider({ children }: Props){
    const [tasks, setTasks] = useState<Task[]>([{task:'Example Main Task', id: 0, category: 'Main', complete : false}, {task:'Example Secondary Task', id: 1, category: 'Secondary', complete : false}])
    
    const addTask = (taskName : string, categoryName : string) =>{
        setTasks([...tasks, 
            {task: taskName, 
            id: Math.floor(Math.random()*1000),
            category: categoryName,
            complete: false
          }])
      }

    const deleteTask = (id:number) =>{
    setTasks(tasks.filter(el=>el.id !== id))
    }

    return(
        <TaskContext.Provider value={{tasks, addTask, deleteTask}}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskContext