"use client";

import { useEffect, useState } from "react";
import { useCustomWallet } from "@/contexts/CustomWallet";
import ProfilePopover from "@/components/ProfilePopover";
import { CreateCounter } from "@/components/CreateCounter";
import { isValidSuiObjectId } from "@mysten/sui/utils";
import { Counter } from "@/components/Counter";

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
    <div className="w-full h-full min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to Enoki Demo App</h1>
      <div className="flex flex-col items-center sm:flex-row gap-4 sm:items-start">
        {isConnected ? (
          counterId ? (
            <Counter id={counterId} />
          ) : (
            <CreateCounter
              onCreated={(id) => {
                window.location.hash = id;
                setCounter(id);
              }}
            />
          )
        ) : (
          <div>Please connect your wallet to continue.</div>
        )}
      </div>
    </div>
  );
}
