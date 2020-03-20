import React from 'react'
import './header.css'

const Header = () => {
    return (
        <div className="header d-flex">
            <h2>
                <a href="#">
                    Start DB
                </a>
            </h2>
            <ul className="d-flex justify-content-end">
                <li>
                    <a href="#">People</a>
                </li>

                <li>
                    <a href="#">Planets</a>
                </li>

                <li>
                    <a href="#">Starships</a>
                </li>
            </ul>
        </div>
    )
}

export default Header 