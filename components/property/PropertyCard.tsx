import React from "react";
import Image from "next/image";
import { PropertyProps } from "@/interfaces";

type Props = {
  property: PropertyProps;
};

const PropertyCard: React.FC<Props> = ({ property }) => {
  const img = property.images && property.images.length > 0 ? property.images[0] : property.image ?? "/images/placeholder.png";

  return (
    <div className="property-card">
      <div className="thumb" style={{ width: "100%", height: 200, position: "relative" }}>
        <Image src={img} alt={property.name} fill style={{ objectFit: "cover" }} sizes="100vw" />
      </div>
      <div className="info">
        <h4>{property.name}</h4>
        <p>{property.location?.city ?? property.location?.address ?? "Unknown location"}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
