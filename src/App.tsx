import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar, View } from 'react-native';
import 'react-native-gesture-handler';
import AppContext from './context';
import Routes from './routes';


const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="dark-content" backgroundColor="#f0f0f5" />
    <View style={{ flex: 1, backgroundColor: '#f0f0f5' }}>
      <AppContext>
        <Routes />
      </AppContext>
    </View>
  </NavigationContainer>
);

export default App;
