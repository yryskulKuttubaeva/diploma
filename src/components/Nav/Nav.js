import "./Nav.css";

function Nav() {
  return (
    <nav className="Nav">
      <div>Optics</div>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/">Glass</a></li>
        <li><a href="/">Solar</a></li>
        <li><a href="/">Minus(-)</a></li>
        <li><a href="/">Plus(+)</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
