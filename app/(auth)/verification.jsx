import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

const OTPVerification = () => {
  const router = useRouter();
  const phoneNumber = "0551 685 4949"; // This should come from previous screen
  
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  
  const inputRefs = useRef([]);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  const handleChangeText = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Auto focus next input
    if (text && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = async () => {
    const code = otp.join('');
    if (code.length !== 6) {
      alert("Please enter complete verification code");
      return;
    }
    
    console.log("Verification code:", code);
    // Add your verification logic here
    router.push("/regForm");
  };

  const handleResend = () => {
    if (canResend) {
      console.log("Resending OTP...");
      setTimer(60);
      setCanResend(false);
      setOtp(['', '', '', '', '', '']);
      inputRefs.current[0]?.focus();
    }
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
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <View style={styles.headerCenter}>
            <Text style={styles.headerTitle}>Verification</Text>
            <Text style={styles.headerSubtitle}>Enter the code we sent</Text>
          </View>
          <View style={styles.headerRight} />
        </View>

        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Icon Section */}
          <View style={styles.iconSection}>
            <LinearGradient
              colors={['#6a11cb', '#2575fc']}
              style={styles.iconContainer}
            >
              <Ionicons name="mail-outline" size={48} color="#fff" />
            </LinearGradient>
            <View style={styles.iconBadge}>
              <Ionicons name="checkmark" size={20} color="#fff" />
            </View>
          </View>

          {/* Message Section */}
          <View style={styles.messageSection}>
            <Text style={styles.messageTitle}>Check your messages</Text>
            <Text style={styles.messageText}>
              We've sent a verification code to
            </Text>
            <Text style={styles.phoneNumber}>{phoneNumber}</Text>
          </View>

          {/* OTP Input Section */}
          <View style={styles.otpSection}>
            <Text style={styles.otpLabel}>Enter Code</Text>
            <View style={styles.otpContainer}>
              {otp.map((digit, index) => (
                <View key={index} style={styles.otpInputWrapper}>
                  <TextInput
                    ref={ref => inputRefs.current[index] = ref}
                    style={[
                      styles.otpInput,
                      digit && styles.otpInputFilled
                    ]}
                    value={digit}
                    onChangeText={(text) => handleChangeText(text, index)}
                    onKeyPress={(e) => handleKeyPress(e, index)}
                    keyboardType="number-pad"
                    maxLength={1}
                    selectTextOnFocus
                  />
                  {digit && (
                    <View style={styles.otpDot} />
                  )}
                </View>
              ))}
            </View>
          </View>

          {/* Timer & Resend Section */}
          <View style={styles.timerSection}>
            {!canResend ? (
              <View style={styles.timerContainer}>
                <Ionicons name="time-outline" size={18} color="#8e8e93" />
                <Text style={styles.timerText}>
                  Resend code in{' '}
                  <Text style={styles.timerCount}>
                    {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}
                  </Text>
                </Text>
              </View>
            ) : (
              <TouchableOpacity 
                style={styles.resendButton}
                onPress={handleResend}
              >
                <Text style={styles.resendText}>Resend Code</Text>
                <Ionicons name="refresh" size={18} color="#6a11cb" />
              </TouchableOpacity>
            )}
          </View>

          {/* Action Buttons */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={styles.secondaryButton}
              onPress={() => router.back()}
            >
              <Ionicons name="arrow-back" size={24} color="#6a11cb" />
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.primaryButtonWrapper}
              onPress={handleVerify}
            >
              <LinearGradient
                colors={['#6a11cb', '#2575fc']}
                style={styles.primaryButton}
              >
                <Text style={styles.primaryButtonText}>Verify</Text>
                <Ionicons name="checkmark-circle" size={20} color="#fff" />
              </LinearGradient>
            </TouchableOpacity>
          </View>

          {/* Help Section */}
          <View style={styles.helpSection}>
            <Ionicons name="information-circle-outline" size={20} color="#8e8e93" />
            <Text style={styles.helpText}>
              Didn't receive the code? Check your spam folder or{' '}
              <Text style={styles.helpLink}>contact support</Text>
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
  },
  headerSubtitle: {
    fontSize: 13,
    color: '#8e8e93',
    marginTop: 2,
  },
  headerRight: {
    width: 44,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  iconSection: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 32,
    position: 'relative',
  },
  iconContainer: {
    width: 96,
    height: 96,
    borderRadius: 48,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#6a11cb',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
  },
  iconBadge: {
    position: 'absolute',
    bottom: 0,
    right: '35%',
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#00d4aa',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#0f0f1e',
  },
  messageSection: {
    alignItems: 'center',
    marginBottom: 40,
  },
  messageTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 12,
  },
  messageText: {
    fontSize: 15,
    color: '#8e8e93',
    textAlign: 'center',
    marginBottom: 4,
  },
  phoneNumber: {
    fontSize: 16,
    fontWeight: '700',
    color: '#6a11cb',
  },
  otpSection: {
    marginBottom: 32,
  },
  otpLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 16,
    textAlign: 'center',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  otpInputWrapper: {
    position: 'relative',
  },
  otpInput: {
    width: 48,
    height: 56,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
  },
  otpInputFilled: {
    borderColor: '#6a11cb',
    backgroundColor: 'rgba(106, 17, 203, 0.1)',
  },
  otpDot: {
    position: 'absolute',
    bottom: 16,
    left: '50%',
    marginLeft: -4,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#6a11cb',
  },
  timerSection: {
    alignItems: 'center',
    marginBottom: 32,
  },
  timerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    gap: 8,
  },
  timerText: {
    fontSize: 14,
    color: '#8e8e93',
  },
  timerCount: {
    fontWeight: '700',
    color: '#6a11cb',
  },
  resendButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  resendText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#6a11cb',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 24,
  },
  secondaryButton: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  primaryButtonWrapper: {
    flex: 1,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#6a11cb',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  primaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    gap: 8,
  },
  primaryButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
  },
  helpSection: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 12,
    padding: 16,
    gap: 12,
  },
  helpText: {
    flex: 1,
    fontSize: 13,
    color: '#8e8e93',
    lineHeight: 18,
  },
  helpLink: {
    color: '#6a11cb',
    fontWeight: '600',
  },
});

export default OTPVerification;