import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Map from "./map";
import AboutMe from "./aboutMe";

const Stack = createNativeStackNavigator();
export default function App() {

  return (

    < NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen
          name="Map"
          component={Map}
        />
        <Stack.Screen
          name="AboutMe"
          component={AboutMe}
        />
      </Stack.Navigator>
    </NavigationContainer >
  )
}
