import React from "react";
import Image from "next/image";

export type CardProps = {
  title: string;
  description: string;
  imageUrl: string;
};

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <article className="card">
      <div className="card-image" style={{ width: "100%", height: 220, position: "relative" }}>
        <Image
          src={imageUrl || "/images/placeholder.png"}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="card-body">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
};

export default Card;
