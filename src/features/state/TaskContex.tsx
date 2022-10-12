import { createContext, ReactNode, useState } from "react";
import { Task } from "../tasks/Interface";

interface Props {
    children?: ReactNode
}

const TaskContext = createContext<Task[]>([]);

export function TasksProvider({ children }: Props){
    const [tasks, setTasks] = useState<Task[]>([

    ])
    const [activeTaskArray, setActiveTaskArray] = useState<Task[]>([])
    return(
        <TaskContext.Provider value={{tasks, setTasks, activeTaskArray, setActiveTaskArray}}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskContext