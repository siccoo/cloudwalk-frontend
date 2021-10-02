import React, { useState } from "react";
import { Link } from "react-router-dom";
import swapiApi from "../../utils/swapi";

import "./Home.scss";

const Home = () => {
  const [mapPlanets, setMapPlanets] = useState();
  const [movies, setMovies] = useState();
  const [state, setState] = useState(false);
  const [characters, setCharacters] = useState([]);

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
              <select>
                <option value="">All</option>
                <option value="">Earth</option>
                <option value="">Tatooine</option>
                <option value="">Alderaan</option>
                <option value="">Yavin IV</option>
                <option value="">Bespin</option>
                <option value="">Naboo</option>
                <option value="">Coruscant</option>
              </select>
            </form>
          </div>
          <div>
            <button type="button">Clear all</button>
          </div>
        </div>
        <hr />
        <section>
          <p>All Characters</p>
          <div className="starwar__box__align__center">
            <div className="starwar__card">
              <a href="/ja">
                <img src="" alt="" />
              </a>
              <div className="card__body">
                <h4>Name 2</h4>
                <h6>Homeworld/Planet Name</h6>
                <p>HEIGHT • 100M</p>
                <p>MASS • 100kg</p>
                <p>GENDER • FEMALE</p>
              </div>
            </div>
            <div className="starwar__card">
              <a href="/ja">
                <img src="" alt="" />
              </a>
              <div className="card__body">
                <h4>Name 2</h4>
                <h6>Homeworld/Planet Name</h6>
                <p>HEIGHT • 100M</p>
                <p>MASS • 100kg</p>
                <p>GENDER • FEMALE</p>
              </div>
            </div>
            <div className="starwar__card">
              <a href="/ja">
                <img src="" alt="" />
              </a>
              <div className="card__body">
                <h4>Name 2</h4>
                <h6>Homeworld/Planet Name</h6>
                <p>HEIGHT • 100M</p>
                <p>MASS • 100kg</p>
                <p>GENDER • FEMALE</p>
              </div>
            </div>
            <div className="starwar__card">
              <a href="/ja">
                <img src="" alt="" />
              </a>
              <div className="card__body">
                <h4>Name 2</h4>
                <h6>Homeworld/Planet Name</h6>
                <p>HEIGHT • 100M</p>
                <p>MASS • 100kg</p>
                <p>GENDER • FEMALE</p>
              </div>
            </div>
            <div className="starwar__card">
              <a href="/ja">
                <img src="" alt="" />
              </a>
              <div className="card__body">
                <h4>Name 2</h4>
                <h6>Homeworld/Planet Name</h6>
                <p>HEIGHT • 100M</p>
                <p>MASS • 100kg</p>
                <p>GENDER • FEMALE</p>
              </div>
            </div>
            <div className="starwar__card">
              <a href="/ja">
                <img src="" alt="" />
              </a>
              <div className="card__body">
                <h4>Name 2</h4>
                <h6>Homeworld/Planet Name</h6>
                <p>HEIGHT • 100M</p>
                <p>MASS • 100kg</p>
                <p>GENDER • FEMALE</p>
              </div>
            </div>
            <div className="starwar__card">
              <a href="/ja">
                <img src="" alt="" />
              </a>
              <div className="card__body">
                <h4>Name 2</h4>
                <h6>Homeworld/Planet Name</h6>
                <p>HEIGHT • 100M</p>
                <p>MASS • 100kg</p>
                <p>GENDER • FEMALE</p>
              </div>
            </div>
            <div className="starwar__card">
              <a href="/ja">
                <img src="" alt="" />
              </a>
              <div className="card__body">
                <h4>Name 2</h4>
                <h6>Homeworld/Planet Name</h6>
                <p>HEIGHT • 100M</p>
                <p>MASS • 100kg</p>
                <p>GENDER • FEMALE</p>
              </div>
            </div>
            <div className="starwar__card">
              <a href="/ja">
                <img src="" alt="" />
              </a>
              <div className="card__body">
                <h4>Name 2</h4>
                <h6>Homeworld/Planet Name</h6>
                <p>HEIGHT • 100M</p>
                <p>MASS • 100kg</p>
                <p>GENDER • FEMALE</p>
              </div>
            </div>
            <div className="starwar__card">
              <a href="/ja">
                <img src="" alt="" />
              </a>
              <div className="card__body">
                <h4>Name 2</h4>
                <h6>Homeworld/Planet Name</h6>
                <p>HEIGHT • 100M</p>
                <p>MASS • 100kg</p>
                <p>GENDER • FEMALE</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
