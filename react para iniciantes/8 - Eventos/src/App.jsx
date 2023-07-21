import React from 'react';

function App() {
  function handleClick(event) {
    console.log(event.target);
  }

  const handleScroll = (event) => {
    console.log(event);
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <div style={{ height: '200vh'}}>
      <button onClick={(event) => console.log(event.target.innerText)}>
        Click
      </button>
    </div>
  );
}

export default App;
