import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {TasksProvider} from './features/state/TaskCategoriesContex'
import {CategoriesProvider} from './features/state/CategoriesContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(  
  <React.StrictMode>
    <TasksProvider>
      <CategoriesProvider>
        <App />
      </CategoriesProvider>
    </TasksProvider>
  </React.StrictMode>
)
