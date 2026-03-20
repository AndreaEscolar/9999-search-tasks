
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
    <h1>Buscador de tareas</h1>
    <SearchBar value={search} onChange={setSearch} />
    <TaskList tasks={filteredTasks}/>
   </div>
  )
}

export default App
