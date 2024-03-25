"use client";
import { useState } from "react";

import { CloseIcon, HamburgerIcon, Nav } from ".";

export const HamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
      {isMenuOpen && <Nav />}
    </>
  );
};
