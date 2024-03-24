import { Logo } from ".";

export const Header = () => {
  return (
    <section>
      <div className="flex gap-2 items-center pl-4 py-4 bg-secondary">
        <div className="w-12">
          <Logo />
        </div>
        <p className="font-oregano text-lg text-text">A Blog by Natalie</p>
      </div>
      {/* <Nav /> */}
    </section>
  );
};
