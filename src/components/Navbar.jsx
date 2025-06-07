import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const user = useSelector((store) => store.user)

  return (
    <div className="navbar bg-base-300 shadow-sm">
        <div className="flex-1">
        <a className="btn btn-ghost text-xl">Dev Tinder 🧑‍💻👩‍💻</a>
        </div>
        { user && <div className="flex gap-2">
          <div className="flex flex-row items-center">
            <p className="text-lg font-bold mt-1">Welcome {user?.firstName}</p>
          </div>
          <div className="dropdown dropdown-end mx-5 flex flex-row">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                  <img
                  alt="Tailwind CSS Navbar component"
                  src={user?.photoUrl} />
              </div>
              </div>
              <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <Link to="/profile">
                  <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                  </a>
              </Link>
              <Link to="/settings">
                  <a className="justify-between">
                  Settings
                  </a>
              </Link>
              <Link to="/logout">
                  <a className="justify-between">
                  Logout
                  </a>
              </Link>
              </ul>
          </div>
        </div>}
    </div>
  )
}

export default Navbar