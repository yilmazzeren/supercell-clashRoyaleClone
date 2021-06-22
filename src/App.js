/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Cards from "./components/Cards/Cards";
import { Switch, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import CardDetails from "./components/Cards/CardDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Layout}></Route>
        <Route path="/cards" component={Cards}></Route>
        <Route path="/details" component={CardDetails}></Route>
      </Switch>
    </div>
  );
}

export default App;
