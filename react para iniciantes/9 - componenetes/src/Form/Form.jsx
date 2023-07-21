import React from 'react';
import Input from './Input';
import Button from './Button';

function Form() {
  return (
    <form>
      <label htmlFor="nome">Nome</label>
      <Input />
      <label htmlFor="email">E-mail</label>
      <Input />
      <Button />
    </form>
  );
}

export default Form;
