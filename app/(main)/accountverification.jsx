import React, { useState } from "react";
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
  Image,
  Alert,
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import * as DocumentPicker from 'expo-document-picker';
import { useRouter } from "expo-router";

const RegistrationForm = () => {
  const router = useRouter();
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [formData, setFormData] = useState({
    nationalId: '',
    age: '',
    email: '',
  });
  const [focusedField, setFocusedField] = useState(null);
  const [errors, setErrors] = useState({});

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: ['image/png', 'image/jpeg', 'image/jpg'],
        copyToCacheDirectory: true,
      });
      
      if (result.canceled === false) {
        setProfilePhoto(result);
        console.log('Selected file:', result);
      }
    } catch (error) {
      console.error('Document picker error:', error);
      Alert.alert('Error', 'Failed to pick image');
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!profilePhoto) {
      newErrors.photo = 'Profile photo is required';
    }
    if (!formData.nationalId || formData.nationalId.length < 8) {
      newErrors.nationalId = 'Valid National ID is required';
    }
    if (!formData.age || parseInt(formData.age) < 18) {
      newErrors.age = 'You must be at least 18 years old';
    }
    if (!formData.email || !formData.email.includes('@')) {
      newErrors.email = 'Valid email is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      router.push("/averification");
    } else {
      Alert.alert('Validation Error', 'Please fill in all required fields correctly');
    }
  };

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
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Account Verification</Text>
          <Text style={styles.headerSubtitle}>Complete your profile</Text>
        </View>
        <View style={{ width: 44 }} />
      </View>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Progress Indicator */}
          <View style={styles.progressSection}>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: '75%' }]} />
            </View>
            <Text style={styles.progressText}>Step 3 of 4</Text>
          </View>

          <View style={styles.formContainer}>
            {/* Photo Upload Section */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Profile Photo*</Text>
              <Text style={styles.sectionDescription}>
                Upload a clear photo of yourself for verification
              </Text>
              
              <View style={styles.photoUploadContainer}>
                <TouchableOpacity 
                  style={styles.photoUploadButton}
                  onPress={pickDocument}
                >
                  {profilePhoto ? (
                    <Image
                      style={styles.uploadedPhoto}
                      source={{ uri: profilePhoto.assets[0].uri }}
                    />
                  ) : (
                    <LinearGradient
                      colors={['rgba(102, 126, 234, 0.1)', 'rgba(118, 75, 162, 0.1)']}
                      style={styles.photoPlaceholder}
                    >
                      <MaterialIcons name="add-a-photo" size={40} color="#667eea" />
                      <Text style={styles.photoPlaceholderText}>Tap to upload</Text>
                    </LinearGradient>
                  )}
                </TouchableOpacity>

                {profilePhoto && (
                  <TouchableOpacity 
                    style={styles.removePhotoButton}
                    onPress={() => setProfilePhoto(null)}
                  >
                    <MaterialIcons name="cancel" size={28} color="#ff6b6b" />
                  </TouchableOpacity>
                )}

                {profilePhoto && (
                  <View style={styles.photoInfo}>
                    <Ionicons name="checkmark-circle" size={20} color="#00d4aa" />
                    <Text style={styles.photoInfoText}>Photo uploaded successfully</Text>
                  </View>
                )}
              </View>
              {errors.photo && <Text style={styles.errorText}>{errors.photo}</Text>}
            </View>

            {/* National ID Input */}
            <View style={styles.section}>
              <Text style={styles.inputLabel}>National Identity Number*</Text>
              <View style={[
                styles.inputContainer,
                focusedField === 'nationalId' && styles.inputContainerFocused,
                errors.nationalId && styles.inputContainerError
              ]}>
                <View style={styles.inputIcon}>
                  <MaterialCommunityIcons name="card-account-details-outline" size={22} color="#667eea" />
                </View>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your national ID"
                  placeholderTextColor="#8e8e93"
                  value={formData.nationalId}
                  onChangeText={(text) => handleInputChange('nationalId', text)}
                  onFocus={() => setFocusedField('nationalId')}
                  onBlur={() => setFocusedField(null)}
                  keyboardType="numeric"
                  maxLength={20}
                />
                {formData.nationalId && !errors.nationalId && (
                  <Ionicons name="checkmark-circle" size={22} color="#00d4aa" />
                )}
              </View>
              {errors.nationalId && <Text style={styles.errorText}>{errors.nationalId}</Text>}
            </View>

            {/* Age Input */}
            <View style={styles.section}>
              <Text style={styles.inputLabel}>Age*</Text>
              <View style={[
                styles.inputContainer,
                focusedField === 'age' && styles.inputContainerFocused,
                errors.age && styles.inputContainerError
              ]}>
                <View style={styles.inputIcon}>
                  <MaterialCommunityIcons name="cake-variant-outline" size={22} color="#667eea" />
                </View>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your age"
                  placeholderTextColor="#8e8e93"
                  value={formData.age}
                  onChangeText={(text) => handleInputChange('age', text)}
                  onFocus={() => setFocusedField('age')}
                  onBlur={() => setFocusedField(null)}
                  keyboardType="numeric"
                  maxLength={3}
                />
                {formData.age && !errors.age && (
                  <Ionicons name="checkmark-circle" size={22} color="#00d4aa" />
                )}
              </View>
              {errors.age && <Text style={styles.errorText}>{errors.age}</Text>}
            </View>

            {/* Email Input */}
            <View style={styles.section}>
              <Text style={styles.inputLabel}>Email Address*</Text>
              <View style={[
                styles.inputContainer,
                focusedField === 'email' && styles.inputContainerFocused,
                errors.email && styles.inputContainerError
              ]}>
                <View style={styles.inputIcon}>
                  <MaterialCommunityIcons name="email-outline" size={22} color="#667eea" />
                </View>
                <TextInput
                  style={styles.input}
                  placeholder="example@email.com"
                  placeholderTextColor="#8e8e93"
                  value={formData.email}
                  onChangeText={(text) => handleInputChange('email', text.toLowerCase())}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
                {formData.email && !errors.email && (
                  <Ionicons name="checkmark-circle" size={22} color="#00d4aa" />
                )}
              </View>
              {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
            </View>

            {/* Info Box */}
            <View style={styles.infoBox}>
              <View style={styles.infoIconContainer}>
                <Ionicons name="information-circle-outline" size={24} color="#667eea" />
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.infoTitle}>Why do we need this?</Text>
                <Text style={styles.infoText}>
                  This information is required for account verification and compliance with financial regulations.
                </Text>
              </View>
            </View>

            {/* Security Features */}
            <View style={styles.securitySection}>
              <View style={styles.securityItem}>
                <Ionicons name="shield-checkmark" size={18} color="#00d4aa" />
                <Text style={styles.securityText}>256-bit encryption</Text>
              </View>
              <View style={styles.securityItem}>
                <Ionicons name="lock-closed" size={18} color="#00d4aa" />
                <Text style={styles.securityText}>Data protected</Text>
              </View>
              <View style={styles.securityItem}>
                <Ionicons name="eye-off" size={18} color="#00d4aa" />
                <Text style={styles.securityText}>Privacy guaranteed</Text>
              </View>
            </View>

            {/* Submit Button */}
            <TouchableOpacity 
              style={styles.submitButton}
              onPress={handleSubmit}
            >
              <LinearGradient
                colors={['#667eea', '#764ba2']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.submitButtonGradient}
              >
                <Text style={styles.submitButtonText}>Continue Verification</Text>
                <Ionicons name="arrow-forward" size={24} color="#fff" />
              </LinearGradient>
            </TouchableOpacity>

            {/* Terms Text */}
            <Text style={styles.termsText}>
              By continuing, you agree to our{' '}
              <Text style={styles.termsLink}>Terms of Service</Text>
              {' '}and{' '}
              <Text style={styles.termsLink}>Privacy Policy</Text>
            </Text>
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
  headerTitleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
  },
  headerSubtitle: {
    fontSize: 12,
    color: '#8e8e93',
    marginTop: 2,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 32,
  },
  progressSection: {
    paddingHorizontal: 24,
    marginTop: 8,
    marginBottom: 24,
  },
  progressBar: {
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#667eea',
    borderRadius: 3,
  },
  progressText: {
    fontSize: 12,
    color: '#8e8e93',
    textAlign: 'center',
  },
  formContainer: {
    paddingHorizontal: 24,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 8,
  },
  sectionDescription: {
    fontSize: 13,
    color: '#8e8e93',
    marginBottom: 16,
    lineHeight: 18,
  },
  photoUploadContainer: {
    alignItems: 'center',
  },
  photoUploadButton: {
    width: 140,
    height: 140,
    borderRadius: 70,
    overflow: 'hidden',
  },
  photoPlaceholder: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(102, 126, 234, 0.3)',
    borderStyle: 'dashed',
    borderRadius: 70,
  },
  photoPlaceholderText: {
    fontSize: 13,
    color: '#667eea',
    marginTop: 8,
    fontWeight: '600',
  },
  uploadedPhoto: {
    width: '100%',
    height: '100%',
    borderRadius: 70,
  },
  removePhotoButton: {
    position: 'absolute',
    top: 0,
    right: '32%',
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  photoInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'rgba(0, 212, 170, 0.1)',
    borderRadius: 12,
  },
  photoInfoText: {
    fontSize: 13,
    color: '#00d4aa',
    fontWeight: '600',
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 12,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  inputContainerFocused: {
    borderColor: '#667eea',
    backgroundColor: 'rgba(102, 126, 234, 0.05)',
  },
  inputContainerError: {
    borderColor: '#ff6b6b',
    backgroundColor: 'rgba(255, 107, 107, 0.05)',
  },
  inputIcon: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 15,
    color: '#fff',
    fontWeight: '500',
  },
  errorText: {
    fontSize: 12,
    color: '#ff6b6b',
    marginTop: 8,
    marginLeft: 4,
  },
  infoBox: {
    flexDirection: 'row',
    backgroundColor: 'rgba(102, 126, 234, 0.05)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: 'rgba(102, 126, 234, 0.2)',
  },
  infoIconContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  infoContent: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 4,
  },
  infoText: {
    fontSize: 12,
    color: '#8e8e93',
    lineHeight: 18,
  },
  securitySection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 32,
    paddingVertical: 16,
    backgroundColor: 'rgba(0, 212, 170, 0.05)',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(0, 212, 170, 0.1)',
  },
  securityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  securityText: {
    fontSize: 11,
    color: '#8e8e93',
    fontWeight: '600',
  },
  submitButton: {
    marginBottom: 16,
    shadowColor: '#667eea',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  submitButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    borderRadius: 16,
    gap: 12,
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
  },
  termsText: {
    fontSize: 12,
    color: '#8e8e93',
    textAlign: 'center',
    lineHeight: 18,
  },
  termsLink: {
    color: '#667eea',
    fontWeight: '600',
  },
});

export default RegistrationForm;