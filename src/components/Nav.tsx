import React from 'react'
import { Link } from "react-router-dom";


const Nav: React.FC = () => {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="equipment"> Equipment</Link>
            </nav>
        </div>
    )
}

export default Nav
