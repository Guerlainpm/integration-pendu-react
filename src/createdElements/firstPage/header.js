import React from 'react';
import logo from '../../logo-pendu.jpg';
import ChooseMode from './chooseModeContainer.js';
class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
      <header>
      <h1>Bienvenu sur Le Jeu Du Pendu</h1>
      <img src={logo} className="App-logo" alt="logo" />
        <h2>Choisis ton mode de jeu</h2>
      </header>
      <ChooseMode/>
      </React.Fragment>
    );
  }
}
export default Header;
