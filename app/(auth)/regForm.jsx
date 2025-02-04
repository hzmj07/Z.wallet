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
import { useRouter } from "expo-router";
import Checkbox from 'expo-checkbox';

const AuthPage = () => {
  const [isSelected, setSelection] = useState();
  const router = useRouter();

  const verifi = async()=>{
      //  gerekli istek sonrası loading ve navigation
      console.log("navii");
      
      router.push("/regForm")

  }


  return (
    <SafeAreaView className="flex-1  bg-MainBG">
      <View className=" h-2/6 items-center justify-center">
        <Image
          className="h-[100px] w-[213px]"
          source={require("../../assets/Group.png")}
        />
      </View>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View className="flex-1 justify-end">
            {/* Form Alanı */}
              <View className=" w-full flex-1 rounded-t-[20px] p-8  items-center bg-[rgba(204,204,204,0.76)] ">
              <View className=" w-full justify-start mt-4">                  
            
                  <Input placeholder="Enter Name" title="Name" />
                  <Input placeholder="Enter Last Name" title="Last Name" />
                  <Input placeholder="Enter Email" title="Email" />
                  <Input placeholder="Enter Password" title="Password" />

                  {/*buton alanı*/}
                  <View className="w-full flex-row mt-3 justify-center" >
                    <Checkbox
                      value={isSelected}
                      onValueChange={setSelection}
                    
                    />
                    <Text className="pl-2">User Agreement</Text>
                  </View>
                </View>
                <View className="w-full items-center mt-3">
                    <View className="w-full justify-center flex-row mt-6 " >
                    <TouchableOpacity onPress={()=>{router.back()}} className="h-14 w-14 bg-white rounded-2xl border justify-center items-center mt-4">
                    <AntDesign name="arrowleft" size={24} color="black" />
                    </TouchableOpacity>
                    <View className="flex-1" ></View>
                    <TouchableOpacity onPress={()=>verifi()} className="h-14 w-14 bg-MainBG rounded-2xl border justify-center items-center mt-4">
                    <AntDesign name="arrowright" size={24} color="white" />
                    </TouchableOpacity>
                    </View>
                  </View>
              </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default AuthPage;
