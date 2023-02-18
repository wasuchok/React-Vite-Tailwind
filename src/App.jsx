import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home_Page from "./pages/Home_Page"
import About_Page from './pages/About_Page'

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Home_Page />} />
      <Route path="/about" element={<About_Page />} />
    </Routes>
  )

}

export default App