import React from 'react';
import '../styling/BookCard.css';

const BookCard = ({ title }) => {
  return (
    <div className="book-card">
      <div className="book-cover" />
      <p>{title}</p>
    </div>
  );
};

export default BookCard;