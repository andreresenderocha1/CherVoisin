import React from "react";
import { Text } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { HomeScreen } from "./src/screens/home/HomeScreen";
import { EventsScreen } from "./src/screens/events/EventsScreen";
import { MoreScreen } from "./src/screens/more/MoreScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { EventsContextProvider } from "./src/services/events/events.context/";

import { theme } from "./infrastructure/theme";
import { LoginScreen } from "./src/screens/login/LoginScreen";

const Settings = () => <Text>settings</Text>;
const Map = () => <Text>map</Text>;

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Home: "md-home",
  Event: "md-add-circle-outline",
  More: "md-ellipsis-vertical-outline",
};

const screenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <EventsContextProvider>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={screenOptions}
              tabBarOptions={{
                activeTintColor: "tomato",
                inactiveTintColor: "gray",
              }}
            >
              <Tab.Screen name="Home" component={HomeScreen} />
              <Tab.Screen name="Event" component={EventsScreen} />
              <Tab.Screen name="More" component={MoreScreen} />
            </Tab.Navigator>
          </NavigationContainer>
        </EventsContextProvider>
      </ThemeProvider>
    </>
  );
}
