import { React } from 'react';

const App = () => {
  // const produtos = ['Notebook', 'Smarphone', 'Tablet'];
  /* const produtos2 = [
    <li key="e1">Notebook</li>,
    <li key="e2">Smartphone</li>,
    <li key="e3">Tablet</li>,
  ]; */

  // const filmes = ['Before Sunrise', 'Before Sunset', 'Before Midnight'];

  const livros = [
    { nome: 'A Game of Thrones', ano: 1996 },
    { nome: 'A Clash of Kings', ano: 1998 },
    { nome: 'A Storm of Swords', ano: 2000 },
  ];

  return (
    <>
      <ul>
        {livros
        .filter(({ano}) => ano >= 1998)
        .map(({nome, ano}) => (
          <li key={nome}>{nome}, {ano}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
