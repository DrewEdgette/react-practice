import React, { useEffect, useState } from 'react'

function GPTFunctional() {
  const [response, setResponse] = useState("");
  const [currentPokemon, setCurrentPokemon] = useState("");

  const POKE_URL = 'https://pokeapi.co/api/v2/pokemon';

  useEffect(() => {
    const runFetch = async () => {
      const response = await fetch(`${POKE_URL}/${currentPokemon}`);
      console.log(await response.json())
    }
    runFetch();
  }, [currentPokemon])

  const handleSubmit = ((event) => {
    event.preventDefault();
    setCurrentPokemon(event.target.name.value)
  })

  const handleButton = async () => {

  }

  return (
    <div>
      <form onSubmit={e => {handleSubmit(e)}}>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit"/>
      </form>
      <br />
      <br />
      <img></img>
      <button onClick={handleButton}>Click</button>
    </div>);
}

export default GPTFunctional;