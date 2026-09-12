export type UserRole = 'customer' | 'rider' | 'admin';

export type AccountStatus = 'active' | 'pending' | 'suspended';

export type AppUser = {
  id: string;
  role: UserRole;
  name: string;
  email?: string;
  phone?: string;
  status: AccountStatus;
  createdAt: string;
  updatedAt: string;
};

export type CustomerProfile = {
  id: string;
  userId: string;
  defaultAddressId?: string;
  notes?: string;
};

export type RiderVerificationStatus = 'not_started' | 'pending' | 'approved' | 'rejected';

export type RiderAvailabilityStatus = 'offline' | 'online' | 'busy';

export type RiderProfile = {
  id: string;
  userId: string;
  assignedVehicleId?: string;
  availabilityStatus: RiderAvailabilityStatus;
  verificationStatus: RiderVerificationStatus;
  ratingAverage?: number;
  completedPickups: number;
};
