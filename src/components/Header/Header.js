import "./Header.css";
import headerImage from "../../assets/header.jpg";


function Header() {
  const style = {
    backgroundImage: `url(${headerImage})`
  
  };

  return (
    <header className="Header" style={style}>
      <h1>I see perfectly</h1>
      <h3 > Welcome to our optics shop</h3> 
    
     

    </header>
  );
}

export default Header;