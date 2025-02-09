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
import * as DocumentPicker from 'expo-document-picker';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
const AuthPage = () => {
  const router = useRouter();
  const [File, setFile] = useState()
  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: ['image/png', 'image/jpeg'], // Tüm dosya türlerine izin verir
      });
      console.log(result);
      
      if (result.canceled === false) {
        setFile(result);
        console.log('Seçilen dosya:', result);
      } else {
        console.log('Dosya seçme iptal edildi.');
      }
    } catch (error) {
      console.error('Dosya seçme hatası:', error);
    }
  };


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
                    <View className=" flex-row items-center" >
                    <TouchableOpacity onPress={()=>pickDocument()} className="w-24 h-24 bg-white rounded-2xl  items-center justify-center text-[15px] border-[1px] ">
                    {File  ? <Image
                    className="w-20 h-20 rounded-full "
                    source={{ uri: File.assets[0].uri }}
                  />  : <MaterialIcons name="account-circle" size={40} color="black" /> }
                    </TouchableOpacity>
                   {File &&  <TouchableOpacity onPress={()=>setFile(null)} className="bg-white h-4/6 w-10 rounded-xl ml-3 border items-center justify-center " >
                    <MaterialIcons name="cancel" size={24} color="red" />
                    </TouchableOpacity>}
                    </View>
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
