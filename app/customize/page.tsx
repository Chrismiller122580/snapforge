'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'; // assume shadcn or add

import { Camera, Upload, Palette, Wheel, Sofa } from 'lucide-react';

export default function ForgearaCustomize() {
  const [previewMode, setPreviewMode] = useState<'photo' | '3d'>('photo');
  const [applied, setApplied] = useState<string[]>([]);

  const apply = (item: string) => {
    setApplied(prev => [...prev, item]);
    alert(`✅ Forged: ${item} applied to your vehicle! (Live preview updated)`);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">Forgeara • Customize Your Ride</h1>
      <p className="text-zinc-400">Snap complete • AI detected your Mustang • Now forge it</p>

      <div className="flex gap-6 mt-8">
        {/* Left sidebar - categories */}
        <div className="w-64 space-y-3">
          <button className="w-full py-4 bg-emerald-600 rounded-xl flex items-center justify-center gap-3" onClick={() => {/* upload */ alert('Camera/Upload opened')}}>
            📸 New Snap or Upload
          </button>
          <Tabs defaultValue="ext" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="ext">Exterior</TabsTrigger>
              <TabsTrigger value="wheel">Wheels</TabsTrigger>
              <TabsTrigger value="int">Interior</TabsTrigger>
            </TabsList>
            <TabsContent value="ext" className="mt-4 grid gap-3">
              <button className="p-3 bg-zinc-800 rounded hover:bg-emerald-900" onClick={() => apply('Matte Black Wrap')}>Matte Black Wrap • $1,299</button>
              <button className="p-3 bg-zinc-800 rounded hover:bg-emerald-900" onClick={() => apply('Carbon Fiber Hood')}>Carbon Fiber Hood • $899</button>
            </TabsContent>
            {/* Add more tabs content */}
          </Tabs>
        </div>

        {/* Center preview */}
        <div className="flex-1">
          <div className="border border-zinc-700 bg-zinc-900 rounded-3xl overflow-hidden">
            <div className="p-4 flex gap-4 border-b">
              <button onClick={() => setPreviewMode('photo')} className={previewMode === 'photo' ? 'underline' : ''}>📸 Photo View</button>
              <button onClick={() => setPreviewMode('3d')} className={previewMode === '3d' ? 'underline' : ''}>🧊 3D Interactive</button>
              <button>AR Camera</button>
            </div>
            <div className="h-96 flex items-center justify-center bg-zinc-950 relative">
              {previewMode === 'photo' ? '📸 Your uploaded car photo + applied mods overlay here (live update)' : '[React Three Fiber 3D Car Model — color & wheel swaps active]'}
              <div className="absolute bottom-8 flex gap-2">
                <button className="bg-white text-black px-6 py-2 rounded" onClick={() => apply('Red LED Underbody')}>🔴 Red LEDs</button>
                <button className="bg-white text-black px-6 py-2 rounded" onClick={() => apply('Bronze Rims')}>🛞 Bronze Rims</button>
              </div>
            </div>
          </div>
          <div className="flex gap-3 mt-4 justify-center">
            <button className="px-8 py-3 border border-zinc-700 rounded-xl" onClick={() => setApplied([])}>Reset</button>
            <button className="px-8 py-3 bg-emerald-500 text-black font-bold rounded-xl" onClick={() => alert('Build saved in Prisma! 🎉 Shared link generated.')}>💾 Save Forgeara Build & Share</button>
            <button className="px-8 py-3 bg-white text-black">🛍️ Buy All Parts (Affiliate)</button>
          </div>
        </div>

        {/* Right catalog */}
        <div className="w-80 bg-zinc-900 rounded-3xl p-4">
          <input placeholder="Search 500+ parts..." className="w-full p-3 bg-zinc-800" />
          <div className="mt-4 space-y-3">
            <div className="flex justify-between bg-zinc-800 p-3 rounded cursor-pointer" onClick={() => apply('LED Headlights')}>
              LED Headlights • $599
            </div>
            <div className="flex justify-between bg-zinc-800 p-3 rounded cursor-pointer" onClick={() => apply('Leather Recaro Seats')}>Leather Recaro Seats • $1,899</div>
          </div>
          <button className="w-full mt-6 py-3 bg-zinc-700">See All 500+ • Prisma Loaded</button>
        </div>
      </div>

      <p className="text-center mt-8 text-zinc-400">Codespaces running • Paste this file • npm run dev • Tell me what to add next (real camera, R3F model, Prisma query, AI edit API...)</p>
    </div>
  );
}