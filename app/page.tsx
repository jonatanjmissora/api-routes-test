import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex gap-8 flex-col justify-center items-center bg-gray-500">
      <Link href={'/fakeStoreApi'}>FakeApi</Link>
      <Link href={'/service'}>Service</Link>
      <Link href={'/ping'}>Ping</Link>
      <Link href={'/login'}>Login</Link>
      <Link href={'/mail'}>Mail</Link>
    </main>
  );
}
