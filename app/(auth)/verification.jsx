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

const AuthPage = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-MainBG">
      <View className="h-2/5 items-center justify-center">
        <Image
          className="h-[100px] w-[213px]"
          source={require("../../assets/Group.png")}
        />
      </View>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          className="flex-1"
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View className="flex-1 justify-end">
            {/* Form Alanı */}

            {selectedTab === 0 ? (
              <View className="h-4/5 w-full  rounded-t-[20px] pt-8 items-center bg-[rgba(204,204,204,0.76)]">
                <View className="flex-1 w-5/6  items-center">
                  <Text
                    onPress={() => console.log("fotgor")}
                    className=" text-left w-full font-bold mb-8 mt-4 text-[16px] "
                  >
                    Verification code sent to {"\n"}0551 685 4949
                  </Text>
                  <View className="w-3/4" >
                  <Input placeholder="Enter Code" title="Verification code" />
                 </View>
                  <View className="w-full items-center mt-3">

                    <View className="w-full justify-center flex-row mt-6 pl-2 pr-2" >
                    <TouchableOpacity onPress={()=>{router.back()}} className="h-14 w-14 bg-white rounded-2xl border justify-center items-center mt-4">
                    <AntDesign name="arrowleft" size={24} color="black" />
                    </TouchableOpacity>
                    <View className="flex-1" ></View>
                    <TouchableOpacity className="h-14 w-14 bg-MainBG rounded-2xl border justify-center items-center mt-4">
                    <AntDesign name="arrowright" size={24} color="white" />
                    </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            ) : (
              <View className="h-full w-full  rounded-t-[20px] pt-8 items-center bg-[rgba(204,204,204,0.76)]"></View>
            )}
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default AuthPage;
