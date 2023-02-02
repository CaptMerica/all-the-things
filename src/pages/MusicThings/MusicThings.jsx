import ThingCard from '../../components/ThingCard/ThingCard'
import { Link } from 'react-router-dom'

const MusicThings = (props) => {
  return (
    <>
      <h1>Patrick's Things</h1>
      <Link to="/">Home</Link>

      {props.things.map((thing, idx) => 
        <ThingCard key={idx} thing={thing}/>
      )}
    </>
  )
}
 
export default MusicThings