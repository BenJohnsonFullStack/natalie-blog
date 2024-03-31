import Link from "next/link";

import { Logo } from ".";
import { HamburgerMenu } from "./nav";

export const Header = ({ user }) => {
  return (
    <header className="flex justify-between items-center px-4 py-4 bg-secondary w-full fixed top-0">
      <div className="flex gap-2 items-center w-full">
        <Link href="/" className="w-12">
          <Logo />
        </Link>
        <p className="font-oregano text-lg text-text">A Blog by Natalie</p>
      </div>
      <div className="relative">
        <HamburgerMenu user={user} />
      </div>
    </header>
  );
};
