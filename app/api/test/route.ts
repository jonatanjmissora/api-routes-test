export async function GET(Request) {
  const msj = JSON.stringify({ message: 'test api' });
  return new Response(msj, { status: 201 });
}