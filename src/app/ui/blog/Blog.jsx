import {
  BlogActions,
  BlogDescription,
  BlogHeader,
  BlogImage,
  BlogReactions,
} from ".";

export const Blog = () => {
  return (
    <div className="bg-gray-500 shadow-lg p-4 rounded-md w-1/2 mx-auto">
      <BlogHeader />
      <BlogImage />
      <BlogReactions />
      <BlogActions />
      <BlogDescription />
    </div>
  );
};
