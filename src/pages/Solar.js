import "./pages.css"
import Header from "../components/Header/Header";
import titleImage from "../assets/glass.jpg";

function Solar() {
  return (
    <>
      <Header
       title = "Now i can see the cun"
        image={titleImage}>
              If you're the owner of a residential or commercial building, use this guide to help decide if solar energy is right for you.

      </Header>
    </>
  );
}

export default Solar;