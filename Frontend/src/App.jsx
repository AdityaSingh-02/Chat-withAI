import {BrowserRouter,Routes,Route} from "react-router-dom"

import HomeRoute from "./routes/HomeRoute";
import AboutRoute from "./routes/AboutRoute";
import Login from './routes/Login_page';
function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeRoute />} />
          <Route path="/about" element={<AboutRoute />} />
          <Route path="/chat" element={<Login />} />

        </Routes>
      </BrowserRouter>
    </> 
  )
}

export default App
