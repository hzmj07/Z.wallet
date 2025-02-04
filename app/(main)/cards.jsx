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
import Pagehead from "../../components/pagehead";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const transactions = [
    {id:1, title: "Hazem Aljasem", prince: 150, date: "18 oct 2025", color: "red" },
    {id:2, title: "Hazem Aljasem", prince: 150, date: "18 oct 2025", color: "green" },
    {id:3, title: "Hazem Aljasem", prince: 150, date: "18 oct 2025", color: "red" },
    {id:4, title: "Hazem Aljasem", prince: 150, date: "18 oct 2025", color: "green" }, 
    {id:5, title: "Hazem Aljasem", prince: 150, date: "18 oct 2025", color: "red" },
    {id:6, title: "Hazem Aljasem", prince: 150, date: "18 oct 2025", color: "green" },
  ];

const AuthPage = () => {
  const router = useRouter();

  const verifi = async () => {
    //  gerekli istek sonrası loading ve navigation
    console.log("navii");

    router.push("/regForm");
  };



  return (
    <SafeAreaView className="flex-1 bg-MainBG">
      <Pagehead title={"Cards"}/>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          className="flex-1"
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View className="flex-1 justify-end">
            {/* Form Alanı */}
            <View className=" w-full  rounded-t-[20px] p-8 items-center bg-[rgba(204,204,204,0.76)]">
              <Text className="w-full font-bold text-[18px] mb-2 pl-3 " >Virtual Card</Text>

              <View className="w-full h-60 bg-white rounded-2xl " ></View>

              <View className=" h-80 w-full mb-4 ">
        <View className="h-10 w-full  justify-start flex-row items-center">
          <Text className="font-bold text-[16px] color-black pr-2">
            Transactions
          </Text>
          <Ionicons name="arrow-forward-outline" size={20} color="black" />
        </View>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="">
          {transactions.map( item =>{
            return(
              <View key={item.id} className="h-20 w-full bg-white  rounded-lg mb-3 items-center  pl-4 pr-4 flex-row">
            <Image
              className="h-14 w-14  "
              source={require("../../assets/profile.png")}
            />
            <Text className="font-bold text-[20px] ml-6">{item.title}</Text>
            <View className="flex-1  h-full items-end justify-center pr-2 ">
              <Text className=" color-red-600 font-bold text-[20px]">{item.prince}</Text>
              <Text>{item.date}</Text>
            </View>
          </View>
            )
          })}
        </ScrollView>
      </View>
            <View className=" w-full  pl-6 pr-6 justify-end" >
            <TouchableOpacity className=" bg-white w-full h-12 rounded-lg border-[1px] it flex-row pl-4 pr-4 items-center" >
            <MaterialIcons name="subscriptions" size={24} color="black" />
            <Text className=" font-bold text-[16px] ml-6" >Subscriptions</Text>
            </TouchableOpacity>
            <TouchableOpacity className=" border-red-500 bg-white w-full h-12 rounded-lg border-[1px] it flex-row pl-4 pr-4 items-center mt-2" >
            <MaterialIcons name="delete" size={24} color="red" />
            <Text className=" font-bold text-[16px] ml-6 color-red-500 " >Delete Card</Text>
            </TouchableOpacity>
            </View>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default AuthPage;
