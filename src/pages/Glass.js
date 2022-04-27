import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import { getGlass } from "../data/glassa";

function Glass() {
  const params = useParams();
  const glass = getGlass(params.glassId);

  if (!glass) {
    return null;
  }

  return (
    <>
      <Header
        title={glass.title}
        image={glass.image}>
        {glass.description}
      </Header>
    </>
  );
}

export default Glass;