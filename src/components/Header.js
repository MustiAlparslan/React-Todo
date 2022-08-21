import React from 'react'
import {Link} from "react-router-dom"

function Header() {
  return (
    <div>
        <header className="w-full h-16 bg-sky-500  	">
          <Link to="/">
            <h1 className="text-3xl text-white leading-[60px]	text-center ">TODO</h1>
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