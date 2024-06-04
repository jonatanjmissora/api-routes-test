const localHost =
  'http://localhost:3000/';

export const revalidate = 10;

export default async function FakeApi() {
  const getData = async () => {
    const res = await fetch(`${localHost}api/fakeStoreApi`);
    return res.json();
  };

  const data = await getData();

  return (
    <div>
      <h1>Products</h1>
      {data.slice(0, 10).map((product) => (
        <p key={product.id} className="text-sm border border-black">
          {product.title}
        </p>
      ))}
    </div>
  );
}
