// import cart from "../assets/svgs/cart.svg";
import { Link } from 'react-router-dom';
import { ProductCategory } from '../interface'
export default function Header() {
  return (
    <>
      <header className='header'>
        <div className="header__logo" >
          <p>MahaJewels</p>
        </div>
        <nav className="header__nav">
          <div className="icons__search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          <div className="icons__user">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div className="icons__cart">CART</div>
        </nav>
      </header>
      <div className="category">
        <ul className="category__list">
          {Object.values(ProductCategory).map(category => (
            <Link to={`category/${category}`}>
              <li className="list__item" id={category}>
                {category}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  )
}
