//fonts
import './assets/Boecklins Universe.ttf'
//API URL
const BASE_URL = 'https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-ET-WEB-FT'
//hooks
import { Route, Routes } from 'react-router-dom'
//components
import Navbar from './Navbar'
import Form from './Form'
import Home from './Home'
import Details from './Details'
function App() {

  return (
    <>
      <Navbar />
      <h1 id="app-heading">The Puppy Bowl</h1>
      <Routes>
        <Route path="/" element={<Home BASE_URL={BASE_URL} />} />
        <Route path="/form" element={<Form BASE_URL={BASE_URL} />} />
        <Route path="/details/:id" element={<Details BASE_URL={BASE_URL} />} />
      </Routes>
    </>
  )
}

export default App
