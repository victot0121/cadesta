import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import HeaderHomeScreen from '../../components/HeaderHomeScreen';
import ActiveProjects from '../../components/ActiveProjects';
import { ImageSourcePropType } from 'react-native';
import ModernVilla from '../../components/ModernVilla'
import RecentActivity from '../../components/RecentActivity';

const briefcase = require('../../../assets/briefcase11.png');
const briefcase2 = require('../../../assets/briefcase.png');
const briefcase3 = require('../../../assets/briefcase2.png');
const briefcase4 = require('../../../assets/briefcase3.png');

type RootStackParamList = {
  Home: undefined;
  CreateProject: undefined;
};

type ActiveProjectItem = {
  img: ImageSourcePropType;
  text: string;
  score: number;
};

const ActiveProjectsList: ActiveProjectItem[] = [
  {
    img: briefcase,
    text: 'Active Projects',
    score: 12,
  },
  {
    img: briefcase2,
    text: 'In Design',
    score: 7,
  },
  {
    img: briefcase3,
    text: 'In Construction',
    score: 5,
  },
  {
    img: briefcase4,
    text: 'Completed',
    score: 0,
  },
];

const activities = [
  {
    id: '1',
    title: 'Design Approved',
    subtitle: 'Modern Villa Project',
    timestamp: '2 hours ago',
    icon: 'approved',
  },
  {
    id: '2',
    title: 'New Comment',
    subtitle: 'Office Complex Project',
    timestamp: '2 hours ago',
    icon: 'comment',
  },
];


const handleSeeAll = () => {
  console.log('See all clicked');
};



const projects = [
  {
    title: "Modern Villa Project 1",
    type: "Residential Building",
    progress: 60,
    startDate: "Jan 15, 2024",
    timeline: "4 Months",
    comments: "2 New",
  },
  {
    title: "Modern Villa Project 2",
    type: "Residential Building",
    progress: 40,
    startDate: "Feb 10, 2024",
    timeline: "6 Months",
    comments: "3 New",
  },
];



type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <HeaderHomeScreen
          imageSource={require('../../../assets/Group4226.png')}
          title="Welcome ,"
          person="John Abayomi"
          alertImage={require('../../../assets/Frame4239.png')}
        />

        <ActiveProjects ActiveProjectsList={ActiveProjectsList} />

        <ModernVilla ActiveProjectsList={projects} />


        <RecentActivity activities={activities} onSeeAll={handleSeeAll} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
});

export default HomeScreen;
