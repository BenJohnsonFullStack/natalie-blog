import { Blogs } from "../ui";

const BlogsPage = () => {
  const user = {
    username: "nattyt6969",
    password: "helloWorld!",
    type: "admin",
  };

  return (
    <main>
      <Blogs user={user} />
    </main>
  );
};

export default BlogsPage;
