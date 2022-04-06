import "./Header.css";
import headerImage from "../../assets/header.jpg";

function Header() {
  const style = {
    backgroundImage: `url(${headerImage})`
  };

  return (
    <header className="Header" style={style}>
      <h1>I see perfectly</h1>
      <p>You want to see great too. Then welcome o us</p>
     

    </header>
  );
}

export default Header;