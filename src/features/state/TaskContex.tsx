import { createContext, ReactNode, useState } from "react";
import { Task } from "../tasks/Interface";

interface Props {
    children?: ReactNode
}

interface TaskContexInterface {
    tasks: Task[]
    addTask: (task: Task) => void,
    deleteTask : (id: number) => void,
}

const TaskContext = createContext<TaskContexInterface|null>(null);

export function TasksProvider({ children }: Props){
    const [tasks, setTasks] = useState<Task[]>([{task:'Example Main Task', id: 0, category: 'Main', complete : false}, {task:'Example Secondary Task', id: 1, category: 'Secondary', complete : false}])
    
    const addTask = (task: Task) =>{
        setTasks([...tasks, 
            {task: task.task, 
            id: Math.floor(Math.random()*1000),
            category: task.category,
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