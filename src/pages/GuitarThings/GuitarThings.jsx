import ThingCard from "../../components/ThingCard/ThingCard";
import { Link } from "react-router-dom";

const GuitarThings = (props) => {
  return (
    <>
      <h1>Ryan's Things</h1>
      <Link to="/">Home</Link>

      {props.things.map((thing, idx) => 
        <ThingCard key={idx} thing={thing}/>
      )}
    </>
  )
}
 
export default GuitarThings