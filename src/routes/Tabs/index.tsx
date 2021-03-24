import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import TabBar from '../../components/TabBar';

const Tab = createBottomTabNavigator();
import HomePage from '../../pages/Home';
import FavoriteMovies from '../../pages/FavoriteMovies';


const Tabs: React.FC = () => {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen name="Procurar" component={HomePage} />
      <Tab.Screen name="Favoritos" component={FavoriteMovies} />
    </Tab.Navigator>

  );
}

export default Tabs;
