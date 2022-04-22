import { Link } from "react-router-dom";
import classes from "./GlassItem.module.css";

function GlassItem({ glass }) {
  return (
    <div className={classes.GlassItem}>
      <img src={glass.image} alt="img" />
      <Link to={glass.path}>{glass.title}</Link>
      <div className={classes.price}>${glass.price}</div>
    </div>
  );
}

export default GlassItem;