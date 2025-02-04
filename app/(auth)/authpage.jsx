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
  FlatList,
} from "react-native";
import Input from "../../components/inputComponent";
import TabSwitcher from "../../components/Tabs";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
const AuthPage = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const router = useRouter();
  const [loginPhoneNum, setLoginPhoneNum] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [contry, setcontry] = useState({ name: "Syria", code: "+963", flag: "🇸🇾" });
  const [registerName, setRegisterName] = useState("");
  const [registerPhoneNum, setRegisterPhoneNum] = useState("");
  const [isOpenSelectCont, setisOpenSelectCont] = useState(false);
  const countries = [
    { name: "Afghanistan", code: "+93", flag: "🇦🇫" },
    { name: "Albania", code: "+355", flag: "🇦🇱" },
    { name: "Algeria", code: "+213", flag: "🇩🇿" },
    { name: "Andorra", code: "+376", flag: "🇦🇩" },
    { name: "Angola", code: "+244", flag: "🇦🇴" },
    { name: "Argentina", code: "+54", flag: "🇦🇷" },
    { name: "Armenia", code: "+374", flag: "🇦🇲" },
    { name: "Australia", code: "+61", flag: "🇦🇺" },
    { name: "Austria", code: "+43", flag: "🇦🇹" },
    { name: "Azerbaijan", code: "+994", flag: "🇦🇿" },
    { name: "Bahrain", code: "+973", flag: "🇧🇭" },
    { name: "Bangladesh", code: "+880", flag: "🇧🇩" },
    { name: "Belarus", code: "+375", flag: "🇧🇾" },
    { name: "Belgium", code: "+32", flag: "🇧🇪" },
    { name: "Brazil", code: "+55", flag: "🇧🇷" },
    { name: "Bulgaria", code: "+359", flag: "🇧🇬" },
    { name: "Canada", code: "+1", flag: "🇨🇦" },
    { name: "China", code: "+86", flag: "🇨🇳" },
    { name: "Colombia", code: "+57", flag: "🇨🇴" },
    { name: "Denmark", code: "+45", flag: "🇩🇰" },
    { name: "Egypt", code: "+20", flag: "🇪🇬" },
    { name: "Finland", code: "+358", flag: "🇫🇮" },
    { name: "France", code: "+33", flag: "🇫🇷" },
    { name: "Germany", code: "+49", flag: "🇩🇪" },
    { name: "Greece", code: "+30", flag: "🇬🇷" },
    { name: "Hungary", code: "+36", flag: "🇭🇺" },
    { name: "India", code: "+91", flag: "🇮🇳" },
    { name: "Indonesia", code: "+62", flag: "🇮🇩" },
    { name: "Iran", code: "+98", flag: "🇮🇷" },
    { name: "Iraq", code: "+964", flag: "🇮🇶" },
    { name: "Ireland", code: "+353", flag: "🇮🇪" },
    { name: "Italy", code: "+39", flag: "🇮🇹" },
    { name: "Japan", code: "+81", flag: "🇯🇵" },
    { name: "Kazakhstan", code: "+7", flag: "🇰🇿" },
    { name: "Kenya", code: "+254", flag: "🇰🇪" },
    { name: "Kuwait", code: "+965", flag: "🇰🇼" },
    { name: "Lebanon", code: "+961", flag: "🇱🇧" },
    { name: "Malaysia", code: "+60", flag: "🇲🇾" },
    { name: "Mexico", code: "+52", flag: "🇲🇽" },
    { name: "Morocco", code: "+212", flag: "🇲🇦" },
    { name: "Netherlands", code: "+31", flag: "🇳🇱" },
    { name: "New Zealand", code: "+64", flag: "🇳🇿" },
    { name: "Nigeria", code: "+234", flag: "🇳🇬" },
    { name: "Norway", code: "+47", flag: "🇳🇴" },
    { name: "Palestine", code: "+970", flag: "🇵🇸" },
    { name: "Pakistan", code: "+92", flag: "🇵🇰" },
    { name: "Philippines", code: "+63", flag: "🇵🇭" },
    { name: "Poland", code: "+48", flag: "🇵🇱" },
    { name: "Portugal", code: "+351", flag: "🇵🇹" },
    { name: "Qatar", code: "+974", flag: "🇶🇦" },
    { name: "Romania", code: "+40", flag: "🇷🇴" },
    { name: "Russia", code: "+7", flag: "🇷🇺" },
    { name: "Saudi Arabia", code: "+966", flag: "🇸🇦" },
    { name: "South Africa", code: "+27", flag: "🇿🇦" },
    { name: "South Korea", code: "+82", flag: "🇰🇷" },
    { name: "Spain", code: "+34", flag: "🇪🇸" },
    { name: "Sweden", code: "+46", flag: "🇸🇪" },
    { name: "Switzerland", code: "+41", flag: "🇨🇭" },
    { name: "Syria", code: "+963", flag: "🇸🇾" },
    { name: "Thailand", code: "+66", flag: "🇹🇭" },
    { name: "Tunisia", code: "+216", flag: "🇹🇳" },
    { name: "Turkey", code: "+90", flag: "🇹🇷" },
    { name: "Ukraine", code: "+380", flag: "🇺🇦" },
    { name: "United Arab Emirates", code: "+971", flag: "🇦🇪" },
    { name: "United Kingdom", code: "+44", flag: "🇬🇧" },
    { name: "United States", code: "+1", flag: "🇺🇸" },
    { name: "Uzbekistan", code: "+998", flag: "🇺🇿" },
    { name: "Vietnam", code: "+84", flag: "🇻🇳" },
    { name: "Yemen", code: "+967", flag: "🇾🇪" },
  ];

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
          <View className="flex-1 justify-start">
            <View className="h-full w-full  rounded-t-[20px] pt-8 items-center bg-[rgba(204,204,204,0.76)]">
              {/* Tab Bileşeni */}
              <TabSwitcher onTabChange={setSelectedTab} />
    
              {/* Form Alanı */}
              <View className="h-3/5 w-5/6 justify-start mt-10">
                {selectedTab === 0 ? (
                  <>
                    <Input
                      placeholder="Phone Number"
                      title="Phone Number"
                      setVAlue={setLoginPhoneNum}
                      value={loginPhoneNum}
                    />
                    <Input
                      placeholder="Password"
                      title="Password"
                      setVAlue={setLoginPassword}
                      value={loginPassword}
                    />
                    <Text
                      onPress={() => console.log("fotgor")}
                      className=" text-right w-full font-bold mt-2"
                    >
                      Forgot Password
                    </Text>
                    <View className="w-full items-center mt-3">
                      <TouchableOpacity className="h-14 w-36 bg-white rounded-3xl border justify-center items-center mt-4 opacity-100">
                        <Text className="text-lg font-bold">Login</Text>
                      </TouchableOpacity>
                    </View>
                  </>
                ) : (
                  <>
                    <View className="h-28mt-5 justify-center mt-4 ">
                      <Text className=" font-bold text-[18px] mb-2 ml-4">
                        Select Your Contry
                      </Text>
                      <TouchableOpacity
                        onPress={() => {
                          setisOpenSelectCont(true);
                        }}
                        className="w-full h-16 bg-white rounded-3xl  items-center  justify-start text-[15px] pl-4 pr-4 border-[1px] flex-row "
                      >
                        <Text>
                          {" "}
                          {contry.flag || null} {contry.name || "Contry"}
                        </Text>
                        <View className="flex-1"></View>
                        <MaterialIcons
                          name="expand-more"
                          size={24}
                          color="black"
                        />
                      </TouchableOpacity>
                      <Text className=" font-bold text-[18px] mt-4 ml-4" >Enter Your Phone Number</Text>
                      <View className="h-20 justify-start items-end flex-row">
                        <TouchableOpacity
                          onPress={() => {
                            setisOpenSelectCont(true);
                          }}
                          className="h-16 w-24 bg-white rounded-3xl  items-center  justify-center text-[15px] pl-4 pr-4 border-[1px] flex-row mr-1 "
                        >
                          <Text> {contry.code || null}</Text>
                        </TouchableOpacity>
                        <View className="flex-1" >
                        <Input
                          placeholder="Phone Number"
                          setVAlue={setLoginPhoneNum}
                          value={loginPhoneNum}
                        /></View>
                      </View>
                    </View>
                    <View className="w-full items-end mt-3">
                      <TouchableOpacity className="h-14 w-14 bg-MainBG rounded-2xl border justify-center items-center mt-4">
                        <AntDesign
                          onPress={() => router.push("/verification")}
                          name="arrowright"
                          size={24}
                          color="white"
                        />
                      </TouchableOpacity>
                    </View>
                  </>
                )}
              </View>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
      {isOpenSelectCont && (
        <TouchableWithoutFeedback
          onPress={() => {
            setisOpenSelectCont(false);
          }}
        >
          <View
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              position: "absolute",
              flex: 1,
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View className="h-4/6 bg-white w-4/5 rounded-2xl pt-1 pb-1">
              <FlatList
                data={countries}
                keyExtractor={(item) => `${item.name}-${item.code}`}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => {
                      setcontry(item);
                      setisOpenSelectCont(false);
                      setRegisterPhoneNum(item.code);
                    }}
                    className="flex-row items-center border-b border-gray-300 p-3"
                  >
                    <Text className="text-xl mr-3">{item.flag}</Text>
                    <Text className="text-lg text-gray-800">
                      {item.name} ({item.code})
                    </Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      )}
    </SafeAreaView>
  );
};

export default AuthPage;
