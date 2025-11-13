// ./constants/index.ts
import { PropertyProps } from "@/interfaces";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    id: "1",                  // <-- add this
    name: "Villa Ocean Breeze",
    address: {
      state: "Seminyak",
      city: "Seminyak",
      country: "Indonesia"
    },
    rating: 4.8,
    category: ["Villa", "Sea view"],
    price: 250,
    offers: { bed: "2", shower: "2", occupants: "4" },
    image: "/images/villa-ocean-breeze.jpg",
    discount: "10%"
  },
  {
    id: "2",                  // <-- add this for second object
    name: "Cozy Mountain Cabin",
    address: {
      state: "Gulmarg",
      city: "Gulmarg",
      country: "India"
    },
    rating: 4.6,
    category: ["Cabin", "Mountain"],
    price: 120,
    offers: { bed: "1", shower: "1", occupants: "2" },
    image: "/images/mountain-cabin.jpg",
    discount: "5%"
  },
  // ...repeat for every item in the array
];
