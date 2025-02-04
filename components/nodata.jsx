import {  Text, View  , TouchableOpacity} from 'react-native'
import React from 'react'
import Ionicons from "@expo/vector-icons/Ionicons";

const Nodata = ({title , explanation}) => {
  return (
    <View className=" w-full  rounded-t-[20px] p-16 items-center bg-[rgba(204,204,204,0.76)]">
                <View className="h-24 w-full justify-center">
                  <Text className="font-bold text-[20px]">{title}</Text>
                </View>
                <View className="h-96 bg-white w-full rounded-lg mb-6 border-[1px]  justify-center items-center">
                  <TouchableOpacity>
                    <Ionicons
                      name="add-circle-outline"
                      size={156}
                      color="black"
                    />
                  </TouchableOpacity>
                  <Text className="text-[20px] text-center font-bold mt-5 " >{explanation}</Text>
                </View>
              </View>
  )
}

export default Nodata

