
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='Navbar'>
            <Link to='/'>
                ECOMMERCE
            </Link>
            <div className="Categories">
                <Link to='/category/router' className="Option">Routers</Link>
                <Link to='/category/switch' className="Option">Switches</Link>
                <Link to='/category/radio' className="Option">Antenas</Link>
            </div>
            <CartWidget />
        </nav>
        
    )
}

export default Navbar