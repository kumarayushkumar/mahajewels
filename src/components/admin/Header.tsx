import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="header">
      <div className="header__title">
        <h1>Admin Panel</h1>
      </div>
      <div className="header__logout">
        <Link to="/login">Logout</Link>
      </div>
    </div>
  )
}
