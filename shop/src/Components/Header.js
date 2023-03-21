import React from 'react';

export default function Header() {
    return (
        <header className='header'>
            <div className='container'>
                <div className='header-nav'>
                    <img src="logo.png" alt="company logo"></img>
                    <nav className='nav'>
                        <ul className='nav-list'>
                            <li className='nav-item'><a href="/#">living room</a></li>
                            <li className='nav-item'><a href="/#">bedroom</a></li>
                            <li className='nav-item'><a href="/#">kitchen &  dining</a></li>
                            <li className='nav-item'><a href="/#">contact</a></li>
                        </ul>
                    </nav>
                    <div className='header-menu__tools'>
                        <span>icons</span>
                    </div>
                </div>
            </div>
        </header>
    )
}
