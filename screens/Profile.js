import { View, Text, SafeAreaView,TouchableOpacity } from 'react-native'
import React from 'react'
import {Bars3CenterLeftIcon, HeartIcon, ShoppingCartIcon} from 'react-native-heroicons/solid';

export default function Profile() {
  return (
   <SafeAreaView className="flex-1 bg-orange-50">
       <View className="navbar mx-5 flex-row justify-between items-center mt-4">
          <Bars3CenterLeftIcon size="30" color="black" />
          <TouchableOpacity onPress={()=> navigation.navigate('Cart')} className="p-2 rounded-xl bg-orange-100">
            <ShoppingCartIcon size="25" color="orange" />
          </TouchableOpacity>
        </View>
   </SafeAreaView>
  )
}