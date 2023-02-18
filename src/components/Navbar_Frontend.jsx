import { NavLink } from "react-router-dom"
export const Navbar_Frontend = () => {
  return (
<div className="navbar bg-blue-800 text-white">
  <div className="flex-1 md:mx-10 xl:mx-10 lg:mx-10">
    <img className="animate-spin-slow w-3 md:w-8 lg:w-8 xl:w-8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" />
    <NavLink to="/" className="btn btn-ghost normal-case text-xl hidden md:flex xl:flex lg:flex">React Project</NavLink>
    <NavLink to="/" className="btn btn-ghost normal-case text-xl flex md:hidden xl:hidden lg:hidden">R</NavLink>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink to="/">หน้าแรก</NavLink></li>
      <li><NavLink to="/about">เกี่ยวกับฉัน</NavLink></li>
      <li><NavLink to="/cart">ตะกร้า</NavLink></li>
    </ul>
  </div>
</div>
  )
}

export default Navbar_Frontend
