export const Button = ({ buttonText, buttonStyle, type, handler }) => {
  return (
    <button
      onClick={handler ? handler : () => {}}
      type={type || ""}
      className={
        buttonStyle === "primary"
          ? "bg-primary px-6 py-1 rounded-md shadow-sm hover:bg-secondary duration-150"
          : "bg-accent rounded-md shadow-sm hover:bg-secondary duration-150 py-1 mt-4 mb-4 px-6"
      }
    >
      {buttonText}
    </button>
  );
};
