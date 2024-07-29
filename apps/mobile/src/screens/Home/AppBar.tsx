import { Image, TouchableOpacity, View } from 'react-native';
import { MenuIcon } from '../../assets/icons/MenuIcon';
import ProfileIcon from '../../assets/icons/ProfileIcons';
import { Images } from '../../assets';
import { Routes } from '../../navigation';

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
