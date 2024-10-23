import { Image, TouchableOpacity, View } from 'react-native';

// Utils
import { Routes } from '@/src/navigation';
import { Images, Icons } from '@/src/assets';

export function AppBar({ navigation }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 16,
      }}
    >
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Icons.MenuIcon />
      </TouchableOpacity>

      <Image source={Images.Logo} />

      <TouchableOpacity onPress={() => navigation.navigate(Routes.Profile)}>
        <Icons.ProfileIcon />
      </TouchableOpacity>
    </View>
  );
}
