import { View } from 'react-native';

import {
  AdminLayout,
  AdminMap,
  DashboardMetric,
  DashboardMetrics,
} from '@/components/admin/admin-layout';

export default function AdminDashboard() {
  return (
    <AdminLayout activeSection="dashboard">
      <AdminMap>

        {/* MAP */}
        <View style={{ flex: 1 }}>
          {/* Actual map will go here */}
        </View>

        {/* DASHBOARD STATS */}
        <DashboardMetrics>

          <DashboardMetric
            title="Pending Pickups"
            value={23}
          />

          <DashboardMetric
            title="Active Riders"
            value={7}
          />

          <DashboardMetric
            title="Completed Today"
            value={17}
          />

          <DashboardMetric
            title="Revenue Today"
            value="₱1,535"
          />

        </DashboardMetrics>

      </AdminMap>
    </AdminLayout>
  );
}