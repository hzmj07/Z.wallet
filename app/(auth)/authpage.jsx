import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  TextInput,
  Modal,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
const countries = [
  { name: "Afghanistan", code: "+93", flag: "🇦🇫" },
  { name: "Albania", code: "+355", flag: "🇦🇱" },
  { name: "Algeria", code: "+213", flag: "🇩🇿" },
  { name: "Syria", code: "+963", flag: "🇸🇾" },
  { name: "Turkey", code: "+90", flag: "🇹🇷" },
  { name: "United Arab Emirates", code: "+971", flag: "🇦🇪" },
  { name: "United States", code: "+1", flag: "🇺🇸" },
  { name: "United Kingdom", code: "+44", flag: "🇬🇧" },
  // Add more countries as needed
];

const AuthPage = () => {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState(0);
  
  // Login states
  const [loginPhoneNum, setLoginPhoneNum] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  
  // Register states
  const [registerPhoneNum, setRegisterPhoneNum] = useState("");
  const [country, setCountry] = useState({ name: "Syria", code: "+963", flag: "🇸🇾" });
  const [isCountryModalVisible, setIsCountryModalVisible] = useState(false);

  const handleLogin = () => {
    // Add your login logic here
        router.push("/(main)/home");

  };

  const handleRegister = () => {
    console.log("Register:", country.code + registerPhoneNum);
    router.push("/verification");
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Gradient Background */}
      <LinearGradient
        colors={['#1a1a2e', '#16213e', '#0f3460']}
        style={styles.gradient}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardView}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Logo Section */}
          <View style={styles.logoSection}>
            <LinearGradient
              colors={['#6a11cb', '#2575fc']}
              style={styles.logoContainer}
            >
              <Ionicons name="wallet-outline" size={48} color="#fff" />
            </LinearGradient>
            <Text style={styles.logoText}>SyrianPay</Text>
            <Text style={styles.logoSubtext}>Secure Digital Banking</Text>
          </View>

          {/* Tab Switcher */}
          <View style={styles.tabContainer}>
            <TouchableOpacity
              style={[styles.tab, selectedTab === 0 && styles.tabActive]}
              onPress={() => setSelectedTab(0)}
            >
              <LinearGradient
                colors={selectedTab === 0 ? ['#6a11cb', '#2575fc'] : ['transparent', 'transparent']}
                style={styles.tabGradient}
              >
                <Text style={[styles.tabText, selectedTab === 0 && styles.tabTextActive]}>
                  Login
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.tab, selectedTab === 1 && styles.tabActive]}
              onPress={() => setSelectedTab(1)}
            >
              <LinearGradient
                colors={selectedTab === 1 ? ['#6a11cb', '#2575fc'] : ['transparent', 'transparent']}
                style={styles.tabGradient}
              >
                <Text style={[styles.tabText, selectedTab === 1 && styles.tabTextActive]}>
                  Register
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          {/* Form Section */}
          <View style={styles.formContainer}>
            {selectedTab === 0 ? (
              // Login Form
              <>
                <View style={styles.inputGroup}>
                  <Text style={styles.inputLabel}>Phone Number</Text>
                  <View style={styles.inputWrapper}>
                    <Ionicons name="call-outline" size={20} color="#8e8e93" style={styles.inputIcon} />
                    <TextInput
                      style={styles.input}
                      placeholder="Enter phone number"
                      placeholderTextColor="#8e8e93"
                      value={loginPhoneNum}
                      onChangeText={setLoginPhoneNum}
                      keyboardType="phone-pad"
                    />
                  </View>
                </View>

                <View style={styles.inputGroup}>
                  <Text style={styles.inputLabel}>Password</Text>
                  <View style={styles.inputWrapper}>
                    <Ionicons name="lock-closed-outline" size={20} color="#8e8e93" style={styles.inputIcon} />
                    <TextInput
                      style={styles.input}
                      placeholder="Enter password"
                      placeholderTextColor="#8e8e93"
                      value={loginPassword}
                      onChangeText={setLoginPassword}
                      secureTextEntry={!showPassword}
                    />
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                      <Ionicons 
                        name={showPassword ? "eye-outline" : "eye-off-outline"} 
                        size={20} 
                        color="#8e8e93" 
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                <TouchableOpacity style={styles.forgotPassword}>
                  <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleLogin}>
                  <LinearGradient
                    colors={['#6a11cb', '#2575fc']}
                    style={styles.button}
                  >
                    <Text style={styles.buttonText}>Login</Text>
                    <Ionicons name="arrow-forward" size={20} color="#fff" />
                  </LinearGradient>
                </TouchableOpacity>
              </>
            ) : (
              // Register Form
              <>
                <View style={styles.inputGroup}>
                  <Text style={styles.inputLabel}>Select Your Country</Text>
                  <TouchableOpacity
                    style={styles.countrySelector}
                    onPress={() => setIsCountryModalVisible(true)}
                  >
                    <Text style={styles.countryFlag}>{country.flag}</Text>
                    <Text style={styles.countryText}>{country.name}</Text>
                    <View style={styles.countrySelectorRight}>
                      <MaterialIcons name="expand-more" size={24} color="#8e8e93" />
                    </View>
                  </TouchableOpacity>
                </View>

                <View style={styles.inputGroup}>
                  <Text style={styles.inputLabel}>Phone Number</Text>
                  <View style={styles.phoneInputContainer}>
                    <TouchableOpacity
                      style={styles.countryCode}
                      onPress={() => setIsCountryModalVisible(true)}
                    >
                      <Text style={styles.countryCodeText}>{country.code}</Text>
                      <MaterialIcons name="expand-more" size={18} color="#8e8e93" />
                    </TouchableOpacity>
                    
                    <View style={[styles.inputWrapper, styles.phoneInput]}>
                      <Ionicons name="call-outline" size={20} color="#8e8e93" style={styles.inputIcon} />
                      <TextInput
                        style={styles.input}
                        placeholder="Enter phone number"
                        placeholderTextColor="#8e8e93"
                        value={registerPhoneNum}
                        onChangeText={setRegisterPhoneNum}
                        keyboardType="phone-pad"
                      />
                    </View>
                  </View>
                </View>

                <TouchableOpacity onPress={handleRegister}>
                  <LinearGradient
                    colors={['#6a11cb', '#2575fc']}
                    style={styles.button}
                  >
                    <Text style={styles.buttonText}>Continue</Text>
                    <Ionicons name="arrow-forward" size={20} color="#fff" />
                  </LinearGradient>
                </TouchableOpacity>

                <View style={styles.termsContainer}>
                  <Text style={styles.termsText}>
                    By continuing, you agree to our{' '}
                    <Text style={styles.termsLink}>Terms of Service</Text>
                    {' '}and{' '}
                    <Text style={styles.termsLink}>Privacy Policy</Text>
                  </Text>
                </View>
              </>
            )}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      {/* Country Selection Modal */}
      <Modal
        visible={isCountryModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setIsCountryModalVisible(false)}
      >
        <TouchableOpacity
          activeOpacity={1}
          style={styles.modalOverlay}
          onPress={() => setIsCountryModalVisible(false)}
        >
          <BlurView intensity={20} tint="dark" style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Select Country</Text>
                <TouchableOpacity onPress={() => setIsCountryModalVisible(false)}>
                  <Ionicons name="close-circle" size={28} color="#8e8e93" />
                </TouchableOpacity>
              </View>
              
              <FlatList
                data={countries}
                keyExtractor={(item) => `${item.name}-${item.code}`}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.countryItem}
                    onPress={() => {
                      setCountry(item);
                      setIsCountryModalVisible(false);
                    }}
                  >
                    <Text style={styles.countryItemFlag}>{item.flag}</Text>
                    <View style={styles.countryItemInfo}>
                      <Text style={styles.countryItemName}>{item.name}</Text>
                      <Text style={styles.countryItemCode}>{item.code}</Text>
                    </View>
                    {country.code === item.code && (
                      <Ionicons name="checkmark-circle" size={24} color="#6a11cb" />
                    )}
                  </TouchableOpacity>
                )}
              />
            </View>
          </BlurView>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f1e',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 40,
  },
  logoSection: {
    alignItems: 'center',
    paddingTop: 80,
    paddingBottom: 40,
  },
  logoContainer: {
    width: 96,
    height: 96,
    borderRadius: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#6a11cb',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
  },
  logoText: {
    fontSize: 32,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 8,
  },
  logoSubtext: {
    fontSize: 14,
    color: '#8e8e93',
    fontWeight: '500',
  },
  tabContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 32,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 16,
    padding: 4,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  tab: {
    flex: 1,
    borderRadius: 12,
    overflow: 'hidden',
  },
  tabGradient: {
    paddingVertical: 14,
    alignItems: 'center',
  },
  tabActive: {
    shadowColor: '#6a11cb',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  tabText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#8e8e93',
  },
  tabTextActive: {
    color: '#fff',
    fontWeight: '700',
  },
  formContainer: {
    paddingHorizontal: 20,
  },
  inputGroup: {
    marginBottom: 24,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 10,
    marginLeft: 4,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 16,
    paddingHorizontal: 16,
    height: 56,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 32,
    marginTop: -8,
  },
  forgotPasswordText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6a11cb',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    borderRadius: 16,
    shadowColor: '#6a11cb',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
    gap: 8,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
  },
  countrySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 16,
    paddingHorizontal: 16,
    height: 56,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  countryFlag: {
    fontSize: 28,
    marginRight: 12,
  },
  countryText: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
  },
  countrySelectorRight: {
    marginLeft: 'auto',
  },
  phoneInputContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  countryCode: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 16,
    paddingHorizontal: 16,
    height: 56,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    gap: 4,
  },
  countryCodeText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  phoneInput: {
    flex: 1,
  },
  termsContainer: {
    marginTop: 24,
    paddingHorizontal: 8,
  },
  termsText: {
    fontSize: 12,
    color: '#8e8e93',
    textAlign: 'center',
    lineHeight: 18,
  },
  termsLink: {
    color: '#6a11cb',
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: 'rgba(30, 30, 46, 0.95)',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    maxHeight: '70%',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
  },
  countryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.05)',
  },
  countryItemFlag: {
    fontSize: 28,
    marginRight: 16,
  },
  countryItemInfo: {
    flex: 1,
  },
  countryItemName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 2,
  },
  countryItemCode: {
    fontSize: 13,
    color: '#8e8e93',
  },
});

export default AuthPage;