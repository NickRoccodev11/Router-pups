import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div id="navbar">
      <Link to="/"> Home </Link>
      <Link to="/form">Add a Puppy</Link>
    </div>
  )
}

export default Navbar