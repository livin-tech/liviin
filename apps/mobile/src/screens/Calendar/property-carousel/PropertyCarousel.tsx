import {
  ScrollView,
  TouchableOpacity,
  View,
  StyleSheet,
  FlatList,
  ViewStyle,
} from 'react-native';
import { HorizontalLayout } from '../../../layouts/HorizontalLayout';
import { Colors, IconButton, Subheading } from 'react-native-paper';
import ApartmentIcon from '../../../assets/icons/ApartmentIcon';
import House from '../../../assets/icons/House';
import { theme } from '../../../theme';
import { useRef, useState } from 'react';

export function PropertyCarousel({
  count = 5,
  selectedProperty,
  onPropertySelect,
}) {
  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(2);

  return (
    <HorizontalLayout>
      <IconButton
        icon="chevron-left"
        size={20}
        onPress={() => {
          // if(currentIndex - 1 < 2) return;
          // @ts-ignore
          listRef.current?.scrollToIndex({ index: 0, animated: true });
          setCurrentIndex(currentIndex - 1);
        }}
      />
      <FlatList
        ref={listRef}
        style={styles.container}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={Array.from({ length: count }, (_, i) => i + 1)}
        renderItem={({ item: x }) => (
          <TouchableOpacity
            style={[
              styles.apartmentItem,
              {
                backgroundColor:
                  x === selectedProperty
                    ? theme.colors.accent
                    : 'rgba(159, 176, 106, 0.15)',
              },
            ]}
            onPress={() => onPropertySelect(x)}
          >
            <Subheading style={{ marginBottom: 16 }}>Property {x}</Subheading>
            {x % 2 === 0 ? <ApartmentIcon /> : <House />}
          </TouchableOpacity>
        )}
      />
      <IconButton
        icon="chevron-right"
        size={20}
        onPress={() => {
          // if(currentIndex + 1 > 4) return;
          // @ts-ignore
          listRef.current?.scrollToIndex({ index: 4, animated: true });
          setCurrentIndex(currentIndex + 1);
        }}
      />
    </HorizontalLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(159, 176, 106, 0.15)',
    borderRadius: 16,
  },
  apartmentItem: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    marginHorizontal: 8,
    alignItems: 'center',
    borderRadius: 16,
    marginVertical: 8,
  },
});
