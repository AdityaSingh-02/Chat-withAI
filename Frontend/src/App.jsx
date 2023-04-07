import {BrowserRouter,Routes,Route} from "react-router-dom"
import HomeRoute from "./routes/HomeRoute";
import AboutRoute from "./routes/AboutRoute";
function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeRoute />} />
          <Route path="/about" element={<AboutRoute />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
