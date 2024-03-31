import { BlogCard } from "@/app/ui/blog";

export const Blogs = ({ user }) => {
  const blogs = [1, 2, 3, 4, 5, 6];
  return (
    <section className="mt-24">
      {blogs.map((blog, idx) => (
        <BlogCard key={idx} user={user} />
      ))}
    </section>
  );
};
