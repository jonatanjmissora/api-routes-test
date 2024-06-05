import Link from 'next/link';

export default function SectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex gap-1 flex-col justify-center items-center bg-gray-500 min-h-screen relative p-1">
      <Link className='absolute top-[5rem] right-[5rem]' href={'/'}>Volver</Link>
      {children}
    </section>
  );
}
