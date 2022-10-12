import { createContext, ReactNode, useState } from "react";
import { Task } from "../tasks/Interface";

interface Props {
    children?: ReactNode
}

const TaskContext = createContext<string>();

export function TasksProvider({ children }: Props){
    const [categories, setCategories] =  useState<string[]>(['Main', 'Secondary'])
    const [activeCategory, setActiveCategory] = useState<string>('Main');
   
    return(
        <TaskContext.Provider value={'Yyy'}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskContext