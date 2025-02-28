import { useState } from 'react'
import {Box} from '@chakra-ui/react'
import HomePage from './Pages/HomePage.jsx'
import CreatePage from './Pages/CreatePage.jsx'
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box minH={"100vh"}>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/create" element={<CreatePage/>}/>
      </Routes>
    </Box>
  )
}

export default App
