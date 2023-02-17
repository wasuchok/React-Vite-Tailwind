
import Navbar_Frontend from "../components/Navbar_Frontend"


const Main_Layout = ({ children }) => {
  return (
    <>
        <Navbar_Frontend />
        { children }
    </>
  )
}

export default Main_Layout