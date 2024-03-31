import Link from "next/link";
import {
  BlogActions,
  BlogDescription,
  BlogHeader,
  BlogImage,
  BlogReactions,
  DeleteIcon,
  EditIcon,
} from ".";
import { Button } from "..";

export const BlogCard = ({ user, blog }) => {
  return (
    <div className="bg-primary text-text shadow-lg p-4 rounded-md w-[90%] mx-auto my-6">
      <BlogHeader />
      <BlogImage />
      <BlogReactions />
      <BlogActions />
      <BlogDescription />

      <Link href={`/blogs/${blog.id}`}>
        <div className="text-center">
          <Button buttonText="Read Full Blog" buttonStyle="accent" />
        </div>
      </Link>

      {user.type === "admin" && (
        <div className="flex justify-end gap-2">
          <Link href={`/edit/${blog.id}`}>
            <EditIcon />
          </Link>
          <DeleteIcon />
        </div>
      )}
    </div>
  );
};
