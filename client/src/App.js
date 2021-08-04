import TopBar from "./component/topbar/TopBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const user = false;
  return (
    <div className="App">
      <Router>
        <TopBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/write" component={user ? Write : Login} />
          <Route exact path="/settings" component={user ? Settings : Login} />
          <Route exact path="/post" component={Single} />
          <Route exact path="/login" component={user ? Home : Login} />
          <Route path="/register" component={user ? Home : Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
