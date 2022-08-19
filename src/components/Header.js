import React from 'react'
import {Link} from "react-router-dom"

function Header() {
  return (
    <div>
        <header className="w-full h-16 bg-sky-500 flex justify-around items-center	">
          <Link to="/">
            <h1 className="text-3xl text-white">LOGO</h1>
          </Link>
          <ul className="flex w-36 text-white justify-between">
            <Link to="">
              <li></li>
            </Link>
          </ul>
        </header>
    </div>
  )
}

export default Header