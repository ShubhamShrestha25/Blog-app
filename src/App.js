import TopBar from "./component/topbar/TopBar";
import Home from "./pages/home/Home";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";

function App() {
  return (
    <div className="App">
      <TopBar />
      {/* <Home /> */}
      {/* <Single /> */}
      {/* <Write /> */}
      <Settings />
    </div>
  );
}

export default App;
