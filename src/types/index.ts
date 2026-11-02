export const Role = {
  BUYER: "BUYER",
  MERCHANT: "MERCHANT",
  DRIVER: "DRIVER",
  ADMIN: "ADMIN",
} as const;
export type Role = (typeof Role)[keyof typeof Role];

export const KycStatus = {
  PENDING: "PENDING",
  APPROVED: "APPROVED",
  REJECTED: "REJECTED",
} as const;
export type KycStatus = (typeof KycStatus)[keyof typeof KycStatus];

export const VehicleType = {
  BAJAJ: "BAJAJ",
  TAXI: "TAXI",
  MOTORCYCLE: "MOTORCYCLE",
} as const;
export type VehicleType = (typeof VehicleType)[keyof typeof VehicleType];

export const ItemCondition = {
  BRAND_NEW: "BRAND_NEW",
  LIKE_NEW: "LIKE_NEW",
  EXCELLENT: "EXCELLENT",
  GOOD: "GOOD",
  FAIR: "FAIR",
} as const;
export type ItemCondition = (typeof ItemCondition)[keyof typeof ItemCondition];

export const ListingStatus = {
  AVAILABLE: "AVAILABLE",
  IN_TRADE: "IN_TRADE",
  SOLD: "SOLD",
  ARCHIVED: "ARCHIVED",
} as const;
export type ListingStatus = (typeof ListingStatus)[keyof typeof ListingStatus];

export const TradeStatus = {
  PENDING: "PENDING",
  NEGOTIATING: "NEGOTIATING",
  ACCEPTED: "ACCEPTED",
  IN_ESCROW: "IN_ESCROW",
  COMPLETED: "COMPLETED",
  CANCELLED: "CANCELLED",
} as const;
export type TradeStatus = (typeof TradeStatus)[keyof typeof TradeStatus];

export const CycleStatus = {
  DETECTED: "DETECTED",
  PROPOSED: "PROPOSED",
  LOCKED: "LOCKED",
  EXECUTING: "EXECUTING",
  COMPLETED: "COMPLETED",
  CANCELLED: "CANCELLED",
} as const;
export type CycleStatus = (typeof CycleStatus)[keyof typeof CycleStatus];

export const PoolStatus = {
  GATHERING: "GATHERING",
  SCHEDULED: "SCHEDULED",
  DISPATCHED: "DISPATCHED",
  COMPLETED: "COMPLETED",
} as const;
export type PoolStatus = (typeof PoolStatus)[keyof typeof PoolStatus];

export const DeliveryStatus = {
  PENDING: "PENDING",
  ASSIGNED: "ASSIGNED",
  PICKED_UP: "PICKED_UP",
  IN_TRANSIT: "IN_TRANSIT",
  DELIVERED: "DELIVERED",
  CANCELLED: "CANCELLED",
} as const;
export type DeliveryStatus = (typeof DeliveryStatus)[keyof typeof DeliveryStatus];

export const EscrowStatus = {
  HELD: "HELD",
  RELEASED: "RELEASED",
  REFUNDED: "REFUNDED",
  DISPUTED: "DISPUTED",
} as const;
export type EscrowStatus = (typeof EscrowStatus)[keyof typeof EscrowStatus];

export const PaymentProvider = {
  TELEBIRR: "TELEBIRR",
  CBE_BIRR: "CBE_BIRR",
  CHAPA: "CHAPA",
  CASH: "CASH",
} as const;
export type PaymentProvider = (typeof PaymentProvider)[keyof typeof PaymentProvider];
