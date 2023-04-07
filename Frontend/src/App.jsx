import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./routes/Home"
import Login_page from "./routes/Login_page"
function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Login_page" element={<Login_page/>}/>
   </Routes>
   </BrowserRouter>
   </> 
  )
}

export default App
