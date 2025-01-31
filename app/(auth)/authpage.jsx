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
  Image
} from "react-native";
import Input from "../../components/inputComponent";
import TabSwitcher from "../../components/Tabs";
import AntDesign from '@expo/vector-icons/AntDesign';
const AuthPage = () => {
  const translateY = useRef(new Animated.Value(0)).current;
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    const keyboardShow = Keyboard.addListener("keyboardDidShow", () => {
      Animated.timing(translateY, {
        toValue: 100,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });

    const keyboardHide = Keyboard.addListener("keyboardDidHide", () => {
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });

    return () => {
      keyboardShow.remove();
      keyboardHide.remove();
    };
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-MainBG">
      <View className="h-2/5 items-center justify-center" ><Image
        className="h-[100px] w-[213px]"
        source={require('../../assets/Group.png')}
      /></View>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          className="flex-1"
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View className="flex-1 justify-start">
            <View
              
              className="h-full w-full bg-[#CCCCCC] rounded-t-[20px] pt-8 items-center"
            >
              {/* Tab Bileşeni */}
              <TabSwitcher onTabChange={setSelectedTab} />

              {/* Form Alanı */}
              <View className="h-3/5 w-5/6 justify-start mt-10">
                {selectedTab === 0 ? (
                  <>
                    <Input placeholder="Phone Number" title="Phone Number" />
                    <Input placeholder="Password" title="Password" />
                    <View className="w-full items-center mt-3">
                      <TouchableOpacity className="h-14 w-36 bg-white rounded-3xl border justify-center items-center mt-4">
                        <Text className="text-lg font-bold">Login</Text>
                      </TouchableOpacity>
                    </View>
                  </>
                ) : (
                  <>
                    <Input placeholder="Full Name" title="Full Name" />
                    <Input placeholder="Phone Number" title="Phone Number" />
                    <View className="w-full items-end mt-3">
                      <TouchableOpacity className="h-14 w-14 bg-MainBG rounded-2xl border justify-center items-center mt-4">
                      <AntDesign name="arrowright" size={24} color="white" />
                      </TouchableOpacity>
                    </View>
                  </>
                )}
              </View>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default AuthPage;
