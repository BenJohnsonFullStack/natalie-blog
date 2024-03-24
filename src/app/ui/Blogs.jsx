import { BlogCard } from "@/app/ui/blog";

export const Blogs = () => {
  const blogs = [1, 2, 3, 4, 5, 6];
  return (
    <section>
      {blogs.map((blog, idx) => (
        <BlogCard key={idx} />
      ))}
    </section>
  );
};