import React from 'react';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Login from './pages/login';
import SignUp from './pages/signup'
import Homepage from './pages/homepage';

const App = () => {
  const [isSignInMode, setIsSignInMode] = useState(true);

    // Function to toggle between SignIn and SignUp components
    const toggleAuthMode = () => {
        setIsSignInMode((prevMode) => !prevMode);
    };

    return (
        <Router>
            <div className="app-container">
                <Routes>
                    <Route path="/" element={isSignInMode ? <Login toggleAuthMode={toggleAuthMode} /> : <SignUp toggleAuthMode={toggleAuthMode} />} />
                    <Route path="/Home" element={<Homepage />} /> 
                </Routes>
            </div>
        </Router>
    );
};

export default App;