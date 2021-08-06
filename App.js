import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { Home, Login, Edit, Pay, Course, Counter, Add } from './screens'

const Stack = createStackNavigator();


import { createStore, applyMiddleware } from "redux";
import { clientsReducer } from './clientsReducer';
import { Provider } from 'react-redux';

const store = createStore(clientsReducer, applyMiddleware())


const App = () => {
  return (
	<Provider store={store}>
		<NavigationContainer>
			  <Stack.Navigator
			  	screenOptions={{
					  headerShown:false
				  }}
				initialRouteName={"Login"}
			  >
				  <Stack.Screen name="Home" component={Home}/>
				  <Stack.Screen name="Add" component={Add}/>
				  <Stack.Screen name="Login" component={Login}/>
				  <Stack.Screen name="Edit" component={Edit}/>
				  <Stack.Screen name="Pay" component={Pay}/>
				  <Stack.Screen name="Course" component={Course}/>
				  <Stack.Screen name="Counter" component={Counter}/>
			  </Stack.Navigator>
		</NavigationContainer>
	</Provider>
  );
};


export default App;