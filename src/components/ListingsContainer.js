import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ search }) {
  const [listings, setListings] =useState([])

 useEffect(() => {
  fetch('http://localhost:6001/listings')
  .then((r) => r.json())
  // .then(console.log)
  .then((listings) => setListings(listings))
 }, [])

//  console.log('listings')
function handleDeleteListing(id) {
  const updateListingItems = listings.filter (listing => listing.id !== id)
setListings(updateListingItems)
 }

 const filteredListings = listings.filter(listing => { 
  return listing.description.toLowerCase().includes(search.toLowerCase())
 })

 const listingCards = filteredListings.map((listingItem) => {
  return (
   <ListingCard
      key={listingItem.id}
      listing={listingItem}
      onDeleteListing={handleDeleteListing} />
 )
})
 
  return (
    <main>
      <ul className="cards">
        {listingCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
