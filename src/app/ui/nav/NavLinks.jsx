import { NavLink } from ".";

export const NavLinks = ({ handleMenuToggle, user }) => {
  const navLinks = [
    {
      id: 1,
      title: "Home",
      href: "/",
    },
    {
      id: 2,
      title: "Blogs",
      href: "/blogs",
    },
    {
      id: 3,
      title: "New Blog",
      href: "/new",
    },
    {
      id: 4,
      title: "Login",
      href: "/login",
    },
  ];

  return (
    <>
      {navLinks.map((link) => (
        <div key={link.id} className="my-2">
          <NavLink
            title={link.title}
            href={link.href}
            handleMenuToggle={handleMenuToggle}
            user={user}
          />
        </div>
      ))}
    </>
  );
};
