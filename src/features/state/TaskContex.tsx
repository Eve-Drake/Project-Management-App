import { createContext, ReactNode, useState } from "react";
import { Task } from "../tasks/Interface";

interface Props {
    children?: ReactNode
}

interface TaskContexInterface{
    tasks: Task[],
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>,
    activeTaskArray: Task[],
    setActiveTaskArray: React.Dispatch<React.SetStateAction<Task[]>>
}

const TaskContext = createContext<null | TaskContexInterface>(null);

export function TasksProvider({ children }: Props){
    const [tasks, setTasks] = useState<Task[]>([{task:'Example Main Task', id: 0, category: 'Main', complete : false}, {task:'Example Secondary Task', id: 1, category: 'Secondary', complete : false}])
    const [activeTaskArray, setActiveTaskArray] = useState<Task[]>([])

    return(
        <TaskContext.Provider value={{tasks, setTasks, activeTaskArray, setActiveTaskArray}}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskContext