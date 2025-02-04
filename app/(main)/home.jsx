import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

const transactions = [
  {id:1, title: "Hazem Aljasem", prince: 150, date: "18 oct 2025", color: "red" },
  {id:2, title: "Hazem Aljasem", prince: 150, date: "18 oct 2025", color: "green" },
  {id:3, title: "Hazem Aljasem", prince: 150, date: "18 oct 2025", color: "red" },
  {id:4, title: "Hazem Aljasem", prince: 150, date: "18 oct 2025", color: "green" }, 
  {id:5, title: "Hazem Aljasem", prince: 150, date: "18 oct 2025", color: "red" },
  {id:6, title: "Hazem Aljasem", prince: 150, date: "18 oct 2025", color: "green" },
];
const home = () => {
  const router = useRouter();
  return (
    <View className="flex-1 bg-MainBG">
      <View className="w-full h-20  flex-row items-center justify-start pl-6 pr-6 mt-1">
        <TouchableOpacity className="h-12 w-12 bg-white rounded-md mr-2 items-center justify-center">
          <Feather name="more-vertical" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity className="h-12 w-12 bg-white rounded-md mr-2 items-center justify-center">
          <FontAwesome name="check" size={24} color="black" />
        </TouchableOpacity>
        <View className="h-full flex-1  flex-row  justify-end items-center">
          <View className=" h-full justify-center mr-2 ">
            <Text className="font-bold color-white">Hazem ALjasem</Text>
            <Text className="font-bold color-white">id:12345679</Text>
          </View>
          <Image
            className="h-14 w-14 ml-4 "
            source={require("../../assets/profile.png")}
          />
        </View>
      </View>

      <View className=" w-full h-72 p-4">
        <View className="flex-1 bg-white rounded-lg p-5">
          <View className="w-full h-9 border-b-[1px] flex-row">
            <Image
              className="h-[23px] w-[32px] ml-2  mr-4 rounded-md"
              source={require("../../assets/flag2.png")}
            />
            <Text className="font-bold">Syrian Lira Account</Text>
          </View>

          <View className="flex-1  justify-end">
            <View className="pl-8  flex-1 justify-center">
              <Text className="font-bold text-[25px]">SY 300</Text>
            </View>
            <View className="h-20   bottom-0 flex-row justify-center items-center">
              <TouchableOpacity className="h-10 bg-MainBG pl-6 pr-6 items-center mr-10 rounded-md flex-row">
                <Ionicons name="push-outline" size={20} color="#B7FF00" />
                <Text className="font-bold text-[16px] color-[#B7FF00] ml-2">
                  Deposit
                </Text>
              </TouchableOpacity>
              <TouchableOpacity className="h-10 bg-MainBG pl-6 pr-6 items-center  rounded-md flex-row">
                <Ionicons name="download-outline" size={20} color="#B7FF00" />
                <Text className="font-bold text-[16px] color-[#B7FF00]  ml-2">
                  Withdraw
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View className=" w-full flex-1 pl-4 pr-4 ">
        <View className="h-10 w-full  justify-start flex-row items-center">
          <Text className="font-bold text-[16px] color-white pr-2">
            Transactions
          </Text>
          <Ionicons name="arrow-forward-outline" size={20} color="white" />
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

      <View className=" w-full h-40">
        <View className="h-10 w-full  justify-start pl-6 flex-row items-center">
          <Text className="font-bold text-[16px] color-white pr-2">
          Contracted banks
          </Text>
          <Ionicons name="arrow-forward-outline" size={20} color="white" />
        </View>
        <ScrollView horizontal={true} contentContainerStyle={{ flexGrow: 1 }} className="">
          {transactions.map( item =>{
            return(
              <View key={item.id} className="h-28 w-28 bg-white mr-1 ml-1 rounded-lg mb-3 items-center  pl-4 pr-4 flex-row">
           
          </View>
            )
          })}
        </ScrollView>
      </View>

      <View className="w-full h-20  bottom-0  items-center justify-center mb-2">
        <View className=" h-16 rounded-lg bg-[rgba(255,255,255,0.76)] flex-row justify-center items-center pl-3 pr-3 ">
          <TouchableOpacity className="h-16 w-16 items-center justify-center mr-5">
            <Entypo name="home" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity className="h-16 w-16 items-center justify-center mr-5">
            <Feather name="send" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>router.push("/cards")} className="h-16 w-16 items-center justify-center">
            <Entypo name="credit-card" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default home;
