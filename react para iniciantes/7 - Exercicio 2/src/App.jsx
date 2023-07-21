import React from 'react';

const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786'],
  },
];

function App() {

  produtos.filter(({preco}) => {
    console.log(+preco.slice(3))
  })

  return (
    <>
      <h1>Produtos:</h1>
      <ul style={{ listStyle: 'none' }}>
        {produtos
        .filter(({preco}) => +preco.replace('R$ ', '') > 1500)
        .map(({ nome, preco, cores }, index) => (
          <div key={index}>
            <h3>{nome}</h3>
            <p>{preco}</p>
            <ul>
              {cores.map((cor, index) => (
                <li
                  key={cor}
                  style={{
                    color: 'white',
                    backgroundColor: cor,
                    padding: '10px',
                  }}
                >
                  {cor}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </ul>
    </>
  );
}

export default App;
