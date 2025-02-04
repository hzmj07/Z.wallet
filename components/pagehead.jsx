import { StyleSheet, Text, View , TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";

const pagehead = ({title , dicreption}) => {
    const router = useRouter();

  return (
<View className="h-44 pt-8 items-start justify-strat pl-8">
        <View className="w-full h-20 ">
          <TouchableOpacity
            onPress={() => {
              router.back();
            }}
            className="h-14 w-14 bg-white rounded-2xl border justify-center items-center mt-4"
          >
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <Text className=" font-bold text-[24px] color-[#B7FF00] " >{title}</Text>
        <Text className=" font-bold text-[10px] color-[#B7FF00] " >{dicreption || null}</Text>


      </View>
  )
}

export default pagehead
