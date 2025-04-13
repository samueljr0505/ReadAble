import React from 'react';
import '../styling/BottomNav.css'

const BottomNav = () => {
  return (
    <nav className="bottom-nav">
      <button>🔖 Bookmarks</button>
      <button>🧠 Timer</button>
      <button>👤 Profile</button>
    </nav>
  );
};

export default BottomNav;