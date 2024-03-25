export const CloseIcon = ({ handleMenuToggle }) => {
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
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
};
