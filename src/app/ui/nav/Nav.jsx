import { NavLinks } from ".";

export const Nav = ({ handleMenuToggle, user }) => {
  return (
    <nav className="bg-accent py-2 rounded-md shadow-md px-4 absolute right-0 w-32">
      <NavLinks handleMenuToggle={handleMenuToggle} user={user} />
    </nav>
  );
};
