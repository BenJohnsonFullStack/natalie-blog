export const Button = ({ buttonText, buttonStyle, type, handler }) => {
  const buttonStyles = {
    primary:
      "bg-primary px-6 py-1 rounded-md shadow-sm hover:bg-secondary duration-150",
    accent:
      "bg-accent rounded-md shadow-sm hover:bg-secondary duration-150 py-1 mt-4 mb-4 px-6",
    danger:
      "bg-red-700 text-gray-300 rounded-md shadow-sm hover:bg-red-600 duration-150 py-1 mt-4 mb-4 px-6",
  };

  const buttonClass = buttonStyles[buttonStyle];
  return (
    <button
      type={type || ""}
      className={buttonClass}
      onClick={handler ? handler : () => {}}
    >
      {buttonText}
    </button>
  );
};
