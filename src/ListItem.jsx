import { Link } from 'react-router-dom'
const ListItem = ({ puppy }) => {

  return (
    <div
      className="list-item"
      key={puppy.id}
    >
      <h2>{puppy.name}</h2>
      <img
        src={puppy.imageUrl}
        alt={`a picture of ${puppy.name}`}
      /><br />
      <Link to={`/details/${puppy.id}`} >
        <button className='button-style'> see details</button>
      </Link>
    </div>
  )
}

export default ListItem