import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Property {
  status: string;
  country: string;
  company: string;
  address: string;
  totalPrice: number;
  tokenPrice: number;
  expectedIncome: number;
  incomeStartDate: string;
  incomePerToken: number;
  imageUrl: string;
}

interface PropertyStore {
  properties: Property[];
  addProperty: (property: Property) => void;
}

export const usePropertyStore = create<PropertyStore>()(
  persist(
    (set) => ({
      properties: [],
      addProperty: (property) => set((state) => {
        console.log('Adding property:', property);
        return { properties: [...state.properties, property] };
      }),
    }),
    {
      name: 'property-storage',
    }
  )
);
