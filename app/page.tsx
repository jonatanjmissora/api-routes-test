import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex gap-8 flex-col justify-center items-center bg-gray-500">
      <h1 className="text-2xl font-bold border-b border-black">SWAGGER</h1>
      <Link href={'/ping'}>Obtener Ping</Link>
      <Link href={'/service'}>Obtener Service</Link>
      <Link href={'/login'}>Login</Link>
      <Link href={'/users/40'}>User Info</Link>
      <Link href={'/account'}>Account Info</Link>
    </main>
  );
}
