import Link from "next/link";

import { Logo } from ".";
import { HamburgerMenu } from "./nav";

export const Header = () => {
  return (
    <header className="flex justify-between items-center px-4 py-4 bg-secondary w-full">
      <div className="flex gap-2 items-center w-full">
        <Link href="/" className="w-12">
          <Logo />
        </Link>
        <p className="font-oregano text-lg text-text">A Blog by Natalie</p>
      </div>
      <div className="relative">
        <HamburgerMenu />
      </div>
    </header>
  );
};
