import "./Nav.css";
import Logo from "../ui/Logo/Logo";
import NavItem from "./NavItem/NavItem";

function Nav() {
  return (
    <nav className="Nav">
      <Logo />
      <ul>
        <NavItem url="/">Home</NavItem>
        <NavItem url="/minus">Minus</NavItem>
        <NavItem url="/plus">Plus</NavItem>
        <NavItem url="./solar">Solar</NavItem>
        <NavItem url="./glass">Glass</NavItem>
      </ul>
    </nav>
  );
}

export default Nav;