import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ActiveCategoriesProvider } from './features/state/ActiveCategoryContext'
import { CategoriesProvider } from './features/state/CategoryContext'
import {TasksProvider} from './features/state/TaskContex'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(  
  <React.StrictMode>
    <TasksProvider>
      <CategoriesProvider>
        <ActiveCategoriesProvider>
          <App />  
        </ActiveCategoriesProvider>
      </CategoriesProvider>
    </TasksProvider>
  </React.StrictMode>
)
