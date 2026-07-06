'use client';
export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <header>
        <h1 className="text-4xl">VehicleVariations.com</h1>
        <p>Snap your vehicle • Browse • See variations in 3D on your car</p>
      </header>
      <main>
        <button>📸 Snap or Upload Vehicle Photo</button>
        <a href="/customize">Go to Customizer Demo</a>
        {/* Add more */}
      </main>
      <footer>VehicleVariations.com • Built with Grok • New domain ready</footer>
    </div>
  );
}