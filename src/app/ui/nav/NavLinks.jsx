import { NavLink } from ".";

export const NavLinks = () => {
  const navLinks = [
    {
      id: 1,
      title: "Home",
      href: "/",
    },
    {
      id: 2,
      title: "New Blog",
      href: "/new",
    },
    {
      id: 3,
      title: "Login",
      href: "/login",
    },
  ];

  return (
    <>
      {navLinks.map((link) => (
        <div key={link.id} className="my-2 text-text hover:text-secondary">
          <NavLink title={link.title} href={link.href} />
        </div>
      ))}
    </>
  );
};
