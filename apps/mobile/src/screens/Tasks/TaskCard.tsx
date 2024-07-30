import { View, StyleSheet, Text } from 'react-native';
import { Avatar, Card, IconButton } from 'react-native-paper';

// Components
import { Icons } from '../../assets';
import { HorizontalLayout } from '../../layouts/HorizontalLayout';

export const TaskCard = ({
  card: { title, createdAt, duration, isMaintenance },
  onPress,
}) => {
  return (
    <Card style={styles.card} onPress={onPress}>
      <HorizontalLayout>
        <View style={styles.iconContainer}>
          <Icons.Clock />
          <Text style={styles.dateText}>{createdAt}</Text>
        </View>
        <View style={styles.contentContainer}>
          <HorizontalLayout>
            <Avatar.Icon
              size={24}
              style={styles.avatar}
              icon={isMaintenance ? Icons.WindRound : Icons.CouchRound}
            />
            <Text style={styles.titleText}>{title}</Text>
          </HorizontalLayout>
          <Text style={styles.subtitleText}>{duration}</Text>
        </View>
        <View style={{ elevation: 1 }}>
          <IconButton
            size={30}
            icon={Icons.Edit}
            onPress={onPress}
            style={styles.editButton}
          />
        </View>
      </HorizontalLayout>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 128,
    borderRadius: 10,
    paddingLeft: 22,
    paddingRight: 10,
    marginHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(228, 232, 216, 0.25)',
    // backgroundColor: '#F5F5F5',
    marginBottom: 20,
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    // Elevation for Android
    elevation: 6,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
    borderWidth: 3,
    borderColor: 'rgba(78, 92, 79, 0.5)',
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  dateText: {
    marginTop: 5,
    fontSize: 10,
    color: '#333333',
  },
  contentContainer: {
    flex: 1,
  },
  avatar: {
    backgroundColor: 'white',
    elevation: 1,
    marginRight: 3,
  },
  titleText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
  },
  subtitleText: {
    marginTop: 15,
    fontSize: 14,
    color: 'rgba(51, 51, 51, 0.6)',
  },
  editButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
  },
});
