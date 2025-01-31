import React, { useRef, useState } from "react";
import { Text, View, TouchableOpacity, Animated } from "react-native";

const ANIMATION_DURATION = 200;

const TabSwitcher = ({ onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const widthAnim1 = useRef(new Animated.Value(170)).current;
  const widthAnim2 = useRef(new Animated.Value(120)).current;
  const colorAnim1 = useRef(new Animated.Value(0)).current;
  const colorAnim2 = useRef(new Animated.Value(1)).current;

  const handleTabSwitch = (tab) => {
    setSelectedTab(tab);
    onTabChange(tab);
    Animated.parallel([
      Animated.timing(widthAnim1, {
        toValue: tab === 0 ? 170 : 120,
        duration: ANIMATION_DURATION,
        useNativeDriver: false,
      }),
      Animated.timing(widthAnim2, {
        toValue: tab === 1 ? 170 : 120,
        duration: ANIMATION_DURATION,
        useNativeDriver: false,
      }),
      Animated.timing(colorAnim1, {
        toValue: tab === 0 ? 0 : 1,
        duration: ANIMATION_DURATION,
        useNativeDriver: false,
      }),
      Animated.timing(colorAnim2, {
        toValue: tab === 1 ? 0 : 1,
        duration: ANIMATION_DURATION,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const bgColor1 = colorAnim1.interpolate({
    inputRange: [0, 1],
    outputRange: ["#00223C", "white"],
  });

  const bgColor2 = colorAnim2.interpolate({
    inputRange: [0, 1],
    outputRange: ["#00223C", "white"],
  });

  const textColor1 = colorAnim1.interpolate({
    inputRange: [0, 1],
    outputRange: ["white", "black"], // Seçiliyse beyaz, değilse siyah
  });

  const textColor2 = colorAnim2.interpolate({
    inputRange: [0, 1],
    outputRange: ["white", "black"],
  });

  const renderTab = (index, label, width, backgroundColor, textColor) => (
    <TouchableOpacity key={index} onPress={() => handleTabSwitch(index)}>
      <Animated.View
        style={{
          backgroundColor,
          height: 60,
          width,
          borderRadius: 999,
          marginHorizontal: 5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Animated.Text
          style={{
            color: textColor,
            fontWeight: "bold",
          }}
        >
          {label}
        </Animated.Text>
      </Animated.View>
    </TouchableOpacity>
  );

  return (
    <View className="w-[310px] bg-white h-20 rounded-full flex-row items-center justify-center">
      {renderTab(0, "Login", widthAnim1, bgColor1, textColor1)}
      {renderTab(1, "Register", widthAnim2, bgColor2, textColor2)}
    </View>
  );
};

export default TabSwitcher;
