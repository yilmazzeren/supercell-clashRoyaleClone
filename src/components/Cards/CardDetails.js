import React, { useEffect, useState } from "react";
import { withRouter, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCards } from "../../redux/actions/cardsActions";
function CardDetails(props) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cardsReducer);
  const [imgValue, setImageValue] = useState("");

  useEffect(() => {
    dispatch(getCards());
    let value = props.location.pathname
      .replace("/details/static/media/", "")
      .split(".")[0];
    setImageValue(value);
  }, []);
  return (
    <div style={{ paddingTop: "100px" }}>
      {state.map((val) =>
        val.key === imgValue ? (
          <div>
            <h3>{val.name}</h3>
            <p>{val.description}</p>
            <p>{val.elixir}</p>
          </div>
        ) : null
      )}
      <Route>
        <Link to="/cards">Back to Cards</Link>
      </Route>
    </div>
  );
}

export default withRouter(CardDetails);
