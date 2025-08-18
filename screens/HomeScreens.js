import {
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
  Icon,
  FlatList,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeSearch from "../components/HomeSearch";
import { MapPinIcon } from "react-native-heroicons/solid";
import { BellIcon } from "react-native-heroicons/outline";
import { themeColors } from "../theme";
import MainBody from "../components/MainBody";
import { featuredFruits } from "../Products/Fruit";
import FruitCard from "../components/fruitCard";
import FruitCardSales from "../components/fruitCardSales";

export default function HomeScreen({ navigation }) {
  return (
    <View className="pt-4 flex-1 relative bg-white">
      <ScrollView>
        <StatusBar />
        <Image
          source={require("../assets/images/fruit2.png")}
          className="w-full absolute -top-5 opacity-10"
          style={{ height: 220 }}
        />
        <SafeAreaView className="flex-1">
          <View className="px-4 justify-between items-center flex-row">
            <Image
              source={require("../assets/images/user.png")}
              className="mt-4 ml-2 h-9 w-9 rounded-full"
            />
            <View className="flex-row items-center space-x-2">
              <MapPinIcon size="25" color="black" className="mt-4" />
              <Text className="font-semibold mr-5">
                234 Hoàng Quốc Việt , Hà Nội
              </Text>
              <BellIcon className="mt-6" size="27" color="black" />
            </View>
          </View>
          <HomeSearch />

          {/* thu muc hoa qua */}
          <View>
            <View className="mt-4">
              <Text
                style={{ color: themeColors.text }}
                className="mt-6 font-semibold text-3xl ml-5"
              >
                Hoa Quả tươi ngon
              </Text>
              <Image
                source={require("../assets/images/banner.png")}
                className="ml-3 mt-4"
              />
            </View>
            <Text
              style={{ color: themeColors.text }}
              className="ml-3 mt-4 font-semibold text-xl"
            >
              Sản phẩm bán chạy nhất của chúng tôi
            </Text>
            <MainBody />
          </View>

          {/*  */}
          <View className="mt-8 ">
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {featuredFruits.map((fruit, index) => (
                <FruitCard fruit={fruit} key={index} />
              ))}
            </ScrollView>
          </View>

          {/*  */}
          <View className="mt-8 pl-5 space-y-1">
            <Text
              className="text-xl font-bold"
              style={{ color: themeColors.text }}
            >
              Thông tin sản phẩm
            </Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{ overflow: "visible" }}
            >
              {[...featuredFruits].reverse().map((fruit, index) => (
                <FruitCardSales fruit={fruit} key={index} />
              ))}
            </ScrollView>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}
