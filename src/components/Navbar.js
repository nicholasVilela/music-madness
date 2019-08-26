import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import BandList from './BandList'

class Navbar extends Component {
    render() {
        return (
            <nav id="navbar">
                <Link to={`/`}>Home</Link>
                <Link to={`/bands`}>Bands</Link>
                
            </nav>
        );
    }
}

export default Navbar;