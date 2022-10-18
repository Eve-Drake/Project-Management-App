import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ActiveCategoriesProvider } from './features/state/ActiveCategoryContext'
import {ActiveTasksArrayProvider} from './features/state/ActiveTaskArrayContext'
import { CategoriesProvider } from './features/state/CategoryContext'
import {TasksProvider} from './features/state/TaskContex'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(  
  <React.StrictMode>
    <TasksProvider>
      <CategoriesProvider>
        <ActiveCategoriesProvider>
          <ActiveTasksArrayProvider>
            <App />  
          </ActiveTasksArrayProvider>
        </ActiveCategoriesProvider>
      </CategoriesProvider>
    </TasksProvider>
  </React.StrictMode>
)
