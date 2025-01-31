import { View, Text , TextInput} from 'react-native'
import React from 'react'

const inputComponent = ( {placeholder , title }) => {
  return (
    <View className="h-28mt-5 justify-center mt-4 ">
    <Text className=" font-bold text-[18px] mb-2 ml-4">{title}</Text>
    <TextInput
      placeholder= {placeholder}
      className="w-full h-16 bg-white rounded-3xl  items-center text-[15px] pl-4 border-[1px] "
    />
  </View>
  )
}

export default inputComponent