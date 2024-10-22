import React from 'react';
import { View } from 'react-native';
import { ProgressBar } from 'react-native-paper';

// Utils
import { theme } from '../../theme';
import { ScreenLayout } from '../../layouts';

interface OnBoardingProps {
  children: React.ReactNode;
}

export function OnBoarding({ children }: OnBoardingProps) {
  return (
    <ScreenLayout headerTitle="Your property is...">
      <View style={{ flex: 1 }}>
        <View style={{ alignItems: 'center' }}>
          <View style={{ width: 200, marginVertical: 16 }}>
            <ProgressBar progress={0.5} color={theme.colors.primary} />
          </View>
          {children}
        </View>
      </View>
    </ScreenLayout>
  );
}
