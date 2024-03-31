import { BlogCard } from "@/app/ui/blog";

export const Blogs = ({ user }) => {
  const blogs = [
    {
      id: 123,
      title: "Blog 1",
    },
    {
      id: 567,
      title: "Blog 2",
    },
    {
      id: 890,
      title: "Blog 3",
    },
  ];
  return (
    <section className="mt-24">
      {blogs.map((blog, idx) => (
        <BlogCard key={idx} user={user} blog={blog} />
      ))}
    </section>
  );
};
