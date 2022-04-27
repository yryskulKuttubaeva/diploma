import glassImage from "../assets/header.jpg"

  const glassts = [
   {
      image: glassImage,
      path: "/",
      title: "Glass",
      price: 10,
    },
     {
      image: glassImage,
      path: "/",
      title: "Dark roast",
      price: 12,
    },
     {
      image: glassImage,
      path: "/",
      title: "House blend",
      price: 14,
    }, 
    {
      image: glassImage,
      path: "/",
      title: "Light roast",
      price: 13,
    }
  ];
     
  export function getGlassts() {
  return glassts;
}

export function getGlass(glassId) {
  return glassts[
    glassts.findIndex(
      glass =>  glass.glassId === glassId
    )
  ];
}