import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import { categories } from '../Products/Fruit'

const MainBody = () => {
  return (
   <View>
      <ScrollView horizontal
                  className="mt-4 px-5 "
                  showsHorizontalScrollIndicator={false}>
        {
          categories.map((category,index)=>{
            return(
              <TouchableOpacity
                key={index}
                style={{}}
                className=" mr-8 relative p-4 px-5 rounded-full shadow "
              >
                <Text className="font-semibold">{category}</Text>
              </TouchableOpacity>
            )
          })
        }
      </ScrollView>
    </View>
     
  )
}

export default MainBody