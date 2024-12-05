import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Bar as ProgressBar } from 'react-native-progress';

interface ActiveProjectItem {
  title: string;
  type: string;
  progress: number;
  startDate: string;
  timeline: string;
  comments: string;
}

interface ActiveProjectsProps {
  ActiveProjectsList: ActiveProjectItem[];
}

const ActiveProjects: React.FC<ActiveProjectsProps> = ({ ActiveProjectsList }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Active Projects</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
        {ActiveProjectsList.map((project, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.title}>{project.title}</Text>
            <Text style={styles.type}>{project.type}</Text>
            <Text style={styles.progressLabel}>Overall Progress</Text>
            <View style={styles.progressContainer}>
              <ProgressBar
                progress={project.progress / 100}
                width={200}
                color="#6BCF63"
              />
              <Text style={styles.progressText}>{project.progress}%</Text>
            </View>
            <View style={styles.infoRow}>

              <View style={styles.infoItem}>
                <Image source={require('../../assets/calendar5.png')} style={styles.icon} />
                <View>
                  <Text style={styles.infoText}>Start Date</Text>
                  <Text>{project.startDate}</Text>
                </View>
              </View>

              <View style={styles.infoItem}>
                <Image source={require('../../assets/calendar.png')} style={styles.icon} />
                <View>
                  <Text style={styles.infoText}>Timeline</Text>
                  <Text>{project.timeline}</Text>
                </View>
              </View>

              <View style={styles.infoItem}>
                <Image source={require('../../assets/message22.png')} style={styles.icon} />
                <View>
                  <Text style={styles.infoText}>Comments</Text>
                  <Text>{project.comments}</Text>
                </View>
              </View>
            </View>

          </View>
        ))}
      </ScrollView>
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
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAll: {
    color: 'gray',
    fontWeight: '600',
  },
  scrollView: {
    marginTop: 16,
  },
  card: {
    width: 300,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginRight: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  type: {
    color: '#8A8A8A',
    marginBottom: 8,
  },
  progressLabel: {
    fontSize: 14,
    color: '#333',
    marginTop: 8,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  progressText: {
    marginLeft: 8,
    color: '#333',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  infoItem: {
    alignItems: 'center',
    flexDirection: "row"
  },
  icon: {
    width: 16,
    height: 16,
    marginBottom: 4,
  },
  infoText: {
    fontSize: 12,
    color: '#8A8A8A',
  },
});

export default ActiveProjects;
