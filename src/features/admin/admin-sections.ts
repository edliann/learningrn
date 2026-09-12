import type { Href } from 'expo-router';

export type AdminSectionId =
  | 'dashboard'
  | 'customers'
  | 'riders'
  | 'pickups'
  | 'vehicles'
  | 'waste-types'
  | 'pricing'
  | 'facilities'
  | 'reports';

export type AdminSection = {
  id: AdminSectionId;
  title: string;
  href: Href;
  summary: string;
  nextMilestone: string;
};

export const adminSections: AdminSection[] = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    href: '/admin',
    summary: 'Operational snapshot for pickups, riders, revenue, and activity.',
    nextMilestone: 'Connect summary cards to Firestore aggregates or query snapshots.',
  },
  {
    id: 'customers',
    title: 'Customers',
    href: '/admin/customers',
    summary: 'Customer records, saved addresses, booking history, and account status.',
    nextMilestone: 'Add customer list, search, and profile detail views.',
  },
  {
    id: 'riders',
    title: 'Riders',
    href: '/admin/riders',
    summary: 'Rider profiles, verification state, vehicle assignment, and availability.',
    nextMilestone: 'Build verification review and manual status controls.',
  },
  {
    id: 'pickups',
    title: 'Pickups',
    href: '/admin/pickups',
    summary: 'Pickup queue, status filters, rider assignment, and issue handling.',
    nextMilestone: 'Create a pickup table with status and assignment filters.',
  },
  {
    id: 'vehicles',
    title: 'Vehicles',
    href: '/admin/vehicles',
    summary: 'Configurable vehicle types, capacity labels, and base fees.',
    nextMilestone: 'Implement vehicle type CRUD as the first Firebase-backed module.',
  },
  {
    id: 'waste-types',
    title: 'Waste Types',
    href: '/admin/waste-types',
    summary: 'Configurable waste categories and special-handling flags.',
    nextMilestone: 'Implement waste type CRUD after vehicle settings are stable.',
  },
  {
    id: 'pricing',
    title: 'Pricing',
    href: '/admin/pricing',
    summary: 'Fare settings for base fare, distance fee, minimums, and add-ons.',
    nextMilestone: 'Define a fare preview form before connecting Cloud Functions.',
  },
  {
    id: 'facilities',
    title: 'Facilities',
    href: '/admin/facilities',
    summary: 'Approved disposal, recycling, and material recovery destinations.',
    nextMilestone: 'Confirm client operations before enforcing destination rules.',
  },
  {
    id: 'reports',
    title: 'Reports',
    href: '/admin/reports',
    summary: 'Daily pickup totals, revenue, rider performance, and service health.',
    nextMilestone: 'Start with simple date-filtered exports once pickups exist.',
  },
];

export function getAdminSection(id: AdminSectionId) {
  return adminSections.find((section) => section.id === id);
}
