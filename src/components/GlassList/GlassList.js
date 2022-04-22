import GlassItem from "./Glasstem/GlassItem";
import classes from "./GlassList.module.css";

function GlassList({ glassts }) {
  const glassItems = Object.keys(glassts).map(id => (
    <GlassItem key={id} glass={glassts[id]} />
  ));

  return (
    <div className={classes.GlassList}>
      {glassItems}
    </div>
  );
}

export default GlassList;