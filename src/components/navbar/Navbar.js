import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {

  return (
      <nav className="NavBar" >
          <Link to='/'>
            <h3>Ecommerce</h3>
          </Link>
          <div className="Categories">
              <NavLink to='/category/router' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Routers</NavLink>
              <NavLink to='/category/switch' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Switches</NavLink>
              <NavLink to='/category/radio' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Antenas</NavLink>
          </div>
          <CartWidget />
      </nav>
  )
}

export default NavBar