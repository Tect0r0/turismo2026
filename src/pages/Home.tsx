import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Bienvenido a Monterrey</h1>
      <h2>Porque nos visitas?</h2>
      <button onClick={() => navigate('/estadio')}>Mundial de fut</button>
      <button onClick={() => navigate('/turismo')}>Turismo local</button>
    </>
  );
};

export default Home;