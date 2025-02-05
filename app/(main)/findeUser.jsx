import React, { useEffect, useRef, useState } from "react";
import {
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  SafeAreaView,
  ScrollView,
  TouchableOpacity
} from "react-native";

import { useRouter } from "expo-router";
import Pagehead from "../../components/pagehead";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Input from "../../components/inputComponent"
import AntDesign from "@expo/vector-icons/AntDesign";


const AuthPage = () => {
  const router = useRouter();
  const [data, setdata] = useState(true);

  return (
    <SafeAreaView className="flex-1 bg-MainBG">
      <Pagehead title={"Send Money"} dicreption={"Find User using Phone Number or id"} />
    
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView
          className="flex-1"
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
        <View className="flex-1">
          <View className="flex-1 justify-end">
            <View className="h-[450px] w-full  rounded-t-[20px] p-8 items-center   bg-[rgba(204,204,204,0.76)] ">
              <Text className="w-full font-bold text-[18px] mb-2 pl-3 ">
              Quick Access
              </Text>

              <View className=" h-full w-full mb-4 items-center ">
                <View className="h-28 w-full bg-white  rounded-2xl mb-3 items-center justify-start pl-1 flex-row border-[1px]">
                  <View className="bg-[#B7FF00] h-24 w-24 rounded-full " ></View>
                  <View className="bg-[#B7FF00]  h-24 w-24 rounded-full ml-1" ></View>
                  <View className="bg-[#B7FF00]  h-24 w-24 rounded-full ml-1" ></View>
                  <View className="bg-[#B7FF00]  h-24 w-24 rounded-full ml-1" ></View>
                  
                </View>
                
                <Text className="w-full font-bold text-[18px] mb-2 pl-3 ">
                Search User
              </Text>
              <View className=" w-5/6" >
              <Input placeholder={"Phone Number / UserId"} title={"Phone Number / UserId"}/>
              <View className="w-full items-end mt-3">
                      <TouchableOpacity className="h-14 w-14 bg-MainBG rounded-2xl border justify-center items-center mt-4">
                        <AntDesign
                          onPress={() => router.push("/sendMoney")}
                          name="arrowright"
                          size={24}
                          color="white"
                        />
                      </TouchableOpacity>
                    </View>
              </View>
           
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
