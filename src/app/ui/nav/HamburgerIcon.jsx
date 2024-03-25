export const HamburgerIcon = ({ handleMenuToggle }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="#0c1817"
      strokeWidth={1.5}
      className="w-6 h-6 cursor-pointer"
      viewBox="0 0 24 24"
      onClick={handleMenuToggle}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 9h16.5m-16.5 6.75h16.5"
      />
    </svg>
  );
};
