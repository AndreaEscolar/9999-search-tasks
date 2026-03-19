
import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'

function App() {
  const [search, setSearch] = useState("")
  
  return (
   <div className='container py-5'>
    <SearchBar value={search} onChange={setSearch} />
   </div>
  )
}

export default App
