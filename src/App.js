import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Nav } from './layout/Navigation'
import Home from './pages/landingPage/LandingPage'
import Exhibition from './pages/exhibition/Exhibition'
import SignIn from './pages/accountLogin/SignIn'
import AuthProvider from './context/AuthContext'
import Dashboard from './pages/dashboard/Dashboard'


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;


function App() {
  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <header>
          <BrowserRouter>
            <Nav />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/exhibition' component={Exhibition} />
              <Route path='/signin' component={SignIn} />
              <Route path='/dashboard' component={Dashboard} />
            </Switch>
          </BrowserRouter>
        </header>
      </AuthProvider>
    </>
  );
}

export default App;
