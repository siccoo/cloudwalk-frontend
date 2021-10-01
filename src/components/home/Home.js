import React from "react";
import { Link } from "react-router-dom";

import "./Home.scss";

const Home = () => {
  return (
    <div className="starwar__container">
      <header>
        <div>
          <Link to="/">Star Wars Characters</Link>
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
                <option value="">Planets</option>
                <option value="">Planets</option>
                <option value="">Planets</option>
                <option value="">Planets</option>
                <option value="">Planets</option>
              </select>
            </form>
          </div>
          <div>
            <button type="button" disabled>
              Clear all
            </button>
          </div>
        </div>
        <hr />
        <section>
          <p>All Characters</p>
          <div></div>
        </section>
      </main>
    </div>
  );
};

export default Home;
