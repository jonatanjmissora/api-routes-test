import Link from 'next/link';

export default function SectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex gap-1 flex-col justify-center items-center bg-gray-500 min-h-screen">
      <Link href={'/'}>Volver</Link>
      {children}
    </section>
  );
}
