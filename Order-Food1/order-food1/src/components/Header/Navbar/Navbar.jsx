import React from 'react';
import { Link } from 'react-router-dom';
// import sass'
import './Navbar.scss';
/*-------Import Vectors From Assets----------*/
import search from '../../../assets/vectors/search.svg';
import bag from '../../../assets/vectors/bag.svg';
/*-------/Import Vectors From Assets----------*/

const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='nav_logo'>
        <Link to="/">
          <h3>ALFOOD</h3>
        </Link>
      </div>
      <ul className='nav_ul'>
        <li className='nav_ul_list'>
          <Link to="/">Home</Link>
        </li>
        <li className='nav_ul_list'>
          <Link to="/">About</Link>
        </li>
        <li className='nav_ul_list'>
          <Link to="/">Menu</Link>
        </li>
        <li className='nav_ul_list'>
          <Link to="/">Blog</Link>
        </li>
        <li className='nav_ul_list'>
          <Link to="/">Contact</Link>
        </li>
      </ul>
      <div className="nav_wrapper">
        <div className='nav_wrapper_search'>
          <input type="text" placeholder='search' />
          <button className='nav_wrapper_search_btn'>
            <img src={search} alt="search" />
          </button>
        </div>
        <div className='nav_wrapper_bag'>
          <img src={bag} alt="search" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
