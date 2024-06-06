import Link from 'next/link';

export default function SectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex gap-1 flex-col items-center bg-gray-500 min-h-screen relative p-1 pt-12">
      <Link className='absolute top-[0.5rem] left-[0.5rem]' href={'/'}>Volver</Link>
      {children}
    </section>
  );
}
