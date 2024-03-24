import {
  BlogActions,
  BlogDescription,
  BlogHeader,
  BlogImage,
  BlogReactions,
} from ".";

export const BlogCard = () => {
  return (
    <div className="bg-gray-500 shadow-lg p-4 rounded-md w-1/2 mx-auto my-6">
      <BlogHeader />
      <BlogImage />
      <BlogReactions />
      <BlogActions />
      <BlogDescription />
    </div>
  );
};
