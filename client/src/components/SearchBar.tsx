import React from 'react';
import styled from 'styled-components';

function SearchBar() {
    const Button = styled.a`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: red;
  color: black;
  border: 2px solid white;`

    return (
      <div>
        <Button>Hola, soy un botón</Button>
      </div>
    )
}

export default SearchBar
