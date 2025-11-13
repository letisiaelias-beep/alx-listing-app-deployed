import React from "react";
import Image from "next/image";

export interface BookingDetails {
  propertyName: string;
  price: number;
  bookingFee: number;
  totalNights: number;
  startDate: string;
  image: string;
  reviewScore: number;
  reviewsCount: number;
}

export interface OrderSummaryProps {
  bookingDetails: BookingDetails;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ bookingDetails }) => {
  return (
    <div className="order-summary">
      <h2>{bookingDetails.propertyName}</h2>
      <p>Price per night: {bookingDetails.price}</p>
      <p>Booking fee: {bookingDetails.bookingFee}</p>
      <p>Total nights: {bookingDetails.totalNights}</p>
      <p>Start date: {bookingDetails.startDate}</p>
      <p>Reviews: {bookingDetails.reviewScore} ({bookingDetails.reviewsCount})</p>
      <div style={{ width: "100%", height: 200, position: "relative" }}>
        <Image src={bookingDetails.image} alt={bookingDetails.propertyName} fill style={{ objectFit: "cover" }} />
      </div>
    </div>
  );
};

export default OrderSummary;
