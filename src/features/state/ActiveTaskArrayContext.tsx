import { createContext, ReactNode, useState } from "react";
import { Task } from "../tasks/Interface";

interface Props {
    children?: ReactNode
}

export interface ActiveTaskContexInterface {
    activeTaskArray: Task[],
    setActiveTaskArray : (tasks : Task[]) => void
}

const TaskContext = createContext<ActiveTaskContexInterface|null>(null);

export function TasksProvider({ children }: Props){
    const [activeTaskArray, setActiveTaskArray] = useState<Task[]>([])

    return(
        <TaskContext.Provider value={{activeTaskArray, setActiveTaskArray}}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskContext