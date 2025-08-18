import { View, Text , Image, SafeAreaView,  Alert, TouchableOpacity, TextInput} from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';

import {ArrowLeftIcon} from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native';



export default function Login() {
  const navigation= useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async () => {
      try {
        const response = await axios.get(
          `http://192.168.1.2:3000/api/users/?username=${username}&password=${password}`
        );
        if(username==="" || password ===""){
                Alert.alert('Thông báo', 'Sai tài khoản mật khẩu');
        }else{

          if (response.data.length > 0) {
            // Đăng nhập thành công

            Alert.alert('Đăng nhập thành công', 'Chào mừng bạn!');
            navigation.navigate('Home');
          } else {
            // Đăng nhập thất bại
            Alert.alert('Đăng nhập thất bại','Sai tài khoản hoặc mật khẩu');
          }
        }
      } 
      catch (error) {
        if (error.response) {
          // Xử lý lỗi từ máy chủ (ví dụ: lỗi 404, 500, ...)
          console.error('Server error:', error.response.status);
          Alert.alert('Server Error', 'An error occurred on the server.');
        } else if (error.request) {
          // Xử lý lỗi mạng (ví dụ: không thể kết nối)
          console.error('Network error:', error.request);
          Alert.alert('Network Error', 'Unable to connect to the server.');
        } else {
          // Xử lý lỗi khác (ví dụ: lỗi cú pháp JSON)
          console.error('Error:', error.message);
          Alert.alert('Error', 'An error occurred.');
        }
      }
    }; 
  return (
    <View className ="pt-4 flex bg-white h-full w-full " style={{backgroundColor:"#1d9ab1"}}>
        <SafeAreaView className="flex">
          <View className="flex-row justify-start">
              <TouchableOpacity 
                  onPress={()=>navigation.goBack()}
                  className="mt-4 bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
                  >
                <ArrowLeftIcon size="20" color="black" />
              </TouchableOpacity>
          </View>
          <View className="py-2 flex-row justify-center rounded-xl ">
          <Image source={require('../assets/images/icon.png')}
                 style={{alignSelf:'center'}} />
          </View>
        </SafeAreaView>
        <View className="flex-1 bg-white px-8 pt-10"
               style={{borderTopLeftRadius:50,borderTopRightRadius:50}}>
            <View className="form space-y-2">
              <Text className="text-gray-700 ml-4">Tên tài khoản</Text>
              <TextInput
              onChangeText={(text) => {
                setUsername(text);
              }} 
               className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
                          
                          placeholder='Nhập tài khoản Gmail'
              />
               <Text className="text-gray-700 ml-4">Mật khẩu</Text>
              <TextInput 
               onChangeText={(text) => {
                setPassword(text);
              }} 
              className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
                          secureTextEntry
                          placeholder='Nhập mật khẩu'
              />
              <TouchableOpacity className="flex items-end mb-5 mt-1">
                  <Text className="text-gray-700">Quên mật khẩu</Text>
              </TouchableOpacity>
              <TouchableOpacity className="py-3 bg-yellow-400 rounded-xl" onPress={handleLogin}>
                  <Text className="text-center font-xl font-bold text-gray-700">Đăng nhập</Text>
              </TouchableOpacity>
            </View>
              <Text className=" text-xl text-gray-700 font-bold text-center py-5">Đăng nhập bằng cách khác</Text>
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
                    <Text className="text-gray-500 font-semibold">Chưa có tài khoản ? </Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
                        <Text className="font-semibold text-black" 
                               
                        >Đăng kí</Text>
                    </TouchableOpacity>
                </View> 
        </View>
    </View>
  )
}