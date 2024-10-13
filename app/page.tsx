"use client";

import { useEffect, useState } from "react";
import { useCustomWallet } from "@/contexts/CustomWallet";
import { isValidSuiObjectId } from "@mysten/sui/utils";

export default function HomePage() {
  const { isConnected } = useCustomWallet();
  const [counterId, setCounter] = useState<string | null>(null);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (isValidSuiObjectId(hash)) {
      setCounter(hash);
    }
  }, []);

  return (
    <main className="flex flex-col items-center w-full min-h-screen bg-stone-300 overflow-hidden">
      <header className="relative w-full h-screen">
        <img 
          src="https://media.gqmagazine.fr/photos/5c5d52664a0794dfffc694ad/16:9/w_1600,h_900,c_limit/villa%20elon%20musk.png" 
          alt="Background" 
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-neutral-500">
          <h1 className="text-8xl font-bold mb-8 max-md:text-4xl">SuitHome</h1>
          <p className="text-2xl text-center max-w-md px-4">
            Buy houses parts simplier and faster
          </p>
        </div>
      </header>
    </main>
  );
}
