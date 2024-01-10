import React, { useState } from "react";
import Stars from "./stars";
import Accordion from "react-bootstrap/Accordion";

const Item = ({ item, index, updateItems }) => {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [localItem, setLocalItem] = useState(item);

  const calculateAverageRating = (ratings) => {
    if (!ratings || ratings.length === 0) return "No ratings";
    const sum = ratings.reduce((a, b) => a + b, 0);
    return (sum / ratings.length).toFixed(2);
  };

  const handleSubmitReview = (event) => {
    event.preventDefault();
    const newReview = {
      reviewer: event.target.reviewer.value,
      review: event.target.review.value,
    };
  
    const updatedItem = {
      ...localItem,
      reviews: [...localItem.reviews, newReview],
    };
  
    setLocalItem(updatedItem); // Update local state only
  
    setShowReviewForm(false);
    event.target.reset();
  };
  

  return (
    <>
      <Accordion.Header>{localItem.name}</Accordion.Header>
      <Accordion.Body>
        <p>{localItem.description}</p>
        <p>{localItem.address}</p>
        <p>{localItem.postcode}</p>
        <p>{localItem.phone}</p>
        <p> £{localItem.price}</p>
        <p><b>Average Rating:</b> {calculateAverageRating(localItem.ratings)}</p>
        <Stars position={index} />

        {localItem.reviews && localItem.reviews.length > 0 && (
          <>
            <h4><b>Reviews:</b></h4>
            <ul>
              {localItem.reviews.map((review, idx) => (
                <li key={idx}>{review.reviewer}: "{review.review}"</li>
              ))}
            </ul>
          </>
        )}

        <button onClick={() => setShowReviewForm(!showReviewForm)}>
          Add Review
        </button>

        {showReviewForm && (
          <form onSubmit={handleSubmitReview}>
            <input type="text" placeholder="Your Name" name="reviewer" required />
            <textarea placeholder="Your Review" name="review" required />
            <button type="submit">Submit Review</button>
          </form>
        )}
      </Accordion.Body>
    </>
  );
};

export default Item;
