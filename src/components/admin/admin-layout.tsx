import { Link } from 'expo-router';
import { PropsWithChildren } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

import {
  adminSections,
  type AdminSectionId,
} from '@/features/admin/admin-sections';

type AdminLayoutProps = PropsWithChildren<{
  activeSection: AdminSectionId;
  title?: string;
  description?: string;
}>;

export function AdminLayout({
  activeSection,
  title,
  description,
  children,
}: AdminLayoutProps) {
  const { width } = useWindowDimensions();

  const compact = width < 850;

  return (
    <View style={styles.page}>

      {/* ================================================================ */}
      {/* TOP BRAND BAR                                                    */}
      {/* ================================================================ */}

      <View style={styles.topBar}>
        <View style={styles.logoContainer}>

          <View style={styles.logoIcon}>
            <Text style={styles.logoIconText}>♻</Text>
          </View>

          <Text style={styles.logoText}>
            Basura<Text style={styles.logoAccent}>Go</Text>
          </Text>

        </View>
      </View>


      {/* ================================================================ */}
      {/* BODY                                                             */}
      {/* ================================================================ */}

      <View
        style={[
          styles.body,
          compact && styles.bodyCompact,
        ]}
      >

        {/* ============================================================ */}
        {/* SIDEBAR                                                      */}
        {/* ============================================================ */}

        <View
          style={[
            styles.sidebar,
            compact && styles.sidebarCompact,
          ]}
        >

          <View style={styles.navigation}>

            {adminSections.map((section) => {

              const active =
                activeSection === section.id;

              return (
                <Link
                  key={section.id}
                  href={section.href}
                  asChild
                >
                  <Pressable
                    style={({ pressed }) =>
                      StyleSheet.flatten([
                        styles.navItem,
                        active && styles.navItemActive,
                        pressed && styles.navItemPressed,
                      ])
                    }
                  >
                    <View style={styles.navIcon}>
                      <Text
                        style={[
                          styles.navIconText,
                          active && styles.navIconTextActive,
                        ]}
                      >
                        {getIcon(section.id)}
                      </Text>
                    </View>

                    <Text
                      style={[
                        styles.navText,
                        active && styles.navTextActive,
                      ]}
                    >
                      {section.title}
                    </Text>
                  </Pressable>
                </Link>
              );
            })}

          </View>


          {/* ========================================================== */}
          {/* SYSTEM STATUS                                              */}
          {/* ========================================================== */}

          <View style={styles.systemStatus}>

            <View style={styles.onlineDot} />

            <View>
              <Text style={styles.onlineTitle}>
                System Online
              </Text>

              <Text style={styles.onlineSubtitle}>
                BasuraGo Operations
              </Text>
            </View>

          </View>

        </View>


        {/* ============================================================ */}
        {/* MAIN                                                          */}
        {/* ============================================================ */}

        <ScrollView
          style={styles.main}
          contentContainerStyle={styles.mainContent}
          showsVerticalScrollIndicator={false}
        >
          {title || description ? (
            <View style={styles.header}>
              {title ? <TextLabel variant="title">{title}</TextLabel> : null}
              {description ? (
                <TextLabel variant="description">{description}</TextLabel>
              ) : null}
            </View>
          ) : null}
          {children}
        </ScrollView>

      </View>

    </View>
  );
}


/* ====================================================================== */
/* DASHBOARD MAP                                                         */
/* ====================================================================== */

export function AdminMap({
  children,
}: PropsWithChildren) {

  return (
    <View style={styles.mapWrapper}>
      {children}
    </View>
  );
}


/* ====================================================================== */
/* DASHBOARD STATISTICS                                                  */
/* ====================================================================== */

type DashboardMetricProps = {
  title: string;
  value: string | number;
};

export function DashboardMetric({
  title,
  value,
}: DashboardMetricProps) {

  return (
    <View style={styles.metric}>

      <View style={styles.metricTitle}>
        <Text style={styles.metricTitleText}>
          {title}
        </Text>
      </View>

      <Text style={styles.metricValue}>
        {value}
      </Text>

    </View>
  );
}


