import { createContext, ReactNode, useState } from "react";
import { Task } from "../tasks/Interface";

interface Props {
    children?: ReactNode
}

interface ActiveTaskArrayInterface{
    activeTaskArray: [Task[], React.Dispatch<React.SetStateAction<Task[]>>],
}

const TaskContext = createContext<ActiveTaskArrayInterface |null>(null);

export function TasksProvider({ children }: Props){
    const [activeTaskArray, setActiveTaskArray] = useState<Task[]>([])

    return(
        <TaskContext.Provider value={{activeTaskArray: [activeTaskArray, setActiveTaskArray]}}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskContext