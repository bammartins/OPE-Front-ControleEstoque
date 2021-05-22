import styled from 'styled-components';
import Header from './Header';
import Main from './Main'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './Login';

const Base = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(./fundo.jpg);
  background-attachment: fixed;
  background-size: 100% 100%;'
`;

function App() {
  return (
    <Base>
      <Router>
        <Switch>
          <Route exact path="/home">
            <Header className="container" />
            <Main className="container" />
          </Route>
          <Route exact to="/login">
            <Login className="container" />
          </Route>
        </Switch>
      </Router>
    </Base>
  );
}

export default App;
