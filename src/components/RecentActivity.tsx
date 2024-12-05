import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

interface Activity {
  id: string;
  title: string;
  subtitle: string;
  timestamp: string;
  icon: 'approved' | 'comment'; // Define icon types
}

interface RecentActivityProps {
  activities: Activity[];
  onSeeAll: () => void;
}

const RecentActivity: React.FC<RecentActivityProps> = ({ activities, onSeeAll }) => {
  const renderActivityItem = ({ item }: { item: Activity }) => {
    const iconSource =
      item.icon === 'approved'
        ? require('../../assets/tickcircle.png')
        : require('../../assets/message22.png');

    return (
      <View style={styles.activityItem}>
        <Image source={iconSource} style={styles.icon} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            {item.title} <Text style={styles.subtitle}>- {item.subtitle}</Text>
          </Text>
          <Text style={styles.timestamp}>{item.timestamp}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Recent Activity</Text>
        <TouchableOpacity onPress={onSeeAll}>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={activities}
        keyExtractor={(item) => item.id}
        renderItem={renderActivityItem}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,

  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  seeAll: {
    color: 'gray',
    fontWeight: '600',
  },
  list: {
    paddingBottom: 16,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
    marginBottom: 10,
    backgroundColor: '#fff',
    paddingLeft: 16,
    borderRadius: 20,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  subtitle: {
    fontWeight: '400',
    color: '#777',
  },
  timestamp: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
});

export default RecentActivity;
