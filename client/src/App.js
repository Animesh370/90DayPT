import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'

function App() {
  // const navigate = useNavigate();

  return (
    <>
      <BrowserRouter>
        {/* <LandingPage /> */}
        <Routes>
          <Route 
            path='/' 
            element={<LandingPage />}
          />
          <Route 
            path='/login' 
            element={<Login />}
          />
          {/* <Route 
            path='/signup' 
            element={<Signup />}
          /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
