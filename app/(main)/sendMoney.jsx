import React, { useEffect, useRef, useState } from "react";
import {
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { useRouter } from "expo-router";
import Pagehead from "../../components/pagehead";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Input from "../../components/inputComponent";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Successful } from "../../components/successful";
import Ionicons from '@expo/vector-icons/Ionicons';
const AuthPage = () => {
  const router = useRouter();
  const [data, setdata] = useState(true);
  const [amount, setamount] = useState(null);
  const [successful, setsuccessful] = useState(false);
  return (
    <SafeAreaView className="flex-1 bg-MainBG">
      <Pagehead
        title={"Send Money"}
        dicreption={"amount of money to be sent"}
      />

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View className="flex-1">
            <View className="flex-1 justify-end">
              {data ? (
                <View className="h-[300px] w-full  rounded-t-[20px] p-8 pt-10 items-center   bg-[rgba(204,204,204,0.76)] ">
                  <View className=" h-full w-full mb-4 items-center ">
                    <View className="h-28 w-full bg-white  rounded-2xl mb-3 items-center justify-start pl-10 flex-row border-[1px]">
                      <View className="bg-[#B7FF00] h-20 w-20 rounded-full mr-6 "></View>
                      <Text className="font-bold" style={{ fontSize: 24 }}>
                        Hazem Aljasem
                      </Text>
                    </View>

                    <View className="flex-row  items-end">
                      <View className=" w-3/6   ">
                        <Input
                          placeholder={"Amount"}
                          auto={"true"}
                          type={"numeric"}
                        />
                      </View>
                      <TouchableOpacity className="h-16 w-16 bg-MainBG rounded-2xl border justify-center items-center ml-2">
                        <AntDesign
                          onPress={() => setdata(false)}
                          name="arrowright"
                          size={24}
                          color="white"
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              ) : (
                <View>
                  {successful ? (
                    <View className="w-full h-[550px]  rounded-t-[20px] p-8  items-center   bg-[rgba(204,204,204,0.76)] ">
                      <View className="flex-1 w-4/6   ">
                        <View className="h-24 w-full justify-center ">
                          <Text className="font-bold text-[20px]">
                            Successful
                          </Text>
                        </View>
                        <View className=" bg-white h-96 w-full border rounded-xl items-center justify-center ">
                          <TouchableOpacity>
                            <AntDesign
                              name="checkcircle"
                              size={108}
                              color="#1BB021"
                            />
                          </TouchableOpacity>
                          <TouchableOpacity className="w-44 h-14 mt-4  rounded-xl bg-gray-200 border flex-row items-center justify-start pl-2">
                          <Ionicons name="document-outline" size={24} color="black" /><Text className="font-bold ml-1" >Save Document</Text>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={()=>{router.push("/home")}} className="w-44 h-14 mt-4  rounded-xl bg-gray-200 border flex-row items-center justify-start pl-2 ">
                          <Ionicons name="home" size={24} color="black" /><Text className="font-bold ml-1" >Go Home</Text>
                          </TouchableOpacity></View>
                      </View>
                    </View>
                  ) : (
                    <View className="w-full h-[500px]  rounded-t-[20px] p-16  items-center   bg-[rgba(204,204,204,0.76)] ">
                      <View className="h-[350px] bg-white w-full rounded-lg mb-6 border-[1px]  justify-start items-center">
                        <View className="h-28 w-full rounded-2xl mb-3 items-center justify-start pl-6 flex-row ">
                          <View className="bg-[#B7FF00] h-16 w-16 rounded-full mr-6 "></View>
                          <Text className="font-bold" style={{ fontSize: 22 }}>
                            Hazem Aljasem
                          </Text>
                        </View>
                        <View className="h-20 w-full bg-yellow-600 flex-row">
                          <View className="w-1/2 bg-white items-start justify-center pl-7">
                            <Text
                              className="font-bold color-gray-600"
                              style={{ fontSize: 14 }}
                            >
                              Date
                            </Text>
                            <Text
                              className="font-bold color-black "
                              style={{ fontSize: 16 }}
                            >
                              12 ock 2024
                            </Text>
                          </View>
                          <View className="w-1/2 bg-white items-start justify-center pl-7">
                            <Text
                              className="font-bold color-gray-600"
                              style={{ fontSize: 14 }}
                            >
                              id
                            </Text>
                            <Text
                              className="font-bold color-black "
                              style={{ fontSize: 16 }}
                            >
                              123456789
                            </Text>
                          </View>
                        </View>
                        <View className="h-28 w-full pl-1 pr-1">
                          <Input
                            placeholder={"Description*"}
                            title={"Description*"}
                          />
                        </View>

                        <Text
                          className="font-bold mt-6"
                          style={{ fontSize: 24 }}
                        >
                          144.460 SY
                        </Text>
                      </View>
                      <View className="flex-1 w-full items-end">
                        <TouchableOpacity onPress={()=>setsuccessful(true)} className="h-14 w-14 bg-MainBG rounded-2xl border justify-center items-center ml-2">
                          <FontAwesome name="check" size={24} color="white" />
                        </TouchableOpacity>
                      </View>
                    </View>
                  )}
                </View>
              )}
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default AuthPage;
