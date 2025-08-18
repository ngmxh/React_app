import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreens from "./screens/WelcomeScreens";
import SignUp from "./screens/SignUp";
import Login from "./screens/Login";
import Product from "./screens/ProductSrc";
import Profile from "./screens/Profile";
import Setting from "./screens/Setting";
import Cart from "./screens/Cart";
import ProductDetail from "./screens/ProductDetail";
import { CartProvider } from "./screens/CartContext";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  HomeIcon as HomeOutline,
  Cog8ToothIcon as Cog8ToothOutline,
  ShoppingBagIcon as BagOutline,
  RectangleGroupIcon as RectangleGroupOutline,
} from "react-native-heroicons/outline";
import {
  HomeIcon as HomeSolid,
  Cog8ToothIcon as Cog8ToothSolid,
  ShoppingBagIcon as BagSolid,
  RectangleGroupIcon as RectangleGroupSolid,
} from "react-native-heroicons/solid";
import HomeScreen from "./screens/HomeScreens";
import { theme, themeBgColors, themeColors } from "./theme";
import EditProfile from "./components/EditProfile";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
   <CartProvider>
     <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreens}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={Setting}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Product"
          component={Product}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Edit"
          component={EditProfile}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="ProductDetail" 
          component={ProductDetail} 
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
   </CartProvider>
  );
}

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => menuIcons(route, focused),
        tabBarStyle: {
          marginBottom: 20,
          height: 70,
          alignItems: "center",

          borderRadius: 100,
          marginHorizontal: 20,
          backgroundColor: themeBgColors.bgLight,
        },
        tabBarItemStyle: {
          marginTop: 30,
        },
      })}
    >
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="profile" component={Product} />
      <Tab.Screen name="cart" component={Cart} />
      <Tab.Screen name="sett" component={Setting} />
    </Tab.Navigator>
  );
}
const menuIcons = (route, focused) => {
  let icon;

  if (route.name === "home") {
    icon = focused ? (
      <HomeSolid size="30" color={themeColors.bgLight} />
    ) : (
      <HomeOutline size="30" strokeWidth={2} color="white" />
    );
  } else if (route.name === "cart") {
    icon = focused ? (
      <BagSolid size="30" color={themeColors.bgLight} />
    ) : (
      <BagOutline size="30" strokeWidth={2} color="white" />
    );
  } else if (route.name === "profile") {
    icon = focused ? (
      <RectangleGroupSolid size="30" color={themeColors.bgLight} />
    ) : (
      <RectangleGroupOutline size="30" strokeWidth={2} color="white" />
    );
  } else if (route.name === "sett") {
    icon = focused ? (
      <Cog8ToothSolid size="30" color={themeColors.bgLight} />
    ) : (
      <Cog8ToothOutline size="30" strokeWidth={2} color="white" />
    );
  }

  let buttonClass = focused ? "bg-white" : "";
  return (
    <View
      className={"flex items-center rounded-full p-3 shadow " + buttonClass}
    >
      {icon}
    </View>
  );
};
