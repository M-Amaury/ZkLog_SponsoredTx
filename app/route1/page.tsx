'use client';

import React from 'react';
import PropertyCard from '@/components/PropertyCard';

// Ces données seraient normalement récupérées depuis une API
const properties = [
  {
    status: 'Available',
    country: 'USA',
    company: 'RealT',
    address: '1012 Preserve Park Dr, Loganville, GA 30052',
    totalPrice: 410410,
    tokenPrice: 50.05,
    expectedIncome: 7.48,
    incomeStartDate: 'December 1, 2024',
    incomePerToken: 3.74,
    imageUrl: 'https://media.gqmagazine.fr/photos/5c5d52664a0794dfffc694ad/16:9/w_1600,h_900,c_limit/villa%20elon%20musk.png', // Ajoutez l'URL de l'image ici
  },
  // Ajoutez d'autres propriétés ici...
];

export default function Marketplace() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Property Marketplace</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {properties.map((property, index) => (
          <PropertyCard key={index} {...property} />
        ))}
      </div>
    </div>
  );
}
