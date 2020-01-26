import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <div className="app-close"><i className="material-icons">close</i></div>
      <div>Exchange</div>
      <div className="app-user_initial">
        <span>B</span>
      </div>
    </header>
  );
};
export default Header;
