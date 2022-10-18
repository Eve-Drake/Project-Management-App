import { createContext, ReactNode, useState } from "react";

interface Props {
    children?: ReactNode
}

export interface ActiveCategoryContexInterface {
    activeCategory: string
    selectCategory: (category: string) => void,
}

const ActiveCategoryContext = createContext<ActiveCategoryContexInterface|null>(null);

export function CategoriesProvider({ children }: Props){
    const [activeCategory, setActiveCategory] = useState<string>('Main');

    const selectCategory = (name: string) =>{
        setActiveCategory(name)
      }



    return(
        <ActiveCategoryContext.Provider value={{activeCategory, selectCategory}}>
            {children}
        </ActiveCategoryContext.Provider>
    )
}

export default ActiveCategoryContext