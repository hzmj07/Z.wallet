import { View, Text , TextInput} from 'react-native'
import React from 'react'

const inputComponent = ( {placeholder , title , setVAlue , value , type , auto}) => {
  return (
    <View className="h-28 justify-end ">
   {title && <Text className=" font-bold text-[18px] mt-4  ml-4">{title}</Text>}
    <TextInput
    value={value}
    onChange={setVAlue}
      placeholder= {placeholder}
      className="w-full h-16 bg-white rounded-2xl  items-center text-[15px] pl-4 border-[1px] "
    keyboardType={type ? type : null}
    autoFocus={auto ? true : false}
    />
  </View>
  )
}

export default inputComponent