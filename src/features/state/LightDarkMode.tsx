import { createContext, ReactNode, useState } from "react";

interface Props {
    children?: ReactNode
}

export interface LightDarkMODeInterface {
    categories: string[]
    addCategory: (category: string) => void,
    deleteCategory : (name: string) => void,
}

const LightDarkModeContext = createContext<LightDarkModeInterface|null>(null);

export function CategoriesProvider({ children }: Props){
    const [categories, setCategories] =  useState<string[]>(['Main', 'Secondary'])
    
    const addCategory = (name: string) =>{
        setCategories([...categories, name])
    }
 
    const deleteCategory = (name:string) =>{
        setCategories(categories.filter(el=>el !== name))
    }

    return(
        <CategoryContext.Provider value={{categories, addCategory, deleteCategory}}>
            {children}
        </CategoryContext.Provider>
    )
}

export default CategoryContext