import { Link } from "react-router-dom"
import './Header.css' 

export default function Header() {

    return (
        <>
            <header className='main-header'>
                <h1>Aequor Luna</h1>
                <div className="links-header">
                    <Link to='/' className="link-header">blog</Link>
                    <Link to='/' className="link-header">about</Link>
                </div>
            </header>
        </>
    )
};


