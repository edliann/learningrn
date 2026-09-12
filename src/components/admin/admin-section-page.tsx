import { AdminCard, AdminGrid, AdminLayout, TextLabel } from '@/components/admin/admin-layout';
import {
  getAdminSection,
  type AdminSectionId,
} from '@/features/admin/admin-sections';

type AdminSectionPageProps = {
  sectionId: AdminSectionId;
};

export function AdminSectionPage({ sectionId }: AdminSectionPageProps) {
  const section = getAdminSection(sectionId);

  if (!section) {
    return null;
  }

  return (
    <AdminLayout
      activeSection={section.id}
      title={section.title}
      description={section.summary}>
      <AdminGrid>
        <AdminCard>
          <TextLabel variant="small">Phase 1 Scope</TextLabel>
          <TextLabel variant="body">
            This page is intentionally a foundation screen. The next step is adding
            typed Firebase service modules, then connecting one admin module at a
            time.
          </TextLabel>
        </AdminCard>

        <AdminCard>
          <TextLabel variant="small">Next Milestone</TextLabel>
          <TextLabel variant="body">{section.nextMilestone}</TextLabel>
        </AdminCard>
      </AdminGrid>
    </AdminLayout>
  );
}
