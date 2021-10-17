import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "../routeComponents/Home";
import AuthRouter from "../routeComponents/auth/AuthRouter";
import Main from "../components/main/Main";

import NavaBar from "./nav/NavBar";

import { AuthContextComponent } from "../contexts/authContext";
import PrivateRoute from "../routeComponents/auth/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <AuthContextComponent>
        <NavaBar />
        <div id='main-container'>
          <main id='site-content'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/auth' component={AuthRouter} />

              <PrivateRoute path='/main' component={Main} />
            </Switch>
          </main>
        </div>
      </AuthContextComponent>
    </BrowserRouter>
  );
}

export default App;
