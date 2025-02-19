import { useState } from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </div>
  )
}

export default App
