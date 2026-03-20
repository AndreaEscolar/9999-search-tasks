
import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import TaskList from './components/TaskList'
import { tasks } from './data/tasks'

function App() {
  const [search, setSearch] = useState("")

  const normalizedSearch = search.trim().toLowerCase()

  const filteredTasks = 
    normalizedSearch.length >= 3 ? 
    tasks.filter((task) => task.title.toLowerCase().includes(normalizedSearch)) 
    : tasks
  
  return (
   <div className='container py-5'>
    <div className='row justify-content-center'>
      <div className='col-12 col-md-8 col-lg-6'>
        <div className='card shadow-sm'>
          <div className='card-body'>
            <h1 className='card-title mb-4'>Buscador de tareas</h1>
            <SearchBar value={search} onChange={setSearch} />
            <TaskList tasks={filteredTasks}/>
          </div>
        </div>
      </div>
    </div>
   </div>
  )
}

export default App
