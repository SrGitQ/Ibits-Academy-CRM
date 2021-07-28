import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { Home, Login, Edit, Pay, Course, Counter } from './screens'

const Stack = createStackNavigator();

const App = () => {
  return (
	<NavigationContainer>
		  <Stack.Navigator
		  	screenOptions={{
				  headerShown:false
			  }}
			initialRouteName={"Counter"}
		  >
			  <Stack.Screen name="Home" component={Home}/>
			  <Stack.Screen name="Login" component={Login}/>
			  <Stack.Screen name="Edit" component={Edit}/>
			  <Stack.Screen name="Pay" component={Pay}/>
			  <Stack.Screen name="Course" component={Course}/>
			  <Stack.Screen name="Counter" component={Counter}/>
		  </Stack.Navigator>
	</NavigationContainer>
  );
};


export default App;
