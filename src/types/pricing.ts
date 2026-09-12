export type PricingRule = {
  id: string;
  name: string;
  baseFare: number;
  pricePerKilometer: number;
  minimumFare: number;
  vehicleFeeEnabled: boolean;
  wasteFeeEnabled: boolean;
  specialHandlingFee?: number;
  active: boolean;
  createdAt: string;
  updatedAt: string;
};
