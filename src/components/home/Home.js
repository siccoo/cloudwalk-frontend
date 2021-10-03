import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import swapiApi from "../../utils/swapi";

import "./Home.scss";

const Home = () => {
  const [mapPlanets, setMapPlanets] = useState();
  const [movies, setMovies] = useState();
  const [state, setState] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [table, setTable] = useState(false);

  useEffect(() => {
    // first api call to get starwars planets
    const planet = () => {
      return swapiApi({
        path: "https://swapi.dev/api/planets/",
        payload: null,
        method: "GET",
      })
        .then((result) => {
          // console.log(result)
          setMapPlanets(result);
          setState(true);
        })
        .catch((err) => console.log(err));
    };

    planet();
  }, []);

  const handleChange = (e) => {
    // console.log("Movie Selected!!", e.target.value);
    setMovies(e.target.value);

    // filter the selected movie based on all movies array,  and get the characters for that particular movies
    let Obj = mapPlanets.results.filter((o) =>
      o.name.toLowerCase().includes(e.target.value.toLowerCase().trim())
    );
    // console.log(Obj[0].characters);

    // save the character to a variable
    let newResidents = Obj[0].residents;

    let requests = newResidents.map((url) => {
      return swapiApi({
        path: url,
        payload: null,
        method: "GET",
      })
        .then((result) => {
          // console.log(result);
          return result;
          // get each result from each character and till promises resolves.
        })
        .catch((err) => console.log(err));
    });

    Promise.all(requests).then((responses) => {
      console.log(responses);
      setCharacters(responses);
      setTable(true);
    });
  };



  let list = characters.map((character, i) => {
    return (
      <div className="starwar__items__card" key={i}>
        <a href="/ja">
          <img src={"https://picsum.photos/304/228"} alt="" />
        </a>
        <div className="starwar__items__card__body">
          <h4>{character.name}</h4>
          <h6>{movies}</h6>
          <p>{character.height}</p>
          <p>MASS • 100kg</p>
          <p>GENDER • FEMALE</p>
        </div>
      </div>
    );
  });

  return (
    <div className="starwar__container">
      <header>
        <div>
          <Link to="/" className="header__text">
            Star Wars Characters
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </header>
      <main>
        <hr />
        <div className="starwar__box__align">
          <div>
            <form>
              <label>Filter By:</label>
              {state && (
                <select value={movies} onChange={handleChange}>
                  <option value="">Planets</option>
                  {mapPlanets.results.map((option, index) => (
                    <option value={option.name} key={index}>
                      {option.name}
                    </option>
                  ))}
                </select>
              )}
            </form>
          </div>
          <div>
            <button type="button" className="starwar__box__align__button">
              Clear all
            </button>
          </div>
        </div>
        <hr />
        <section className="starwar__grid">
          <p>All Characters</p>
          <div className="starwar__items">{table && list}</div>
          <div className="starwar__button">
            <button type="submit" onClick={handleChange}>Load More</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
