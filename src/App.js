import "./App.css";

//Components
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
//ReactElements
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/login" component={Login} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
