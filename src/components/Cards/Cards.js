import React from "react";
import "./Cards.css";
import { Route, Link } from "react-router-dom";
import CardDetails from "./CardDetails";
function Cards() {
  function importAll(r) {
    return r.keys().map(r);
  }
  const images = importAll(
    require.context("../../cards-image", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <div className="cards-container">
      {images.map((i) => (
        <>
          <Link to={"/details" + i.default}>
            <img key={i.default} alt={i.default} width="150" src={i.default} />
          </Link>
          <Route path={"/details" + i.default}>
            <CardDetails />
          </Route>
        </>
      ))}
    </div>
  );
}

export default Cards;
