import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/shared/Header/Header";
import TaskView from "./pages/TaskView/TaskView";
import TaskAdd from "./pages/TaskAdd/TaskAdd";
import TaskEdit from "./pages/TaskEdit/TaskEdit";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/add" component={TaskAdd} />
        <Route path="/view/:id" component={TaskView} exact={true} />
        <Route path="/edit/:id" component={TaskEdit} exact={true} />
      </Switch>
    </div>
  );
}

export default App;
