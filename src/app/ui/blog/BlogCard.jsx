import {
  BlogActions,
  BlogDescription,
  BlogHeader,
  BlogImage,
  BlogReactions,
} from ".";

export const BlogCard = () => {
  return (
    <div className="bg-primary text-text shadow-lg p-4 rounded-md w-[90%] mx-auto my-6">
      <BlogHeader />
      <BlogImage />
      <BlogReactions />
      <BlogActions />
      <BlogDescription />
    </div>
  );
};
