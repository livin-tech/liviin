import { Image, TouchableOpacity, View } from 'react-native';

// Utils
import { Images } from '../../assets';
import { Routes } from '..';
import { MenuIcon } from '../../assets/icons/components/MenuIcon';
import ProfileIcon from '../../assets/icons/components/ProfileIcons';

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
        <MenuIcon />
      </TouchableOpacity>

      <Image source={Images.Logo} />

      <TouchableOpacity onPress={() => navigation.navigate(Routes.Profile)}>
        <ProfileIcon />
      </TouchableOpacity>
    </View>
  );
}
