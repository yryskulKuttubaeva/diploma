import Header from "../components/Header/Header";
import headerImage from "../assets/glass.jpg";
import GlassList from "../components/GlassList/GlassList";


import glassImage from "../assets/glass1.jpg";

function Glass() {
  const glass = {
    hazelnut: {
      image: glassImage,
      path: "/",
      title: "Glass",
      price: 10,
    },
    darkRoast: {
      image: glassImage,
      path: "/",
      title: "Dark roast",
      price: 12,
    },
    houseBlend: {
      image: glassImage,
      path: "/",
      title: "House blend",
      price: 14,
    },
    lightRoast: {
      image: glassImage,
      path: "/",
      title: "Light roast",
      price: 13,
    }
  };

  return (
    <>
      <Header
        title="I good see!"
        image={headerImage}>
        The fruits; cherries or berries, most commonly contain two stones with their flat sides together. A small percentage of cherries contain a single seed, instead of the usual two. This is called a "peaberry".
      </Header>

      <GlassList glass={glass} />
    </>
  );
}
export default Glass;