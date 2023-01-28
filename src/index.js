import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import Home from './Pages/Home';
import ProfileDetails from './Pages/ProfileDetails';
import Iletisim from './Pages/iletisim';

const App = () => {

  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home-outline';
            } else if (route.name === 'ProfileDetails') {
              iconName = focused ? 'information-circle' : 'information-circle-outline';
            } else if (route.name === 'Iletisim') {
              iconName = focused ? 'megaphone' : 'megaphone-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#1e90ff',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="ProfileDetails" component={ProfileDetails} />
        <Tab.Screen name="Iletisim" component={Iletisim} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App;
