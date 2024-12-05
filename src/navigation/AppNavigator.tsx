import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeTabNavigator from './HomeTabNavigator'; // Import Tab Navigator
import CreateProjectScreen from '../screens/CreateProject/CreateProjectScreen';

type RootStackParamList = {
  Home: undefined; // Home matches Tab.Navigator route
  CreateProject: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Use Tab Navigator for Home */}
        <Stack.Screen
          name="Home"
          component={HomeTabNavigator}
          options={{
            headerShown: false, // No header for the Tab Navigator
          }}
        />
        {/* Other screens like CreateProject */}
        <Stack.Screen
          name="CreateProject"
          component={CreateProjectScreen}
          options={{
            headerShown: false, // No header for the Tab Navigator
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
