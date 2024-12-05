// src/navigation/HomeTabNavigator.tsx


import React from 'react';
import { View, Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/HomeScreen';
import CreateProject from '../screens/CreateProject/CreateProjectScreen';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

// Placeholder screen for non-navigational tabs
const PlaceholderScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ fontSize: 16 }}>This tab does not navigate anywhere.</Text>
  </View>
);

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 60, // Customize tab bar height
          paddingBottom: 10,
        },
      }}
    >
      {/* Home Tab */}
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? '#000' : 'gray', fontSize: 10 }}>Home</Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Entypo name="home" size={24} color={focused ? '#808080' : '#000'} />
          ),
        }}
      />

      {/* Create Project Tab */}
      <Tab.Screen
        name="CreateProject"
        component={CreateProject}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? '#000' : 'gray', fontSize: 10 }}>Project</Text>
          ),
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="toolbox-outline"
              size={24}
              color={focused ? '#808080' : '#000'}
            />
          ),
        }}
      />

      {/* Third Tab with Image */}
      <Tab.Screen
        name="SpecialTab"
        component={PlaceholderScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <Image
              source={require('../../assets/Frame46.png')}
              style={{ width: 80, height: 80, resizeMode: 'contain', marginBottom: 10 }}
            />
          ),
        }}
      />

      {/* Message Tab */}
      <Tab.Screen
        name="Message"
        component={PlaceholderScreen}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? '#000' : 'gray', fontSize: 10 }}>Message</Text>
          ),
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="mark-unread-chat-alt"
              size={24}
              color={focused ? '#808080' : '#000'}
            />
          ),
        }}
      />


      {/* Third Tab with Image */}
      <Tab.Screen
        name="PeopleTab"
        component={PlaceholderScreen}
        options={{
          tabBarLabel: 'Merchants',
          tabBarIcon: () => (
            <Image
              source={require('../../assets/people.png')}
              style={{ width: 30, height: 30, resizeMode: 'contain', }}
            />
          ),
        }}
      />

     
      
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
