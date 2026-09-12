export type PickupStatus =
  | 'REQUESTED'
  | 'SEARCHING_FOR_RIDER'
  | 'RIDER_ASSIGNED'
  | 'RIDER_ON_THE_WAY'
  | 'ARRIVED'
  | 'COLLECTING_WASTE'
  | 'PICKUP_COMPLETED'
  | 'DELIVERED_TO_FACILITY'
  | 'CLOSED'
  | 'CANCELLED_BY_CUSTOMER'
  | 'CANCELLED_BY_RIDER'
  | 'NO_RIDER_AVAILABLE'
  | 'FAILED_PICKUP';

export type PaymentStatus = 'unpaid' | 'pending_review' | 'paid' | 'failed' | 'waived';

export type GeoPoint = {
  latitude: number;
  longitude: number;
};

export type PickupLocation = GeoPoint & {
  addressText: string;
  barangay?: string;
  city?: string;
  province?: string;
};

export type PickupRequest = {
  id: string;
  customerId: string;
  riderId?: string;
  vehicleTypeId?: string;
  wasteTypeId: string;
  quantityLabel: string;
  status: PickupStatus;
  pickupLocation: PickupLocation;
  estimatedFare: number;
  finalFare?: number;
  paymentStatus: PaymentStatus;
  scheduledAt?: string;
  createdAt: string;
  acceptedAt?: string;
  arrivedAt?: string;
  completedAt?: string;
  cancelledAt?: string;
};
