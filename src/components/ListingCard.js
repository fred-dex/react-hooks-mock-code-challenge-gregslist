import { useState} from "react";


function ListingCard({ listing, onDeleteListing }) {
  const { id, image, description, location } = listing
  const [isFav, setIsFav] = useState(false)

  function handleDelete() {
    fetch(`http://localhost:6001/listings/${id}`, {
    method: 'DELETE',
    })
    .then((r) => r.json()) 
    // console.log('Yo')
    .then(() =>
      onDeleteListing(id))
  }
  
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFav ? ( 
          <button onClick={() => setIsFav(false)}
          className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={() => setIsFav(true)}
          className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
 }


export default ListingCard;
