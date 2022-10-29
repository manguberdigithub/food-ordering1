import React from 'react';
import { Link } from 'react-router-dom';
// import sass'
import '../Header';
/*-------Import Vectors From Assets----------*/
import search  from '../../../assets/vectors/search.svg';
import bag  from '../../../assets/vectors/bag.svg';
/*-------/Import Vectors From Assets----------*/

const Navbar = () => {
  return (
    <nav className='header_nav'>
      <div className='logo'>
            <Link to="/">
                    <h3>ALFOOD</h3>
            </Link>
      </div>
    </nav>
  )
}

export default Navbar
