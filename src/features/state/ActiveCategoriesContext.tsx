import { createContext, ReactNode, useState } from "react";
import { Task } from "../tasks/Interface";

interface Props {
    children?: ReactNode
}

interface ActiveCategoryContextInterface{
    activeCategory: [string, React.Dispatch<React.SetStateAction<string>>]
}

const CategoriesContext = createContext<ActiveCategoryContextInterface | null>(null);

export function CategoriesProvider({ children }: Props){
    const [activeCategory, setActiveCategory] = useState<string>('Main');
   
    return(
        <CategoriesContext.Provider value={{activeCategory: [activeCategory, setActiveCategory]}}>
            {children}
        </CategoriesContext.Provider>
    )
}

export default CategoriesContext