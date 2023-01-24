import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Container } from "./styles";

function Details() {
  const { id } = useParams();

  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`https://api.disneyapi.dev/characters/${id}`)
      .then((response) => response.json)
      .then((data) => {
        const { films, shortFilms, tvShows, videoGames, name, imageUrl } = data;

        const character = {
          id,
          filmes: films,
          curtas: shortFilms,
          series: tvShows,
          videoGames,
          nome: name,
          imagem: imageUrl,
        };

        setCharacter(character);
      });
  }, [id]);

  return (
    <Container>
      <div className="character">
        <img src={character.imagem} alt={character.nome} />
        <div className="details">
          <h1>{character.nome}</h1>
          <span>filmes: {character.filmes}</span>
          <span>Curtas: {character.curtas}</span>
          <span>Series: {character.series}</span>
          <span>Jogos: {character.videoGames}</span>
          <Link to="/">
            <button>Voltar</button>
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default Details;
