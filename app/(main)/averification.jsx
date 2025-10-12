import React, { useState, useRef, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  Animated,
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useRouter } from "expo-router";

const VerificationPage = () => {
  const router = useRouter();
  const [isSuccess, setIsSuccess] = useState(false);
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const inputRefs = useRef([]);
  const successScale = useRef(new Animated.Value(0)).current;
  const checkmarkScale = useRef(new Animated.Value(0)).current;

  const email = "hazem2553hh@gmail.com";
  const [resendTimer, setResendTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (resendTimer > 0 && !canResend) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    } else if (resendTimer === 0) {
      setCanResend(true);
    }
  }, [resendTimer, canResend]);

  useEffect(() => {
    if (isSuccess) {
      Animated.sequence([
        Animated.spring(successScale, {
          toValue: 1,
          tension: 50,
          friction: 7,
          useNativeDriver: true,
        }),
        Animated.spring(checkmarkScale, {
          toValue: 1,
          tension: 50,
          friction: 7,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [isSuccess]);

  const handleCodeChange = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    if (newCode.every(digit => digit !== '') && !isSuccess) {
      handleVerification();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerification = async () => {
    setIsLoading(true);
    // Simulating API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleResend = () => {
    if (canResend) {
      setResendTimer(60);
      setCanResend(false);
      // Resend code logic here
    }
  };

  if (isSuccess) {
    return (
      <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={['#1a1a2e', '#16213e', '#0f3460']}
          style={styles.gradient}
        />
        
        <View style={styles.successContainer}>
          <Animated.View 
            style={[
              styles.successCard,
              {
                transform: [{ scale: successScale }]
              }
            ]}
          >
            <View style={styles.successIconContainer}>
              <LinearGradient
                colors={['#00d4aa', '#00b894']}
                style={styles.successIconGradient}
              >
                <Animated.View style={{ transform: [{ scale: checkmarkScale }] }}>
                  <Ionicons name="checkmark" size={80} color="#fff" />
                </Animated.View>
              </LinearGradient>
            </View>

            <Text style={styles.successTitle}>Verification Successful!</Text>
            <Text style={styles.successSubtitle}>
              Your account has been verified successfully
            </Text>

            <View style={styles.successDetails}>
              <View style={styles.successDetailItem}>
                <Ionicons name="checkmark-circle" size={20} color="#00d4aa" />
                <Text style={styles.successDetailText}>Account Verified</Text>
              </View>
              <View style={styles.successDetailItem}>
                <Ionicons name="shield-checkmark" size={20} color="#00d4aa" />
                <Text style={styles.successDetailText}>Security Enhanced</Text>
              </View>
              <View style={styles.successDetailItem}>
                <Ionicons name="lock-closed" size={20} color="#00d4aa" />
                <Text style={styles.successDetailText}>Data Protected</Text>
              </View>
            </View>

            <TouchableOpacity 
              style={styles.homeButton}
              onPress={() => router.push("/home")}
            >
              <LinearGradient
                colors={['#667eea', '#764ba2']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.homeButtonGradient}
              >
                <Ionicons name="home-outline" size={24} color="#fff" />
                <Text style={styles.homeButtonText}>Go to Home</Text>
              </LinearGradient>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#1a1a2e', '#16213e', '#0f3460']}
        style={styles.gradient}
      />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Account Verification</Text>
        <View style={{ width: 44 }} />
      </View>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.content}>
            {/* Icon Section */}
            <View style={styles.iconSection}>
              <LinearGradient
                colors={['rgba(102, 126, 234, 0.2)', 'rgba(118, 75, 162, 0.2)']}
                style={styles.iconContainer}
              >
                <MaterialCommunityIcons name="shield-lock-outline" size={64} color="#667eea" />
              </LinearGradient>
            </View>

            {/* Title & Description */}
            <View style={styles.titleSection}>
              <Text style={styles.title}>Enter Verification Code</Text>
              <Text style={styles.description}>
                We've sent a 6-digit code to{'\n'}
                <Text style={styles.email}>{email}</Text>
              </Text>
            </View>

            {/* Code Input */}
            <View style={styles.codeContainer}>
              {code.map((digit, index) => (
                <View key={index} style={styles.codeInputWrapper}>
                  <TextInput
                    ref={ref => inputRefs.current[index] = ref}
                    style={[
                      styles.codeInput,
                      digit && styles.codeInputFilled
                    ]}
                    value={digit}
                    onChangeText={(text) => handleCodeChange(text, index)}
                    onKeyPress={(e) => handleKeyPress(e, index)}
                    keyboardType="number-pad"
                    maxLength={1}
                    selectTextOnFocus
                    editable={!isLoading}
                  />
                  {digit && (
                    <View style={styles.filledIndicator} />
                  )}
                </View>
              ))}
            </View>

            {/* Timer & Resend */}
            <View style={styles.resendSection}>
              {!canResend ? (
                <Text style={styles.timerText}>
                  Resend code in {resendTimer}s
                </Text>
              ) : (
                <TouchableOpacity onPress={handleResend}>
                  <Text style={styles.resendButton}>
                    Didn't receive code? Resend
                  </Text>
                </TouchableOpacity>
              )}
            </View>

            {/* Verify Button */}
            <TouchableOpacity 
              style={styles.verifyButton}
              onPress={handleVerification}
              disabled={code.some(digit => !digit) || isLoading}
            >
              <LinearGradient
                colors={
                  code.some(digit => !digit) 
                    ? ['#4a5568', '#2d3748'] 
                    : ['#667eea', '#764ba2']
                }
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.verifyButtonGradient}
              >
                {isLoading ? (
                  <View style={styles.loadingContainer}>
                    <MaterialCommunityIcons 
                      name="loading" 
                      size={24} 
                      color="#fff" 
                      style={styles.loadingIcon}
                    />
                    <Text style={styles.verifyButtonText}>Verifying...</Text>
                  </View>
                ) : (
                  <>
                    <Text style={styles.verifyButtonText}>Verify Account</Text>
                    <Ionicons name="arrow-forward" size={24} color="#fff" />
                  </>
                )}
              </LinearGradient>
            </TouchableOpacity>

            {/* Security Info */}
            <View style={styles.securityInfo}>
              <View style={styles.securityItem}>
                <Ionicons name="lock-closed" size={16} color="#667eea" />
                <Text style={styles.securityText}>End-to-end encrypted</Text>
              </View>
              <View style={styles.securityItem}>
                <Ionicons name="shield-checkmark" size={16} color="#667eea" />
                <Text style={styles.securityText}>Secure verification</Text>
              </View>
            </View>

            {/* Help Section */}
            <TouchableOpacity style={styles.helpButton}>
              <MaterialCommunityIcons name="help-circle-outline" size={20} color="#8e8e93" />
              <Text style={styles.helpText}>Need help?</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 16,
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 32,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  iconSection: {
    alignItems: 'center',
    marginBottom: 32,
  },
  iconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(102, 126, 234, 0.3)',
  },
  titleSection: {
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 12,
  },
  description: {
    fontSize: 15,
    color: '#8e8e93',
    textAlign: 'center',
    lineHeight: 22,
  },
  email: {
    color: '#667eea',
    fontWeight: '600',
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
    paddingHorizontal: 8,
  },
  codeInputWrapper: {
    position: 'relative',
  },
  codeInput: {
    width: 48,
    height: 56,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
  },
  codeInputFilled: {
    borderColor: '#667eea',
    backgroundColor: 'rgba(102, 126, 234, 0.1)',
  },
  filledIndicator: {
    position: 'absolute',
    bottom: 8,
    left: '50%',
    marginLeft: -3,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#667eea',
  },
  resendSection: {
    alignItems: 'center',
    marginBottom: 32,
  },
  timerText: {
    fontSize: 14,
    color: '#8e8e93',
  },
  resendButton: {
    fontSize: 14,
    fontWeight: '600',
    color: '#667eea',
  },
  verifyButton: {
    marginBottom: 32,
    shadowColor: '#667eea',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  verifyButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    borderRadius: 16,
    gap: 12,
  },
  verifyButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
  },
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  loadingIcon: {
    transform: [{ rotate: '0deg' }],
  },
  securityInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 24,
    marginBottom: 24,
  },
  securityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  securityText: {
    fontSize: 12,
    color: '#8e8e93',
  },
  helpButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 12,
  },
  helpText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#8e8e93',
  },
  // Success Screen Styles
  successContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  successCard: {
    width: '100%',
    backgroundColor: 'rgba(30, 30, 46, 0.95)',
    borderRadius: 32,
    padding: 32,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  successIconContainer: {
    marginBottom: 24,
  },
  successIconGradient: {
    width: 140,
    height: 140,
    borderRadius: 70,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#00d4aa',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 8,
  },
  successTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 8,
    textAlign: 'center',
  },
  successSubtitle: {
    fontSize: 15,
    color: '#8e8e93',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 22,
  },
  successDetails: {
    width: '100%',
    marginBottom: 32,
    gap: 16,
  },
  successDetailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 212, 170, 0.05)',
    padding: 16,
    borderRadius: 12,
    gap: 12,
    borderWidth: 1,
    borderColor: 'rgba(0, 212, 170, 0.1)',
  },
  successDetailText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
  },
  homeButton: {
    width: '100%',
    shadowColor: '#667eea',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  homeButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    borderRadius: 16,
    gap: 12,
  },
  homeButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
  },
});

export default VerificationPage;