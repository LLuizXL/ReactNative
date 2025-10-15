import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../07-Tabs/screens/HomeScreen";
import SensorDHTScreen from "./Screens/SensorDHTScreen";

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <Buildstrap customThemes={{ dark, light }}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
          name="Home"
          component={HomeScreen} >
            
          </Tab.Screen>
          <Tab.Screen 
          name="Sensor DHT" 
          component={SensorDHTScreen}>

          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </Buildstrap>
  );
}