export function DashboardMetrics({
  children,
}: PropsWithChildren) {

  return (
    <View style={styles.metrics}>
      {children}
    </View>
  );
}


/* ====================================================================== */
/* GENERIC CARD                                                          */
/* ====================================================================== */

type TextLabelProps = PropsWithChildren<{
  variant:
    | 'title'
    | 'description'
    | 'body'
    | 'small'
    | 'metric';
}>;

export function TextLabel({ variant, children }: TextLabelProps) {
  return <Text style={textStyles[variant]}>{children}</Text>;
}

export function AdminCard({
  children,
}: PropsWithChildren) {

  return (
    <View style={styles.card}>
      {children}
    </View>
  );
}


export function AdminGrid({
  children,
}: PropsWithChildren) {

  return (
    <View style={styles.grid}>
      {children}
    </View>
  );
}


/* ====================================================================== */
/* ICONS                                                                  */
/* ====================================================================== */

function getIcon(
  id: AdminSectionId,
) {

  switch (id) {

    case 'dashboard':
      return '▦';

    case 'customers':
      return '♙';

    case 'riders':
      return '♢';

    case 'pickups':
      return '▣';

    case 'vehicles':
      return '▱';

    case 'waste-types':
      return '♻';

    case 'pricing':
      return '₱';

    case 'facilities':
      return '⌂';

    case 'reports':
      return '▥';

    default:
      return '•';
  }
}


/* ====================================================================== */
/* STYLES                                                                 */
/* ====================================================================== */

