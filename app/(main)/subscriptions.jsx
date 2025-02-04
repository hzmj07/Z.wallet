import React, { useEffect, useRef, useState } from "react";
import {
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  SafeAreaView,
  ScrollView,
} from "react-native";

import { useRouter } from "expo-router";
import Pagehead from "../../components/pagehead";
import Nodata from "../../components/nodata";
const transactions = [
  {
    id: 1,
    title: "Youtube",
    prince: 150,
    date: "18 oct 2025",
    color: "red",
  },
  {
    id: 2,
    title: "Spotify Premium",
    prince: 150,
    date: "18 oct 2025",
    color: "red",
  },
  {
    id: 3,
    title: "İzmir Elektrik",
    prince: 150,
    date: "18 oct 2025",
    color: "red",
  },
  {
    id: 4,
    title: "İzmir Doğal Gaz",
    prince: 150,
    date: "18 oct 2025",
    color: "red",
  },
  {
    id: 5,
    title: "Car Installment",
    prince: 150,
    date: "18 oct 2025",
    color: "red",
  },
  {
    id: 6,
    title: "Car Installment",
    prince: 150,
    date: "18 oct 2025",
    color: "red",
  },
  {
    id: 7,
    title: "Car Installment",
    prince: 150,
    date: "18 oct 2025",
    color: "red",
  },
  {
    id: 8,
    title: "Car Installment",
    prince: 150,
    date: "18 oct 2025",
    color: "red",
  },
  {
    id: 9,
    title: "Car Installment",
    prince: 150,
    date: "18 oct 2025",
    color: "red",
  },
  {
    id: 10,
    title: "Car Installment",
    prince: 150,
    date: "18 oct 2025",
    color: "red",
  },
];

const AuthPage = () => {
  const router = useRouter();
  const [data, setdata] = useState(true);

  return (
    <SafeAreaView className="flex-1 bg-MainBG">
      <Pagehead title={"Cards > Subscriptions"} />

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
         className="flex-1"
        >
          <View className="flex-1 justify-end">
            {data ? (
              <View className="h-[600px] w-full  rounded-t-[20px] p-8 items-center bg-[rgba(204,204,204,0.76)] ">
                <Text className="w-full font-bold text-[18px] mb-2 pl-3 ">
                  Subscriptions
                </Text>

                <View className=" h-full w-full mb-4 ">
                  <ScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                    className=""
                  >
                    {transactions.map((item) => {
                      return (
                        <View
                          key={item.id}
                          className="h-20 w-full bg-white  rounded-lg mb-3 items-center  pl-4 pr-4 flex-row"
                        >
                          <Text className="font-bold text-[20px] ml-6">
                            {item.title}
                          </Text>
                          <View className="flex-1  h-full items-end justify-center pr-2 ">
                            <Text className=" color-red-600 font-bold text-[20px]">
                              {item.prince}
                            </Text>
                            <Text>{item.date}</Text>
                          </View>
                        </View>
                      );
                    })}
                  </ScrollView>
                </View>
              </View>
            ) : (
              <Nodata
                title={"Subscriptions"}
                explanation={"You do not have a subscription for this card, View all subscriptions"}
              />
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default AuthPage;
