import React, { Component } from 'react';
import "./navbar.css"

export class Navbar extends Component {
    render() {

        return (
            <div>
                <nav className="navMenu">
                    <a href="#">Home</a>
                    <a href="#">Blog</a>
                    <a href="#">Work</a>
                    <a href="#">About</a>
                    <div className="dot">
                    </div>
                </nav>
            </div>
        )
    }
}
export default Navbar;