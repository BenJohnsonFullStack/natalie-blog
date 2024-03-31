"use client";
import { useState } from "react";

import { CloseIcon, HamburgerIcon, Nav } from ".";

export const HamburgerMenu = ({ user }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      {isMenuOpen ? (
        <CloseIcon handleMenuToggle={handleMenuToggle} />
      ) : (
        <HamburgerIcon handleMenuToggle={handleMenuToggle} />
      )}
      {isMenuOpen && <Nav handleMenuToggle={handleMenuToggle} user={user} />}
    </>
  );
};
