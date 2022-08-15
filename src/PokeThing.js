import React, { useEffect, useState } from "react";

function GPTFunctional() {
  const [response, setResponse] = useState("");
  const [currentPokemon, setCurrentPokemon] = useState("");

  const POKE_URL = "https://pokeapi.co/api/v2/pokemon";

  useEffect(() => {
    const runFetch = async () => {
      const response = await fetch(`${POKE_URL}/${currentPokemon}`);
      const json = await response.json();

      setResponse(json);
    };

    if (currentPokemon) {
      runFetch();
    }
    
  }, [currentPokemon]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setCurrentPokemon(event.target.name.value); 
  };

  // add image to page

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <br />
      <br />
      <img src={response ? response.sprites.front_default : null}></img>
    </div>
  );
}

export default GPTFunctional;
