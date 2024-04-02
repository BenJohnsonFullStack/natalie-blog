import Link from "next/link";
import { Button } from "./ui";

const HomePage = () => {
  return (
    <main>
      <div className="relative bg-clouds bg-cover pt-32 px-4 py-12 bg-center bg-no-repeat isolate after:absolute after:inset-0 after:bg-black after:opacity-90 after:z-[-1]">
        <h1 className="text-bg font-yanone text-5xl">
          Welcome to <br /> my happy place.
        </h1>
        <h2 className="text-bg mt-4">Exploring the world through words.</h2>
        <div className="text-center mt-12">
          <Link href="/blogs">
            <Button buttonStyle="primary" buttonText="Explore Blogs" />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
