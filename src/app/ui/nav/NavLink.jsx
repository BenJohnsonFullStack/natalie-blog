import Link from "next/link";

export const NavLink = ({ handleMenuToggle, href, title, user }) => {
  {
    if (user.type === "admin") {
      return (
        <Link
          href={href}
          className="text-text hover:text-secondary w-full cursor-pointer duration-150"
          onClick={handleMenuToggle}
        >
          {title}
        </Link>
      );
    }
  }

  {
    if (user.type !== "admin" && title !== "New Blog") {
      return (
        <Link
          href={href}
          className="text-text hover:text-secondary w-full cursor-pointer duration-150"
          onClick={handleMenuToggle}
        >
          {title}
        </Link>
      );
    }
  }
};
