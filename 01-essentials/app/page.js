export default function Home() {
  console.log(
    'You will not see this log statement in the browser in client side instead you can see in the backend'
  );

  return (
    <main>
      <img src="/logo.png" alt="A server surrounded by magic sparkles." />
      <h1>Welcome to this NextJS landing page</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>
    </main>
  );
}
