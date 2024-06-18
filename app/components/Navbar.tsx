import Link from 'next/link';

const LINKS = [
  { href: '/', text: 'Home' },
  { href: 'login', text: 'Login' },
  { href: 'dashboard', text: 'Dashboard' },
];

export const Navbar = () => {
  return (
    <header className="bg-black p-2 w-full flex justify-center">
      <nav className="flex gap-2">
        {LINKS.map((link) => (
          <Link key={link.text} href={link.href}>
            {link.text}
          </Link>
        ))}
      </nav>
    </header>
  );
};
