import React, { useEffect, useRef, useState } from "react";
import {
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";

import { useRouter } from "expo-router";
import Pagehead from "../../components/pagehead";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const AuthPage = () => {
  const router = useRouter();
  const [data, setdata] = useState(true);

  return (
    <SafeAreaView className="flex-1 bg-MainBG">
      <Pagehead title={"Account details"} />

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="flex-1">
          <View className="flex-1 justify-end">
            <View className="h-[600px] w-full  rounded-t-[20px] p-8  pt-16 items-center bg-[rgba(204,204,204,0.76)] ">
              <View className=" h-full w-full mb-4 ">
                <TouchableOpacity className="h-20 w-full bg-white  rounded-2xl mb-3 items-center  pl-4 pr-4 flex-row border-[1px]">
                  <Image
                    className="h-14 w-14 ml-2  mr-4 rounded-md"
                    source={require("../../assets/profile.png")}
                  />
                  <View className="flex-1  h-full items-start justify-center pr-2 ">
                    <Text className="font-bold text-[18px] ml-6">
                      Hazem Aljasem
                    </Text>
                    <Text className="font-bold text-[12px] ml-6">
                      +90556854949
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity className="h-20 w-full bg-white  rounded-2xl mb-3 items-center  pl-4 pr-4 flex-row border-[1px]">
                  <Text className="font-bold text-[18px] ml-6">
                    Email
                  </Text>
                  <View className="flex-1  h-full items-end justify-center pr-2 ">
                  <Text className="font-bold text-[12px] ml-6">
                  hazem2553hh@gmail.com
                  </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity className="h-20 w-full bg-white  rounded-2xl mb-3 items-center  pl-4 pr-4 flex-row border-[1px]">
                 <View className="flex-1 h-full  justify-center pr-2 ">
                 <Text className="font-bold text-[18px] ml-6">
                 Account type
                  </Text>
                  <Text className="font-bold text-[12px] ml-6">
                  Verify Your Account to use all features of Z.Wallet
                  </Text>
                  </View> 
                  <Text className="font-bold text-[12px] ml-6">
                  Verified Account
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity className="h-20 w-full bg-white  rounded-2xl mb-3 items-center  pl-4 pr-4 flex-row border-[1px]">
                 <View className="flex-1 h-full  justify-center pr-2 ">
                 <Text className="font-bold text-[18px] ml-6">
                 Wallet ID
                  </Text>
                  <Text className="font-bold text-[12px] ml-6">
                  Account number you can share to transfer money and receive payments
                  </Text>
                  </View> 
                  <Text className="font-bold text-[12px] ml-6">
                  123456789
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity className="h-20 w-full bg-white  rounded-2xl mb-3 items-center  pl-4 pr-4 flex-row border-[1px]">
                 <View className="flex-1 h-full  justify-center pr-2 ">
                 <Text className="font-bold text-[18px] ml-6">
                 Balance
                  </Text>
                  <Text className="font-bold text-[12px] ml-6">
                  Current balance in your wallet
                  </Text>
                  </View> 
                  <Text className="font-bold text-[16px] ml-6">
                  SY 300,90
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity className="h-20 w-full bg-white  rounded-2xl mb-3 items-center  pl-4 pr-4 flex-row border-[1px]">
                <View className="flex-1 h-full  justify-center pr-2 ">
                 <Text className="font-bold text-[18px] ml-6">
                 Your bank account
                  </Text>
                  <Text className="font-bold text-[12px] ml-6">
                  See and manage your bank accounts linked to your wallet
                  </Text>
                  </View> 
                  <View className=" h-full items-end justify-center pr-2 ">
                    <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
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
