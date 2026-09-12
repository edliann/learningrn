export type WasteType = {
  id: string;
  name: string;
  description?: string;
  specialHandling: boolean;
  active: boolean;
  createdAt: string;
  updatedAt: string;
};

export type WasteFacility = {
  id: string;
  name: string;
  addressText: string;
  latitude?: number;
  longitude?: number;
  acceptedWasteTypeIds: string[];
  active: boolean;
};
