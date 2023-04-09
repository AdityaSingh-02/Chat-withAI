import {BrowserRouter,Routes,Route} from "react-router-dom"

import HomeRoute from "./routes/HomeRoute";
import AboutRoute from "./routes/AboutRoute";
import Login from './routes/Login_page';
import Error from "./routes/Error"
function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeRoute />} />
          <Route path="/about" element={<AboutRoute />} />
          <Route path="/chat" element={<Login />} />
          <Route path="/error" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </> 
  )
}

export default App
