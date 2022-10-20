import { Link } from 'react-scroll'
import Logo from '../../Assets/Images/logo.png'
import './navbar.css'

function NavBar() {
  return (
    <div className="main-background">
      <nav className="nav">
        <div className="left-menu">
          <ul>
            <li>
              <Link to="main" spy={true} smooth={true} duration={500}>
                Accueil
              </Link>
            </li>
            <li>
              <Link to="assistances" spy={true} smooth={true} duration={500}>
                Services
              </Link>
            </li>
            <li>
              <Link to="dentists" spy={true} smooth={true} duration={500}>
                Dentistes
              </Link>
            </li>
            <li>
              <Link to="team" spy={true} smooth={true} duration={500}>
                L'équipe
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <img className="logo" src={Logo} alt="logo"></img>
        </div>
        <div className="right-menu">
          <ul>
            <li>
              <Link to="/">Clinique</Link>
            </li>
            <li>
              <Link to="/">Carrière</Link>
            </li>
            <li>
              <Link to="/">Nous-joindre</Link>
            </li>
            <li>
              <Link to="/">English</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
