import {
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { COLORS, FONTS } from "../theme";
import { MaterialIcons } from "@expo/vector-icons";

export default function Setting() {
  const navigateToEditProfile = () => {
    navigation.navigate("Edit");
  };

  const navigateToSecurity = () => {
    console.log("Security function");
  };

  const navigateToNotifications = () => {
    console.log("Notifications function");
  };

  const navigateToPrivacy = () => {
    console.log("Privacy function");
  };

  const navigateToSubscription = () => {
    console.log("Subscription function");
  };

  const navigateToSupport = () => {
    console.log("Subscription function");
  };

  const navigateToPolicies = () => {
    console.log("Subscription function");
  };

  const navigateToFreeUpSpace = () => {
    console.log("Free space function");
  };

  const navigateToDateSaver = () => {
    console.log("Date saver function");
  };

  const navigateToReportProblem = () => {
    console.log("Report a problem");
  };

  const addAccount = () => {
    console.log("Add Account");
  };

  const logout = () => {
    console.log("Log Out");
  };

  const accountItem = [
    {
      icon: "person-outline",
      text: "Edit Profile",
      action: navigateToEditProfile,
    },
    { icon: "security", text: "Security", action: navigateToSecurity },
    {
      icon: "notifications-none",
      text: "Notifications",
      action: navigateToNotifications,
    },
    { icon: "lock-outline", text: "Privacy", action: navigateToPrivacy },
  ];

  const supportItems = [
    {
      icon: "credit-card",
      text: "My Subscription",
      action: navigateToSubscription,
    },
    { icon: "help-outline", text: "Help & Support", action: navigateToSupport },
    {
      icon: "info-outline",
      text: "Terms and Policies",
      action: navigateToPolicies,
    },
  ];

  const cacheAndCellularItems = [
    {
      icon: "delete-outline",
      text: "Free up space",
      action: navigateToFreeUpSpace,
    },
    { icon: "save-alt", text: "Date Saver", action: navigateToDateSaver },
  ];

  const actionsItems = [
    {
      icon: "flag",
      text: "Report a problem",
      action: navigateToReportProblem,
    },
    { icon: "people-outline", text: "Add Account", action: addAccount },
    { icon: "logout", text: "Log Out", action: logout },
  ];

  const renderSettingsItem = ({ icon, text, action }) => (
    <TouchableOpacity
      onPress={action}
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 8,
        paddingLeft: 12,
        backgroundColor: COLORS.gray,
      }}
    >
      <MaterialIcons name={icon} size={24} color="black" />
      <Text
        className="font-semibold text-base"
        style={{
          marginLeft: 36,
          fontWeight: 600,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );

  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      <View
        style={{
          marginHorizontal: 12,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="border border-gray-500 rounded-xl"
          style={{
            backgroundColor: "rgba(255,255,255,0.2)",
            position: "absolute",
            left: 0,
          }}
        >
          <ChevronLeftIcon size="30" color="black" />
        </TouchableOpacity>
        <Text className="font-bold text-xl ">Settings</Text>
      </View>

      {/* Setting Body */}

      <ScrollView style={{ marginHorizontal: 12 }}>
        <View style={{ marginBottom: 12 }}>
          <Text className="font-bold" style={{ marginVertical: 10 }}>
            Tài khoản
          </Text>
          <View
            style={{
              borderRadius: 12,
              backgroundColor: COLORS.gray,
            }}
          >
            {accountItem.map((item, index) => (
              <React.Fragment key={index}>
                {renderSettingsItem(item)}
              </React.Fragment>
            ))}
          </View>
        </View>

        {/*  */}
        <View style={{ marginBottom: 12 }}>
          <Text className="font-bold" style={{ marginVertical: 10 }}>
            Support & About
          </Text>
          <View
            style={{
              borderRadius: 12,
              backgroundColor: COLORS.gray,
            }}
          >
            {supportItems.map((item, index) => (
              <React.Fragment key={index}>
                {renderSettingsItem(item)}
              </React.Fragment>
            ))}
          </View>
        </View>

        {/*  */}
        <View style={{ marginBottom: 12 }}>
          <Text className="font-bold" style={{ marginVertical: 10 }}>
            Bộ nhớ Thiết bị
          </Text>
          <View
            style={{
              borderRadius: 12,
              backgroundColor: COLORS.gray,
            }}
          >
            {cacheAndCellularItems.map((item, index) => (
              <React.Fragment key={index}>
                {renderSettingsItem(item)}
              </React.Fragment>
            ))}
          </View>
        </View>

        {/*  */}
        <View style={{ marginBottom: 12 }}>
          <Text className="font-bold" style={{ marginVertical: 10 }}>
            Giúp đỡ
          </Text>
          <View
            style={{
              borderRadius: 12,
              backgroundColor: COLORS.gray,
            }}
          >
            {actionsItems.map((item, index) => (
              <React.Fragment key={index}>
                {renderSettingsItem(item)}
              </React.Fragment>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
