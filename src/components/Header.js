import React from 'react'
import trollface from '../icons/Troll Face.png'

const Header = () => {
    return (
        <header className="headerContainer">
            <img src={trollface} alt="trollface" id="trollface"/>
            <h1>Meme Generator</h1>
            <p>React Course - Project 3</p>
        </header>
    )
}

export default Header;