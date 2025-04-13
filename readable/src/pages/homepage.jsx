import React from 'react';
import SearchBar from '../components/SearchBar';
import BookCard from '../components/BookCard';
import BottomNav from '../components/bottomnav';
import '../styling/Homepage.css';

const Homepage = () => {
  const recentBooks = ['The Hobbit', 'Atomic Habits', 'The Alchemist'];
  const suggestedBooks = ['Dune', '1984', 'To Kill a Mockingbird'];

  return (
    <div className="homepage-container">
      <div className="content">
        <h2>Welcome Back 👋</h2>
        <SearchBar />

        <div className="section">
          <h3>Recently Read</h3>
          <div className="book-list">
            {recentBooks.map((title, index) => (
              <BookCard key={index} title={title} />
            ))}
          </div>
        </div>

        <div className="section">
          <h3>Suggested For You</h3>
          <div className="book-list">
            {suggestedBooks.map((title, index) => (
              <BookCard key={index} title={title} />
            ))}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Homepage;