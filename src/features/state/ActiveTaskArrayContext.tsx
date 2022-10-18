import { createContext, ReactNode} from "react";
import { Task } from "../tasks/Interface";

interface Props {
    children?: ReactNode
}

export interface ActiveTaskContexInterface {
    activeTaskArray: Task[],
}

const ActiveTaskArrayContext = createContext<ActiveTaskContexInterface|null>(null);

export function ActiveTasksArrayProvider({ children }: Props){
    const activeTaskArray : Task[] = []

    return(
        <ActiveTaskArrayContext.Provider value={{activeTaskArray}}>
            {children}
        </ActiveTaskArrayContext.Provider>
    )
}

export default ActiveTaskArrayContext