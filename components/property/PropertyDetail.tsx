import React, { useEffect, useState } from "react";
import { PropertyProps } from "@/interfaces";
import api from "@/lib/api";
import Image from "next/image";

const PropertyDetail: React.FC<{ id: string }> = ({ id }) => {
  const [property, setProperty] = useState<PropertyProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const res = await api.get(`/properties/${id}`);
        setProperty(res.data);
      } catch (_err: unknown) {
        const message = _err instanceof Error ? _err.message : String(_err);
        console.error("Failed to fetch property:", message);
      } finally {
        setLoading(false);
      }
    };
    fetchProperty();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!property) return <p>Property not found.</p>;

  const img = property.images && property.images.length > 0 ? property.images[0] : property.image ?? "/images/placeholder.png";

  return (
    <div className="property-detail">
      <div style={{ width: "100%", height: 400, position: "relative" }}>
        <Image src={img} alt={property.name} fill style={{ objectFit: "cover" }} sizes="100vw" />
      </div>
      <h1>{property.name}</h1>
      <p>{property.description}</p>
      <p>Price: {property.price ?? "N/A"}</p>
    </div>
  );
};

export default PropertyDetail;
