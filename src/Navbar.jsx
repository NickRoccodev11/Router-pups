import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div id="navbar">
      <NavLink to="/"> Home </NavLink>
      <NavLink to="/form">Add a Puppy</NavLink>
    </div>
  )
}

export default Navbar