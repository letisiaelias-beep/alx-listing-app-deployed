// src/interfaces/index.ts
export interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
}

/**
 * PropertyProps - shape for property listings used across the app.
 * Adjust fields to match your actual API response if necessary.
 */
export interface PropertyProps {
  id: string | number;
  name: string;
  description?: string;
  price?: number;
  location?: {
    city?: string;
    country?: string;
    address?: string;
  };
  images?: string[];   // URLs to images
  bedrooms?: number;
  bathrooms?: number;
  featured?: boolean;
  createdAt?: string;
  updatedAt?: string;
  // allow additional fields returned by the API
  [key: string]: any;
}
