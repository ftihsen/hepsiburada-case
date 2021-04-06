import React from 'react';

import './Header.css';
import { BasketModal, SearchInput, Logo } from 'components';

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <Logo />
        <SearchInput />
        <BasketModal />
      </div>
    </header>
  );
}

export default Header;
