import {
  BlogActions,
  BlogDescription,
  BlogHeader,
  BlogImage,
  BlogReactions,
  DeleteIcon,
  EditIcon,
} from ".";

export const BlogCard = ({ user }) => {
  return (
    <div className="bg-primary text-text shadow-lg p-4 rounded-md w-[90%] mx-auto my-6">
      <BlogHeader />
      <BlogImage />
      <BlogReactions />
      <BlogActions />
      <BlogDescription />

      {user.type === "admin" && (
        <div className="flex justify-end gap-2">
          <EditIcon />
          <DeleteIcon />
        </div>
      )}
    </div>
  );
};
