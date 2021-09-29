import React from "react";
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div className="starwar__container">
      <header>
          <div>
              <Link to="/">Star Wars Characters</Link>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
      </header>
    </div>
  );
};

export default Home;
