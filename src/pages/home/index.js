import { Container, CharactersList, OneCharacter } from "./styles";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://api.disneyapi.dev/characters")
      .then((response) => response.json)
      .then((characters) => setCharacters(characters.data));
  }, []);

  return (
    <Container>
      <h1>PERSONAGENS</h1>
      <CharactersList>
        {characters.map((character) => {
          return (
            <OneCharacter key={character._id}>
              <Link to={`/details/${characters._id}`}>
                <img src={character.imageUrl} alt={character.name} />
              </Link>

              <span>{character.name}</span>
            </OneCharacter>
          );
        })}
      </CharactersList>
    </Container>
  );
}

export default Home;
