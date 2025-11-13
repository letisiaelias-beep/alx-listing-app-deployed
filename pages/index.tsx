import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import api from "@/lib/api";
import { PropertyProps } from "@/interfaces";
import PropertyCard from "@/components/property/PropertyCard";

const Home: NextPage = () => {
  const [properties, setProperties] = useState<PropertyProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/properties");
        // assume API returns array; do a runtime check
        const data = res?.data;
        if (Array.isArray(data)) {
          setProperties(data as PropertyProps[]);
        } else {
          console.warn("Unexpected properties response:", data);
          setProperties([]);
        }
      } catch (_err: unknown) {
        const msg = _err instanceof Error ? _err.message : String(_err);
        console.error("Failed to load properties:", msg);
        setProperties([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading properties...</p>;

  return (
    <main>
      <h1>Property Listings</h1>
      <div style={{ display: "grid", gap: 12 }}>
        {properties.length === 0 ? (
          <p>No properties available.</p>
        ) : (
          properties.map((p) => <PropertyCard key={String(p.id)} property={p} />)
        )}
      </div>
    </main>
  );
};

export default Home;
