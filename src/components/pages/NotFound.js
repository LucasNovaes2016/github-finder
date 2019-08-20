import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>oops...</h1>
      <p className='lead'>A página que você está procurando não existe!</p>
      <Link to='/'>Voltar para a página inicial</Link>
    </div>
  );
};

export default NotFound;
