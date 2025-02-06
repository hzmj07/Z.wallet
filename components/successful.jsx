import {  Text, View  , TouchableOpacity} from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
export const Successful = ({title , explanation}) => {
  return (
     <View className="flex-1 w-full " >
                <View className="h-24 w-full justify-center">
                  <Text className="font-bold text-[20px]">{title}</Text>
                </View>
                <View className="h-80 bg-white w-full rounded-lg mb-6 border-[1px]  justify-center items-center">
                  <TouchableOpacity>
                  <AntDesign name="checkcircle" size={108} color="#1BB021" />
                  </TouchableOpacity>
                  <View className="h-10 w-full bg-white" >
                    <Text>sdaa</Text>
                  </View>
                </View>
              </View>
  )
}



