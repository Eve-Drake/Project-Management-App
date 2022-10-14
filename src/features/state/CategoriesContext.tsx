import { createContext, ReactNode, useState } from "react";
import { Task } from "../tasks/Interface";

interface Props {
    children?: ReactNode
}

interface CategoriesContextInterface{
    categories: string[],
    setCategories: React.Dispatch<React.SetStateAction<string[]>>,
    activeCategory: string,
    setActiveCategory: React.Dispatch<React.SetStateAction<string>>
}

const CategoriesContext = createContext<CategoriesContextInterface | null>(null);

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