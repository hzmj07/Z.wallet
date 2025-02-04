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


const AuthPage = () => {
  const router = useRouter();
  const [data, setdata] = useState(true);

  return (
    <SafeAreaView className="flex-1 bg-MainBG">
      <Pagehead title={"Settings"} />

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="flex-1">
          <View className="flex-1 justify-end">
            <View className="h-[600px] w-full  rounded-t-[20px] p-8 items-center bg-[rgba(204,204,204,0.76)] ">
              <Text className="w-full font-bold text-[18px] mb-2 pl-3 ">
                Account Settings
              </Text>

              <View className=" h-full w-full mb-4 ">
                <TouchableOpacity className="h-20 w-full bg-white  rounded-2xl mb-3 items-center  pl-4 pr-4 flex-row border-[1px]">
                  <Text className="font-bold text-[20px] ml-6">Change Password</Text>
                  <View className="flex-1  h-full items-end justify-center pr-2 ">
                  <MaterialIcons name="password" size={24} color="black" />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity className="h-20 w-full bg-white  rounded-2xl mb-3 items-center  pl-4 pr-4 flex-row border-[1px]">
                  <Text className="font-bold text-[20px] ml-6">Change Email</Text>
                  <View className="flex-1  h-full items-end justify-center pr-2 ">
                  <MaterialIcons name="email" size={24} color="black" />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity className="h-20 w-full bg-white  rounded-2xl mb-3 items-center  pl-4 pr-4 flex-row border-[1px]">
                  <Text className="font-bold text-[20px] ml-6">Change Phone Number</Text>
                  <View className="flex-1  h-full items-end justify-center pr-2 ">
                  <MaterialIcons name="local-phone" size={24} color="black" />
                  </View>
                </TouchableOpacity>
                <Text className="w-full font-bold text-[18px] mb-2 pl-3 ">
                App Settings
              </Text>
              <TouchableOpacity className="h-20 w-full bg-white  rounded-2xl mb-3 items-center  pl-4 pr-4 flex-row border-[1px]">
                  <Text className="font-bold text-[20px] ml-6">Notifications</Text>
                  <View className="flex-1  h-full items-end justify-center pr-2 ">
                  <MaterialIcons name="notifications" size={24} color="black" />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity className="h-20 w-full bg-white  rounded-2xl mb-3 items-center  pl-4 pr-4 flex-row border-[1px]">
                  <Text className="font-bold text-[20px] ml-6">Theme</Text>
                  <View className="flex-1  h-full items-end justify-center pr-2 ">
                  <MaterialIcons name="dark-mode" size={24} color="black" />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity className="h-20 w-full bg-white  rounded-2xl mb-3 items-center  pl-4 pr-4 flex-row border-[1px]">
                  <Text className="font-bold text-[20px] ml-6">Delete Account</Text>
                  <View className="flex-1  h-full items-end justify-center pr-2 ">
                  <MaterialIcons name="delete" size={24} color="black" />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default AuthPage;
