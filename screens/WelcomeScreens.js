import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

export default function WelcomeScreens() {
    const navigation= useNavigation();
  return (
        <SafeAreaView className="flex-1" style={{backgroundColor:"#318c9d"}}>
         <View className="flex-1 flex justify-around my-4">
                <Text className="text-white font-bold text-4xl text-center">
                    Chào mừng bạn 
                </Text>
            
            <View className="flex-row justify-center">
                 <Image source={require('../assets/images/welcome2.png')}
                        style={{width:350,height:350 }} />
            </View>
            <View className="space-y-4">
                <TouchableOpacity 
                    onPress={()=>navigation.navigate('SignUp')}
                    className="py-3 bg-yellow-300 mx-7 rounded-xl"
                    style={{bottom:50}}
                >
                        <Text className="text-xl font-bold text-center text-gray-700"
                        >Đăng kí tài khoản</Text>
                </TouchableOpacity>
               <View className="flex-row justify-center">
                    <Text className="text-white font-semibold">Bạn đã đăng kí rồi !  </Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                        <Text className="font-semibold text-black" 
                               
                        >Đăng nhập</Text>
                    </TouchableOpacity>
                </View> 
            </View>
        </View>
           
        </SafeAreaView>
  )
}