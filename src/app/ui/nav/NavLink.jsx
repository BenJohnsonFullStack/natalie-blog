import Link from "next/link";

export const NavLink = ({ handleMenuToggle, href, title }) => {
  return (
    <Link
      href={href}
      className="text-text hover:text-secondary w-full cursor-pointer duration-150"
      onClick={handleMenuToggle}
    >
      {title}
    </Link>
  );
};
