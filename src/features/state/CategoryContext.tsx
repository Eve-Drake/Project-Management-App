import { createContext, ReactNode, useState } from "react";

interface Props {
    children?: ReactNode
}

export interface CategoryContexInterface {
    categories: string[]
    addCategory: (category: string) => void,
    deleteCategory : (name: string) => void,
}

const CategoryContext = createContext<CategoryContexInterface|null>(null);

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