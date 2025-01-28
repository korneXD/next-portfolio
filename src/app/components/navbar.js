import Link from "next/link";

export default function Navbar() {
  const navLinks = [
    { name: "Főoldal", path: "/" },
    { name: "Projekteim", path: "/projects" },
    { name: "Kontakt", path: "/contact" },
  ];
  return (
    <div className="fixed left-0 top-0 flex h-fit w-full items-center justify-around border-b bg-background px-4 py-6">
      {navLinks.map((e) => (
        <Link
          key={e.name}
          href={e.path}
          className="text-primary font-nohemiLight text-xl uppercase tracking-wider"
        >
          {e.name}
        </Link>
      ))}
    </div>
  );
}
