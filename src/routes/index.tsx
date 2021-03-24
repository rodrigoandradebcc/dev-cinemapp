import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Tabs from './Tabs';


const Route = createStackNavigator();

const HomeRoutes: React.FC = () => (

  <Route.Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#f0f0f5' } }}>
    <Route.Screen name="Home" component={Tabs} />
  </Route.Navigator>
);

export default HomeRoutes;
