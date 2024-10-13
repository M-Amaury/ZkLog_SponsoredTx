'use client';

import React, { useEffect, useState } from 'react';
import PropertyCard from '@/components/PropertyCard';
import { usePropertyStore } from '@/store/propertyStore';

export default function Marketplace() {
  const properties = usePropertyStore((state) => state.properties);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  console.log('Properties in marketplace:', properties);

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Property Marketplace</h1>
      {properties.length === 0 ? (
        <p>No properties available at the moment.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>
      )}
    </div>
  );
}
