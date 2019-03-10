import React from 'react';

import '../../css/Toolbar.css'

export const Navbar = ({menu}) => (
    <header className="toolbar">
      <nav className="toolbar-navigation">
          {menu}
      </nav>
    </header>
  );