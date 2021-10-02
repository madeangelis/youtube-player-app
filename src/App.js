import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import VideoInfo from "./components/VideoInfo";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/info" component={VideoInfo} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
