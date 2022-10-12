import { createContext, ReactNode, useState } from "react";
import { Task } from "../tasks/Interface";

interface Props {
    children?: ReactNode
}

const CategoriesContext = createContext<string[] | null>(null);

export function TasksProvider({ children }: Props){
    const [categories, setCategories] =  useState<string[]>(['Main', 'Secondary'])
    const [activeCategory, setActiveCategory] = useState<string>('Main');
   
    return(
        <CategoriesContext.Provider value={{categories, setCategories, activeCategory, setActiveCategory}}>
            {children}
        </CategoriesContext.Provider>
    )
}

export default CategoriesContext