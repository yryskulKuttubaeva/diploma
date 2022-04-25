import "./pages.css"
import Header from "../components/Header/Header";
import headerImage from "../assets/header1.jpg";

function Home() {
  return (
    <>
      <Header
        title="Welcome to our optics shop"
        image={headerImage}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem culpa ab nam nostrum numquam labore veritatis.

      </Header>
    </>
  );
}

export default Home;