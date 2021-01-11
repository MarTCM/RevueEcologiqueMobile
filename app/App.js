import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import ArticleScreen from "./screens/ArticleScreen";
import ArticlesScreen from "./screens/ArticlesScreen";
import HomeScreen from "./screens/HomeScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Articles" component={ArticlesScreen} />
    <Stack.Screen
      name="Article"
      options={({ route }) => ({ title: route.params.item.titre })}
      component={ArticleScreen}
    />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: "#15a11a",
      activeTintColor: "white",
      inactiveBackgroundColor: "#eee",
      inactiveTintColor: "black",
    }}
  >
    <Tab.Screen
      name="Acceuil"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Articles"
      component={StackNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialIcons name="article" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

function App(props) {
  return (
    <React.Fragment>
      <StatusBar hidden />
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </React.Fragment>
  );
}

export default App;
