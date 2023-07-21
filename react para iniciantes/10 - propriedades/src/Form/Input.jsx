import React from 'react';

function Input({ tipo, nome, ...props }) {
  return (
    <>
      <label htmlFor={nome}>{nome}</label>
      <input type={tipo} name={nome} {...props}/>
    </>
  );
}

export default Input;
