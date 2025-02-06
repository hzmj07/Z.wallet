import React, { useState } from "react";
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
import Pagehead from "../../components/pagehead";
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
        <Pagehead
        title={"Account Verification"}
        dicreption={"amount of money to be sent"}
      />

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View className="flex-1 justify-end">
            {/* Form Alanı */}
              <View className=" w-full  rounded-t-[20px] p-8 pb-16  items-center bg-[rgba(204,204,204,0.76)] ">
              <View className=" w-full justify-start mt-4">                  
                <View className="h-28 justify-end ">
                    <Text className=" font-bold text-[18px] mt-4  ml-4">Photo*</Text>
                    <View className="w-24 h-24 bg-white rounded-2xl  items-center text-[15px] pl-4 border-[1px] "
 ></View>
                  </View>
                  <Input placeholder="National Identity Number" title="National Identity Number*" type={"numeric"} />
                  <Input placeholder="Age" title="Enter age*" type={"numeric"} />
                  <Input placeholder="Email" title="Enter Email*" type={"email"} />

                  {/*buton alanı*/}
                  
                </View>
                <View className="w-full items-center mt-3">
                    <TouchableOpacity onPress={()=>router.push("/averification")} className="h-14 w-28 bg-white rounded-2xl border justify-center items-center mt-4">
                    <Text className=" font-bold text-[18px] ">Verify</Text>
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
