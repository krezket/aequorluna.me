import { Link } from "react-router-dom"
import './Header.css' 

export default function Header() {

    return (
        <>
            <header className='main-header'>
                <Link to="/" className="link-main"> <h1>Aequor Luna</h1> </Link>

                <div className="links-header">
                    <Link to='/blog' className="link-header">blog</Link>
                    <Link to='/art' className="link-header">art</Link>
                </div>
            </header>
        </>
    )
};
