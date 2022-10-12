import { createContext, ReactNode, useState } from "react";
import { Task } from "../tasks/Interface";

interface Props {
    children?: ReactNode
}

const TaskContext = createContext<Task[] | null>(null);

export function TasksProvider({ children }: Props){
    const [tasks, setTasks] = useState<Task[]>([{task:'Example Main Task', id: 0, category: 'Main', complete : false}, {task:'Example Secondary Task', id: 1, category: 'Secondary', complete : false}])
    const [categories, setCategories] =  useState<string[]>(['Main', 'Secondary'])
    
    return(
        <TaskContext.Provider value={{tasks, setTasks, activeTaskArray, setActiveTaskArray}}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskContext