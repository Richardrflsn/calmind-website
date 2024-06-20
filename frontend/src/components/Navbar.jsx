import {NavLink} from 'react-router-dom'

const Navbar = ()  => {
    return (
      <div className="relative z-10 h-[100px] bg-black pt-5 flex justify-between items-center px-[8.5%]">
        <NavLink to='/'>
          <h3 className="text-white font-bold text-[25px]">CALMIND</h3>
        </NavLink>
        <nav className=''>
          <NavLink to='/talk-mind' className={({ isActive }) => isActive ? "navbar mx-5 active" : "navbar mx-5"}>
            <button className="navbar-button">Talk Mind</button>
          </NavLink>
          <NavLink to='/motivation' className={({ isActive }) => isActive ? "navbar mx-5 active" : "navbar mx-5"}>
            <button className="navbar-button">Motivation</button>
          </NavLink>
          <NavLink to='/talk-therapy' className={({ isActive }) => isActive ? "navbar mx-5 active" : "navbar mx-5"}>
            <button className="navbar-button">Talk Therapy</button>
          </NavLink>
        </nav>
        <button className="navbar-btn rounded-lg w-[75px] h-[41px] center hover:bg-gray-900">
          <img src="src\assets\sun.png" alt="" className="w-[60%] bg-transparent"/>
        </button>
      </div>
    )
}

export default Navbar