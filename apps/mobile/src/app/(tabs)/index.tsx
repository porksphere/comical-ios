import { Link } from 'expo-router';

import { PlaceholderScreen } from '@/components/placeholder-screen';
import { ThemedText } from '@/components/themed-text';

export default function BrowseScreen() {
  return (
    <PlaceholderScreen title="Browse">
      {/* Keeps the native-stack + Liquid Glass demo reachable during the sketch. */}
      <Link href="/detail">
        <ThemedText type="link">Liquid Glass demo →</ThemedText>
      </Link>
    </PlaceholderScreen>
  );
}
