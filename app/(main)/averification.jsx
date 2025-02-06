import React, { useEffect, useRef, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  SafeAreaView,
  ScrollView,
  Animated,
  Image,
} from "react-native";
import Input from "../../components/inputComponent";
import TabSwitcher from "../../components/Tabs";
import AntDesign from "@expo/vector-icons/AntDesign";
import Pagehead from "../../components/pagehead";
import Ionicons from '@expo/vector-icons/Ionicons';

import { useRouter } from "expo-router";

const AuthPage = () => {
  const [data, setData] = useState(false);
  const router = useRouter();

  const verifi = async()=>{
      //  gerekli istek sonrası loading ve navigation
      console.log("navii");
      
      router.push("/regForm")

  }


  return (
    <SafeAreaView className="flex-1 bg-MainBG">
       <Pagehead
        title={"Account Verification"}
        dicreption={"amount of money to be sent"}
      />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          className="flex-1"
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View className="flex-1 justify-end">
            {/* Form Alanı */}
             {data ? 
             <View className="w-full h-[550px]  rounded-t-[20px] p-8  items-center   bg-[rgba(204,204,204,0.76)] ">
             <View className="flex-1 w-4/6   ">
               <View className="h-24 w-full justify-center ">
                 <Text className="font-bold text-[20px]">
                   Successful
                 </Text>
               </View>
               <View className=" bg-white h-80 w-full border rounded-xl items-center justify-center ">
                   <AntDesign
                     name="checkcircle"
                     size={108}
                     color="#1BB021"
                   />
                 
                 <TouchableOpacity onPress={()=>{router.push("/home")}} className="w-44 h-14 mt-8  rounded-xl bg-gray-200 border flex-row items-center justify-start pl-2 ">
                 <Ionicons name="home" size={24} color="black" /><Text className="font-bold ml-1" >Go Home</Text>
                 </TouchableOpacity></View>
             </View>
           </View>
             : 
             
             <View className=" h-[350px] w-full  rounded-t-[20px] pt-8 pb-16 items-center bg-[rgba(204,204,204,0.76)]">
             <View className="flex-1 w-5/6  items-center">
               <Text
                 onPress={() => console.log("fotgor")}
                 className=" text-left w-full font-bold mb-8 mt-4 text-[16px] "
               >
                 Verification code sent to {"\n"}hazem2553hh@gmail.com
               </Text>
               <View className="w-3/4" >
               <Input placeholder="Enter Code" title="Verification code" type={"numeric"} />
              </View>
               <View className="w-full items-center mt-3">

                 <View className="w-full justify-center flex-row mt-6 pl-2 pr-2" >
                 
                 <View className="flex-1" ></View>
                 <TouchableOpacity onPress={()=>setData(true)} className="h-14 w-14 bg-MainBG rounded-2xl border justify-center items-center mt-4">
                 <AntDesign name="arrowright" size={24} color="white" />
                 </TouchableOpacity>
                 </View>
               </View>
             </View>
           </View>}
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default AuthPage;
