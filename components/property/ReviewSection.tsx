import React, { useEffect, useState } from "react";
import api from "@/lib/api";

type Review = {
  id: string | number;
  user: string;
  rating: number;
  comment: string;
};

const ReviewSection: React.FC<{ propertyId: string }> = ({ propertyId }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const load = async () => {
      try {
        const resp = await api.get(`/properties/${propertyId}/reviews`);
        setReviews(resp.data ?? []);
      } catch (_err: unknown) {
        const message = _err instanceof Error ? _err.message : String(_err);
        console.error("Error loading reviews:", message);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [propertyId]);

  if (loading) return <p>Loading reviews...</p>;

  return (
    <section>
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        reviews.map((r) => (
          <div key={r.id}>
            <strong>{r.user}</strong>
            <span> — {r.rating}/5</span>
            <p>{r.comment}</p>
          </div>
        ))
      )}
    </section>
  );
};

export default ReviewSection;
