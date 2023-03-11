import "./App.css";
import { Route, Redirect } from "react-router-dom";
import Home from "./components/Home.jsx";

function App() {
  return (
    <div className="App">
      <Route path="/home" exact component={Home} />
      <Redirect to="/home" />
    </div>
  );
}

export default App;
