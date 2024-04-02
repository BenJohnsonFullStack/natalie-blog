"use client";
import Link from "next/link";
import {
  BlogActions,
  BlogAdminActions,
  BlogDescription,
  BlogHeader,
  BlogImage,
  BlogReactions,
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

      <BlogAdminActions user={user} blog={blog} />
    </div>
  );
};
