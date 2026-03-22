import * as Haptics from 'expo-haptics';
import { Alert, Platform, Pressable, StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors, Fonts } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

type ShuttleAction = {
  icon: 'map.fill' | 'clock.fill' | 'mappin.circle.fill';
  label: string;
  message: string;
};

const SHUTTLE_ACTIONS: ShuttleAction[] = [
  { icon: 'map.fill', label: 'Track shuttle', message: 'Live tracking will open here.' },
  { icon: 'clock.fill', label: 'Schedule', message: 'Shuttle times and frequency will appear here.' },
  { icon: 'mappin.circle.fill', label: 'Stops & routes', message: 'Pick a stop or route here.' },
];

export default function ShuttleScreen() {
  const colorScheme = useColorScheme() ?? 'light';
  const tint = Colors[colorScheme].tint;
  const primaryLabelColor = colorScheme === 'light' ? '#FFFFFF' : '#0F172A';
  const headerTitleColor = '#F8FAFC';
  const headerSubColor = 'rgba(248, 250, 252, 0.82)';

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: Colors.light.header, dark: Colors.dark.header }}
      headerImage={
        <ThemedView style={styles.headerImage}>
          <IconSymbol name="bus.fill" size={44} color={headerSubColor} />
          <ThemedText
            type="title"
            style={[styles.headerTitle, { fontFamily: Fonts.rounded, color: headerTitleColor }]}>
            Shuttle
          </ThemedText>
          <ThemedText style={[styles.headerTagline, { color: headerSubColor }]}>
            Campus & transit
          </ThemedText>
        </ThemedView>
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Shuttle</ThemedText>
      </ThemedView>
      <ThemedText lightColor="#475569" darkColor="#94A3B8">
        Quick actions for riders.
      </ThemedText>

      <ThemedView style={styles.buttonStack}>
        {SHUTTLE_ACTIONS.map((action) => (
          <Pressable
            key={action.label}
            accessibilityRole="button"
            accessibilityLabel={action.label}
            style={({ pressed }) => [
              styles.shuttleButton,
              Platform.select({
                ios: {
                  shadowColor: tint,
                  shadowOffset: { width: 0, height: 6 },
                  shadowOpacity: colorScheme === 'light' ? 0.28 : 0.45,
                  shadowRadius: 10,
                },
                android: { elevation: 5 },
                default: {},
              }),
              { backgroundColor: tint, opacity: pressed ? 0.88 : 1 },
            ]}
            onPressIn={() => {
              if (process.env.EXPO_OS === 'ios') {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              }
            }}
            onPress={() => Alert.alert(action.label, action.message)}>
            <IconSymbol name={action.icon} size={22} color={primaryLabelColor} />
            <ThemedText type="defaultSemiBold" style={[styles.buttonLabel, { color: primaryLabelColor }]}>
              {action.label}
            </ThemedText>
          </Pressable>
        ))}
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    paddingBottom: 28,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    gap: 8,
  },
  headerTitle: {
    marginTop: 4,
  },
  headerTagline: {
    fontSize: 15,
    fontWeight: '500',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 4,
  },
  buttonStack: {
    gap: 12,
    marginTop: 20,
  },
  shuttleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 16,
  },
  buttonLabel: {
    fontSize: 17,
  },
});
