import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { Home, Login } from './screens'

const Stack = createStackNavigator();

const App = () => {
  return (
	<NavigationContainer>
		  <Stack.Navigator
		  	screenOptions={{
				  headerShown:false
			  }}
			initialRouteName={"Login"}
		  >
			  <Stack.Screen name="Home" component={Home}/>
			  <Stack.Screen name="Login" component={Login}/>
		  </Stack.Navigator>
	</NavigationContainer>
  );
};


export default App;
