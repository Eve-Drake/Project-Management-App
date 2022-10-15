import { createContext, ReactNode, useState } from "react";
import { Task } from "../tasks/Interface";

interface Props {
    children?: ReactNode
}

interface CategoriesContextInterface{
    categories: [string[], React.Dispatch<React.SetStateAction<string[]>>]
    activeCategory: [string, React.Dispatch<React.SetStateAction<string>>]
}

const CategoriesContext = createContext<CategoriesContextInterface | null>(null);

export function CategoriesProvider({ children }: Props){
    const [categories, setCategories] =  useState<string[]>(['Main', 'Secondary'])
    const [activeCategory, setActiveCategory] = useState<string>('Main');
   
    return(
        <CategoriesContext.Provider value={{categories: [categories, setCategories], activeCategory: [activeCategory, setActiveCategory]}}>
            {children}
        </CategoriesContext.Provider>
    )
}

export default CategoriesContext