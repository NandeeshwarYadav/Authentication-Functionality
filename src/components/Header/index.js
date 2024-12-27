// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav>
    <ul className="nav">
      <li className="link">
        <Link to="/">Home</Link>
      </li>
      <li className="link">
        <Link to="/about">About</Link>
      </li>
    </ul>
  </nav>
)

export default Header
