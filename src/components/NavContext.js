import React, { createContext, useState } from 'react';

export const NavContext = createContext()

const NavProvider = ({children}) => {
  
  const [menuOpen, setMenuOpen] = useState(true);
  return (
  <NavContext.Provider value={{menuOpen, setMenuOpen}}>
    {children}
  </NavContext.Provider>
  );
};

export default NavProvider;
