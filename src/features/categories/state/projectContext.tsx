import React, { createContext, useState } from "react";
import { Task } from "../../tasks/TaskInterface";
const ProjectContext = createContext<Task[] | string | null | string[]>(null);

const ProjectProvider = ({ children }) => {
    const [tasks, setTasks] = useState<Task[]>([{task:'Example Main Task', id: 0, category: 'Main'}, {task:'Example Secondary Task', id: 1, category: 'Secondary'}])
    const [categories, setCategories] =  useState<string[]>(['Main', 'Secondary'])
    const [activeCategory, setActiveCategory] = useState<string>('Main');
    const [activeTaskArray, setActiveTaskArray] = useState<Task[]>([])


return (
    <ProjectContext.Provider value={{tasks, setTasks, categories, setCategories, activeCategory, setActiveCategory, activeTaskArray, setActiveTaskArray }}>
        {children}
    </ProjectContext.Provider>
)
}