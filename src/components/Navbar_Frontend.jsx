import { NavLink } from "react-router-dom"
export const Navbar_Frontend = () => {
  return (
<div className="navbar bg-blue-800 text-white">
  <div className="flex-1 mx-10">
    <img className="animate-spin-slow w-8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" />
    <NavLink to="/" className="btn btn-ghost normal-case text-xl">React Project</NavLink>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink to="/">หน้าแรก</NavLink></li>
      <li><NavLink to="/about">เกี่ยวกับฉัน</NavLink></li>
      <li><a>ติดต่อ</a></li>
    </ul>
  </div>
</div>
  )
}

export default Navbar_Frontend
