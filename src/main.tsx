import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {TasksProvider} from './features/state/TaskContex'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(  
  <React.StrictMode>
    <TasksProvider>
        <App />
    </TasksProvider>
  </React.StrictMode>
)
