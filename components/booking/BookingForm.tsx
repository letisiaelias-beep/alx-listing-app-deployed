import React, { useState } from "react";
import api from "@/lib/api";

const BookingForm: React.FC<{ propertyId: string }> = ({ propertyId }) => {
  const [name, setName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const submit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setLoading(true);
    try {
      await api.post(`/properties/${propertyId}/book`, { name });
      alert("Booking submitted");
    } catch (_err: unknown) {
      const msg = _err instanceof Error ? _err.message : String(_err);
      console.error("Booking error:", msg);
      alert("Failed to book: " + msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit}>
      <label>
        Your name
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <button type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Book"}
      </button>
    </form>
  );
};

export default BookingForm;
