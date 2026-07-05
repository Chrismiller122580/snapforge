'use client';
import { useState } from 'react';
import { Upload, Camera, Palette } from 'lucide-react';

export default function Home() {
  const [step, setStep] = useState<'snap' | 'customize'>('snap');

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <header className="border-b border-zinc-800 p-4 flex justify-between">
        <h1 className="text-3xl font-bold">SnapForge</h1>
        <button className="bg-white text-black px-6 py-2 rounded-full">Login with Auth0</button>
      </header>
      <main className="p-8">
        <h2 className="text-5xl font-bold text-center mb-8">Snap your car. Forge it your way.</h2>
        {step === 'snap' ? (
          <div className="max-w-md mx-auto border border-dashed border-zinc-700 rounded-3xl p-12 text-center">
            <Camera className="mx-auto mb-4" size={64} />
            <button onClick={() => { /* camera or file */ alert('Upload photo coming'); setStep('customize'); }} className="bg-emerald-500 hover:bg-emerald-600 px-10 py-4 rounded-xl text-xl font-semibold">
              📸 Snap or Upload Your Vehicle
            </button>
            <p className="text-zinc-400 mt-4">Or drag & drop photo</p>
          </div>
        ) : (
          <div className="grid grid-cols-12 gap-4">
            {/* Sidebar catalog */}
            <div className="col-span-3 bg-zinc-900 p-4 rounded-xl">Exterior | Interior | Wheels tabs + product cards</div>
            {/* Preview */}
            <div className="col-span-6 bg-zinc-900 p-8 rounded-xl text-center">
              📍 Your car preview here (image + 3D placeholder)<br />
              <button className="mt-4 bg-white text-black px-6 py-2">Apply Red Wrap</button> | <button>Swap 20" Rims</button>
              {/* React Three Fiber placeholder */}
              <div className="h-64 bg-zinc-800 mt-4 flex items-center justify-center">[3D Car Viewer - R3F coming]</div>
            </div>
            {/* Tools */}
            <div className="col-span-3">Save / Share / Buy / AR toggle buttons</div>
          </div>
        )}
        <button onClick={() => window.location.href = '/customize'} className="block mx-auto mt-8 bg-white text-black px-8 py-3">🚀 Go to Full Customizer Demo</button>
      </main>
      <footer className="text-center p-4 text-zinc-500">Deployed on Vercel • Built live with Grok • GitHub: snapforge</footer>
    </div>
  );
}