const styles = StyleSheet.create({

  /* ------------------------------------------------------------------ */
  /* PAGE                                                               */
  /* ------------------------------------------------------------------ */

  page: {
    flex: 1,
    backgroundColor: '#F8F4E8',
  },


  /* ------------------------------------------------------------------ */
  /* TOP BAR                                                            */
  /* ------------------------------------------------------------------ */

  topBar: {
    height: 76,

    backgroundColor: '#FFFFFF',

    justifyContent: 'center',

    paddingHorizontal: 30,

    borderBottomWidth: 1,
    borderBottomColor: '#EEE9DE',
  },

  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  logoIcon: {
    width: 38,
    height: 38,

    borderRadius: 10,

    backgroundColor: '#0D5739',

    alignItems: 'center',
    justifyContent: 'center',
  },

  logoIconText: {
    color: '#FFFFFF',
    fontSize: 21,
    fontWeight: '900',
  },

  logoText: {
    color: '#115638',

    fontSize: 26,
    fontWeight: '900',

    letterSpacing: -1.2,
  },

  logoAccent: {
    color: '#20B86B',
  },


  /* ------------------------------------------------------------------ */
  /* BODY                                                               */
  /* ------------------------------------------------------------------ */

  body: {
    flex: 1,

    flexDirection: 'row',
  },

  bodyCompact: {
    flexDirection: 'column',
  },


  /* ------------------------------------------------------------------ */
  /* SIDEBAR                                                            */
  /* ------------------------------------------------------------------ */

  sidebar: {
    width: 220,

    backgroundColor: '#0D5739',

    paddingTop: 34,
    paddingHorizontal: 12,
    paddingBottom: 16,

    borderTopRightRadius: 28,
    borderBottomRightRadius: 28,

    justifyContent: 'space-between',
  },

  sidebarCompact: {
    width: '100%',
    minHeight: 500,

    borderRadius: 22,

    paddingVertical: 20,
  },


  /* ------------------------------------------------------------------ */
  /* NAVIGATION                                                         */
  /* ------------------------------------------------------------------ */

  navigation: {
    gap: 5,
  },

  navItem: {
    minHeight: 48,

    paddingHorizontal: 13,

    borderRadius: 10,

    flexDirection: 'row',
    alignItems: 'center',

    gap: 12,
  },

  navItemActive: {
    backgroundColor: '#FFFFFF',
  },

  navItemPressed: {
    opacity: 0.75,
  },

  navIcon: {
    width: 26,

    alignItems: 'center',
    justifyContent: 'center',
  },

  navIconText: {
    color: '#D6E9DF',

    fontSize: 18,
    fontWeight: '800',
  },

  navIconTextActive: {
    color: '#0D5739',
  },

  navText: {
    color: '#FFFFFF',

    fontSize: 15,
    fontWeight: '800',
  },

  navTextActive: {
    color: '#0D5739',

    fontWeight: '900',
  },


  /* ------------------------------------------------------------------ */
  /* SYSTEM STATUS                                                      */
  /* ------------------------------------------------------------------ */

  systemStatus: {
    backgroundColor: '#08472E',

    borderRadius: 12,

    paddingHorizontal: 12,
    paddingVertical: 12,

    flexDirection: 'row',

    alignItems: 'center',

    gap: 9,
  },

  onlineDot: {
    width: 8,
    height: 8,

    borderRadius: 4,

    backgroundColor: '#20C878',
  },

  onlineTitle: {
    color: '#FFFFFF',

    fontSize: 12,
    fontWeight: '900',
  },

  onlineSubtitle: {
    color: '#A9D3BF',

    fontSize: 9,
    fontWeight: '600',

    marginTop: 2,
  },


  /* ------------------------------------------------------------------ */
  /* MAIN                                                               */
  /* ------------------------------------------------------------------ */

  main: {
    flex: 1,

    backgroundColor: '#F8F4E8',
  },

  mainContent: {
    flexGrow: 1,

    padding: 18,

    minHeight: '100%',
  },


  /* ------------------------------------------------------------------ */
  /* MAP                                                                */
  /* ------------------------------------------------------------------ */

  mapWrapper: {
    flex: 1,

    minHeight: 600,

    position: 'relative',

    overflow: 'hidden',

    borderRadius: 24,

    backgroundColor: '#DCEFE5',

    borderWidth: 1,
    borderColor: '#E7E1D4',
  },


  /* ------------------------------------------------------------------ */
  /* KPI CARDS                                                          */
  /* ------------------------------------------------------------------ */

  metrics: {
    position: 'absolute',

    left: 14,
    right: 14,
    bottom: 14,

    flexDirection: 'row',

    gap: 18,
  },

  metric: {
    flex: 1,

    height: 132,

    backgroundColor: '#20B86B',

    borderRadius: 10,

    paddingHorizontal: 18,
    paddingVertical: 12,

    justifyContent: 'space-between',

    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 5,
  },

  metricTitle: {
    backgroundColor: '#FFFFFF',

    alignSelf: 'flex-start',

    borderRadius: 7,

    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  metricTitleText: {
    color: '#0D5739',

    fontSize: 14,
    fontWeight: '900',
  },

  metricValue: {
    color: '#FFFFFF',

    fontSize: 48,
    lineHeight: 52,

    fontWeight: '900',

    letterSpacing: -1,
  },


  /* ------------------------------------------------------------------ */
  /* GENERIC CARDS                                                      */
  /* ------------------------------------------------------------------ */

  card: {
    backgroundColor: '#FFFFFF',

    borderRadius: 18,

    padding: 18,

    borderWidth: 1,
    borderColor: '#E8E3D8',
  },

  grid: {
    flexDirection: 'row',

    flexWrap: 'wrap',

    gap: 14,
  },

  header: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 24,
    borderWidth: 1,
    borderColor: '#EEE9DE',
    marginBottom: 18,
    gap: 8,
  },
});

const textStyles = StyleSheet.create({
  title: {
    color: '#115638',
    fontSize: 36,
    lineHeight: 42,
    fontWeight: '900',
  },
  description: {
    color: '#48645a',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
  },
  body: {
    color: '#27483e',
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '600',
  },
  small: {
    color: '#60796f',
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  metric: {
    color: '#153d35',
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '800',
  },
});