import logo from './logo.svg';
import './style.css';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Redirect } from 'react-router-dom';


import Header from './components/Header';
import Home from './components/Home';


function App() {
  return (
    <div className='app' id='wrapper'>
      <BrowserRouter>
        <Header />
        <div id='content_area'>
          <Routes>
            <Route
              path='/youtube'
              component={() => {
                window.location.href =
                  'https://www.youtube.com/channel/UCo5RvWYDD6dnliwDwczjBbg';
                return null;
              }}
            />
            <Route
              path='/discord'
              component={() => {
                window.location.href = 'https://discord.gg/Pkg68y6';
                return null;
              }}
            />
            <Route
              path='/youtube'
              component={() => {
                window.location.href =
                  'https://www.youtube.com/channel/UCo5RvWYDD6dnliwDwczjBbg';
                return null;
              }}
            />
            <Route exact path='/' component={Home} />
            {/* <Route path='/about' component={About} />
            <Route path='/games' component={Games} />
            <Route path='/members' component={Members} />
            <Route path='/contact' component={Contact} /> */}
          </Routes>
        </div>
        <div id='footer'>&copy; 2021 - {new Intl.DateTimeFormat('en-GB', {year: 'numeric'}).format(new Date())} BindaasTomal.com</div>
      </BrowserRouter>
    </div>
  );
}

export default App;
