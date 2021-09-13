import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import TaskAdd from "./pages/TaskAdd/TaskAdd";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/add" exact={true} component={TaskAdd} />
      </Switch>
    </div>
  );
}

export default App;
