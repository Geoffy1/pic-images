import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Upload from './Components/Upload';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes> {/* Use Routes instead of Switch */}
            <Route path="/" element={<Home />} />
            <Route path="/upload" element={<Upload />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;