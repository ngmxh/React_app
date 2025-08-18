import { View, Text, StatusBar, TextInput,TouchableOpacity,Image ,Icon} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {MagnifyingGlassCircleIcon} from 'react-native-heroicons/solid' 
import { theme, themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native';
const HomeSearch = () => {
    const [showSearch , toggleSearch] =useState(false);
  return (
    <View style={{height:'7%'}} className="pt-8 mx-4 relative z-50">
    <View className="flex-row justify-end items-center rounded-full"
          style={{backgroundColor:showSearch? theme.bgWhite(0.9):'transparent'}}>
            {
              showSearch?(
            <TextInput 
            placeholder='Tìm kiếm'
            placeholderTextColor={'black'}
            className="pl-6 h-10 flex-1 text-base text-black "
            />
              ):null
            }

          <TouchableOpacity 
              onPress={()=>toggleSearch(!showSearch)}
              style={{backgroundColor:theme.bgWhite(0.3)}}
              className="rounded-full p-3 m-1"
          >
            <MagnifyingGlassCircleIcon size="25" color="black"/>
          </TouchableOpacity>
    </View>
   </View>
  )
}

export default HomeSearch