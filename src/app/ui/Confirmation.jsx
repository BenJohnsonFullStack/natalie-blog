import { Button } from ".";
export const Confirmation = () => {
  return (
    <div className="px-4 py-4 w-56 bg-bg absolute bottom-6 right-2 rounded-md">
      <h3 className="text-center text-text text-md font-semibold pt-1">
        Are you sure?
      </h3>
      <h4 className="text-center text-text text-sm">This cannot be undone</h4>
      <div className="flex text-sm items-center justify-center gap-4">
        <Button buttonText="Cancel" buttonStyle="accent" />
        <Button buttonText="Delete" buttonStyle="danger" />
      </div>
    </div>
  );
};
