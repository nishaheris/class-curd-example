import "./App.css";
import Navbar from "./components/Navbar";
import Allemployee from "./components/Allemployee";
import AddEmployee from "./components/AddEmployee";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ViewEmployee from "./components/ViewEmployee";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Allemployee} />
            <Route path="/add-employee/:id" component={AddEmployee} />
            <Route path="/employee/:id" component={ViewEmployee} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
