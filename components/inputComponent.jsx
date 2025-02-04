import { View, Text , TextInput} from 'react-native'
import React from 'react'

const inputComponent = ( {placeholder , title , setVAlue , value }) => {
  return (
    <View className="h-28 justify-center  ">
   {title && <Text className=" font-bold text-[18px] mt-4  ml-4">{title}</Text>}
    <TextInput
    value={value}
    onChange={setVAlue}
      placeholder= {placeholder}
      className="w-full h-16 bg-white rounded-3xl  items-center text-[15px] pl-4 border-[1px] "
    />
  </View>
  )
}

export default inputComponent