import React, { useState } from 'react';
import './ProductReviews.css';

const ProductReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !rating || !comment) {
      alert('Please fill out all fields.');
      return;
    }

    const newReview = {
      id: Date.now(),
      name,
      rating,
      comment,
      date: new Date().toLocaleDateString()
    };

    setReviews([newReview, ...reviews]);
    setName('');
    setRating(0);
    setComment('');
  };

  return (
    <div className="p-4 bg-light rounded-4 shadow-lg">
      <h2 className="text-center mb-4 text-primary">Customer Reviews</h2>

      <form className="mb-5" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Your Name"
            className="form-control rounded-pill border-secondary"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3 text-center">
          {[1, 2, 3, 4, 5].map((num) => (
            <span
              key={num}
              className={`fs-4 mx-1 ${num <= rating ? 'text-warning' : 'text-muted'} cursor-pointer`}
              style={{ cursor: 'pointer' }}
              onClick={() => setRating(num)}
            >
              ★
            </span>
          ))}
        </div>

        <div className="mb-3">
          <textarea
            placeholder="Write your review..."
            className="form-control rounded-4"
            rows="4"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-100 rounded-pill">
          Submit Review
        </button>
      </form>

      <div>
        {reviews.length === 0 ? (
          <p className="text-center text-muted">No reviews yet. Be the first to leave one!</p>
        ) : (
          reviews.map((review) => (
            <div key={review.id} className="mb-4 p-3 border rounded-4 bg-white shadow-sm">
              <div className="d-flex justify-content-between mb-1">
                <strong>{review.name}</strong>
                <span className="text-muted">{review.date}</span>
              </div>
              <div className="mb-2 text-warning">
                {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
              </div>
              <p className="mb-0">{review.comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductReviews;
