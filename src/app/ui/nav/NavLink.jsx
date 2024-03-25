import Link from "next/link";

export const NavLink = ({ href, title }) => {
  return <Link href={href}>{title}</Link>;
};
