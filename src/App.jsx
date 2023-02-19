import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home_Page from "./pages/Home_Page"
import About_Page from './pages/About_Page'
import Cart_Page from "./pages/Cart_Page";
import Counter_Page from "./pages/Counter_Page";

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Home_Page />} />
      <Route path="/about" element={<About_Page />} />
      <Route path="/cart" element={<Cart_Page />} />
      <Route path="/counter" element={<Counter_Page />} />
    </Routes>
  )

}

export default App