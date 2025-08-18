import { View, Text, Image, TouchableOpacity,TextInput } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {ArrowLeftIcon ,EyeSlashIcon} from 'react-native-heroicons/solid'

export default function SignUp() {
  const navigation= useNavigation();
  return (
    
    <View className ="flex-1 bg-white h-full w-full " style={{backgroundColor:"#000000"}}>
    <SafeAreaView className="flex">
      <View className="flex-row justify-start">
          <TouchableOpacity 
              onPress={()=>navigation.goBack()}
              className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
             >
            <ArrowLeftIcon size="20" color="black" />
          </TouchableOpacity>
      </View>
      <View className=" flex items-center ">
          <Text className="text-white font-bold tracking-wider text-5xl">Đăng kí</Text>
         
      </View>
    </SafeAreaView>

    <View className=" flex-1 bg-white px-8 pt-9"
           style={{borderTopLeftRadius:50,borderTopRightRadius:50}}>
             <Text style={{fontSize:16,
                        fontWeight:"400" }}
                  className="text-gray-400 pt-2 pb-2" >Nhập thông tin của bạn</Text>
        <View className="form space-y-2">
          <Text className="text-gray-700 ml-4">Email</Text>
          <TextInput className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
                      value=""
                      placeholder='Nhập tài khoản Gmail'
          />

      <View className>
           <Text className="text-gray-700 ml-4">Mật khẩu mới</Text>
            
           <TextInput className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
                      secureTextEntry={true}
                      maxLength={6}
                      placeholder='Nhập mật khẩu'
          />
          <TouchableOpacity className="justify-end">
                <Image />
          </TouchableOpacity>
      </View>
         
          <Text className="text-gray-700 ml-4">Xác minh mật khẩu</Text>
          <TextInput className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
                      secureTextEntry
                      value=""
                      placeholder='Nhập lại mật khẩu'
          />
         
          <View>
            <Text className="py-3 justify-center pl-3">
              Bằng cách đăng ký, bạn đồng ý với Điều khoản, Chính sách quyền riêng tư và Chính sách của chúng tôi.</Text>
          </View>
          <TouchableOpacity className="py-3 bg-yellow-400 rounded-xl" onPress={()=>navigation.navigate('HomeScreens')}>
              <Text className="text-center font-xl font-bold text-gray-700">Đăng kí</Text>
          </TouchableOpacity>
        </View>
          <Text className=" text-xl text-gray-700 font-bold text-center py-5">Đăng kí tài khoản mới</Text>
        <View className="flex-row justify-center space-x-10">
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                <Image source={require('../assets/images/facebook.png')}
                        className="w-10 h-10"/>
            </TouchableOpacity>
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                <Image source={require('../assets/images/apple.png')}
                        className="w-10 h-10"/>
            </TouchableOpacity>
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                <Image source={require('../assets/images/google.png')}
                        className="w-10 h-10"/>
            </TouchableOpacity>
        </View>
        <View className="flex-row justify-center mt-7">
                <Text className="text-gray-500 font-semibold">Bạn đã có tài khoản ! </Text>
                <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
                    <Text className="font-semibold text-black" 
                           onPress={()=>navigation.navigate('Login')}
                    >Đăng nhập</Text>
                </TouchableOpacity>
            </View> 
    </View>
</View>
  )
}