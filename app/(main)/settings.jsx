import React, { useState } from "react";
import {
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Switch,
  Alert,
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const SettingsScreen = () => {
  const router = useRouter();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [biometricEnabled, setBiometricEnabled] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const handleDeleteAccount = () => {
    setDeleteModalVisible(true);
  };

  const confirmDelete = () => {
    setDeleteModalVisible(false);
    Alert.alert(
      "Account Deletion",
      "Your account deletion request has been submitted. You will receive a confirmation email.",
      [{ text: "OK" }]
    );
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
        <Text style={styles.headerTitle}>Settings</Text>
        <View style={{ width: 44 }} />
      </View>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Account Settings */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Account Settings</Text>

            <TouchableOpacity 
              style={styles.settingCard}
              onPress={() => router.push("/change-password")}
            >
              <View style={styles.settingIcon}>
                <MaterialCommunityIcons name="lock-outline" size={24} color="#667eea" />
              </View>
              <View style={styles.settingContent}>
                <Text style={styles.settingTitle}>Change Password</Text>
                <Text style={styles.settingDescription}>Update your password regularly</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#8e8e93" />
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.settingCard}
              onPress={() => router.push("/change-email")}
            >
              <View style={styles.settingIcon}>
                <MaterialCommunityIcons name="email-outline" size={24} color="#667eea" />
              </View>
              <View style={styles.settingContent}>
                <Text style={styles.settingTitle}>Change Email</Text>
                <Text style={styles.settingDescription}>Update your email address</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#8e8e93" />
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.settingCard}
              onPress={() => router.push("/change-phone")}
            >
              <View style={styles.settingIcon}>
                <MaterialCommunityIcons name="phone-outline" size={24} color="#667eea" />
              </View>
              <View style={styles.settingContent}>
                <Text style={styles.settingTitle}>Change Phone Number</Text>
                <Text style={styles.settingDescription}>Update your phone number</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#8e8e93" />
            </TouchableOpacity>
          </View>

          {/* Security Settings */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Security & Privacy</Text>

            <View style={styles.settingCard}>
              <View style={styles.settingIcon}>
                <MaterialCommunityIcons name="fingerprint" size={24} color="#667eea" />
              </View>
              <View style={styles.settingContent}>
                <Text style={styles.settingTitle}>Biometric Login</Text>
                <Text style={styles.settingDescription}>Use fingerprint or Face ID</Text>
              </View>
              <Switch
                value={biometricEnabled}
                onValueChange={setBiometricEnabled}
                trackColor={{ false: '#3e3e3e', true: '#667eea' }}
                thumbColor={biometricEnabled ? '#fff' : '#f4f3f4'}
              />
            </View>

            <TouchableOpacity style={styles.settingCard}>
              <View style={styles.settingIcon}>
                <MaterialCommunityIcons name="shield-lock-outline" size={24} color="#667eea" />
              </View>
              <View style={styles.settingContent}>
                <Text style={styles.settingTitle}>Two-Factor Authentication</Text>
                <Text style={styles.settingDescription}>Add extra security layer</Text>
              </View>
              <View style={styles.statusBadge}>
                <View style={styles.statusDot} />
                <Text style={styles.statusText}>Active</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#8e8e93" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.settingCard}>
              <View style={styles.settingIcon}>
                <MaterialCommunityIcons name="history" size={24} color="#667eea" />
              </View>
              <View style={styles.settingContent}>
                <Text style={styles.settingTitle}>Login History</Text>
                <Text style={styles.settingDescription}>View recent login activity</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#8e8e93" />
            </TouchableOpacity>
          </View>

          {/* App Settings */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>App Settings</Text>

            <View style={styles.settingCard}>
              <View style={styles.settingIcon}>
                <MaterialCommunityIcons name="bell-outline" size={24} color="#667eea" />
              </View>
              <View style={styles.settingContent}>
                <Text style={styles.settingTitle}>Notifications</Text>
                <Text style={styles.settingDescription}>Push notifications & alerts</Text>
              </View>
              <Switch
                value={notificationsEnabled}
                onValueChange={setNotificationsEnabled}
                trackColor={{ false: '#3e3e3e', true: '#667eea' }}
                thumbColor={notificationsEnabled ? '#fff' : '#f4f3f4'}
              />
            </View>

            <View style={styles.settingCard}>
              <View style={styles.settingIcon}>
                <MaterialCommunityIcons name="theme-light-dark" size={24} color="#667eea" />
              </View>
              <View style={styles.settingContent}>
                <Text style={styles.settingTitle}>Dark Mode</Text>
                <Text style={styles.settingDescription}>Change app appearance</Text>
              </View>
              <Switch
                value={darkMode}
                onValueChange={setDarkMode}
                trackColor={{ false: '#3e3e3e', true: '#667eea' }}
                thumbColor={darkMode ? '#fff' : '#f4f3f4'}
              />
            </View>

            <TouchableOpacity style={styles.settingCard}>
              <View style={styles.settingIcon}>
                <MaterialCommunityIcons name="translate" size={24} color="#667eea" />
              </View>
              <View style={styles.settingContent}>
                <Text style={styles.settingTitle}>Language</Text>
                <Text style={styles.settingDescription}>English (US)</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#8e8e93" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.settingCard}>
              <View style={styles.settingIcon}>
                <MaterialCommunityIcons name="currency-usd" size={24} color="#667eea" />
              </View>
              <View style={styles.settingContent}>
                <Text style={styles.settingTitle}>Currency</Text>
                <Text style={styles.settingDescription}>Syrian Lira (SY)</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#8e8e93" />
            </TouchableOpacity>
          </View>

          {/* Support & About */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Support & About</Text>

            <TouchableOpacity style={styles.settingCard}>
              <View style={styles.settingIcon}>
                <MaterialCommunityIcons name="help-circle-outline" size={24} color="#667eea" />
              </View>
              <View style={styles.settingContent}>
                <Text style={styles.settingTitle}>Help Center</Text>
                <Text style={styles.settingDescription}>Get help and support</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#8e8e93" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.settingCard}>
              <View style={styles.settingIcon}>
                <MaterialCommunityIcons name="file-document-outline" size={24} color="#667eea" />
              </View>
              <View style={styles.settingContent}>
                <Text style={styles.settingTitle}>Terms & Conditions</Text>
                <Text style={styles.settingDescription}>Read our terms of service</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#8e8e93" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.settingCard}>
              <View style={styles.settingIcon}>
                <MaterialCommunityIcons name="shield-check-outline" size={24} color="#667eea" />
              </View>
              <View style={styles.settingContent}>
                <Text style={styles.settingTitle}>Privacy Policy</Text>
                <Text style={styles.settingDescription}>How we protect your data</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#8e8e93" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.settingCard}>
              <View style={styles.settingIcon}>
                <MaterialCommunityIcons name="information-outline" size={24} color="#667eea" />
              </View>
              <View style={styles.settingContent}>
                <Text style={styles.settingTitle}>About Z.Wallet</Text>
                <Text style={styles.settingDescription}>Version 1.0.0</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#8e8e93" />
            </TouchableOpacity>
          </View>

          {/* Danger Zone */}
          <View style={styles.section}>
            <Text style={styles.dangerTitle}>Danger Zone</Text>

            <TouchableOpacity 
              style={styles.dangerCard}
              onPress={handleDeleteAccount}
            >
              <View style={styles.dangerIcon}>
                <MaterialIcons name="delete-outline" size={24} color="#ff6b6b" />
              </View>
              <View style={styles.settingContent}>
                <Text style={styles.dangerText}>Delete Account</Text>
                <Text style={styles.settingDescription}>Permanently delete your account</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#ff6b6b" />
            </TouchableOpacity>
          </View>

          {/* Info Box */}
          <View style={styles.infoBox}>
            <View style={styles.infoIcon}>
              <Ionicons name="shield-checkmark" size={24} color="#00d4aa" />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.infoTitle}>Your Data is Secure</Text>
              <Text style={styles.infoText}>
                We use industry-standard encryption to protect your information
              </Text>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>

      {/* Delete Confirmation Modal */}
      {deleteModalVisible && (
        <TouchableOpacity 
          activeOpacity={1}
          style={styles.modalOverlay}
          onPress={() => setDeleteModalVisible(false)}
        >
          <BlurView intensity={20} tint="dark" style={styles.modalBlur}>
            <View style={styles.deleteModal}>
              <View style={styles.deleteModalIcon}>
                <MaterialIcons name="warning-amber" size={56} color="#ff6b6b" />
              </View>
              
              <Text style={styles.deleteModalTitle}>Delete Account?</Text>
              <Text style={styles.deleteModalText}>
                This action is permanent and cannot be undone. All your data, transactions, and cards will be permanently deleted.
              </Text>

              <View style={styles.warningBox}>
                <Ionicons name="alert-circle" size={20} color="#ff6b6b" />
                <Text style={styles.warningText}>
                  You will lose access to all your funds and history
                </Text>
              </View>

              <View style={styles.deleteModalActions}>
                <TouchableOpacity 
                  style={styles.cancelButton}
                  onPress={() => setDeleteModalVisible(false)}
                >
                  <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                  style={styles.confirmDeleteButton}
                  onPress={confirmDelete}
                >
                  <Text style={styles.confirmDeleteText}>Delete Account</Text>
                </TouchableOpacity>
              </View>
            </View>
          </BlurView>
        </TouchableOpacity>
      )}
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
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 32,
  },
  section: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 16,
  },
  dangerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#ff6b6b',
    marginBottom: 16,
  },
  settingCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  settingIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(102, 126, 234, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  settingContent: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 4,
  },
  settingDescription: {
    fontSize: 12,
    color: '#8e8e93',
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(0, 212, 170, 0.1)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginRight: 8,
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#00d4aa',
  },
  statusText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#00d4aa',
  },
  dangerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 107, 107, 0.05)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 107, 107, 0.2)',
  },
  dangerIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255, 107, 107, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  dangerText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#ff6b6b',
    marginBottom: 4,
  },
  infoBox: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 212, 170, 0.05)',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 24,
    borderWidth: 1,
    borderColor: 'rgba(0, 212, 170, 0.1)',
  },
  infoIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 212, 170, 0.1)',
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
  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  modalBlur: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteModal: {
    backgroundColor: 'rgba(30, 30, 46, 0.95)',
    borderRadius: 24,
    padding: 24,
    width: '90%',
    maxWidth: 400,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  deleteModalIcon: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: 'rgba(255, 107, 107, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 20,
  },
  deleteModalTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 12,
  },
  deleteModalText: {
    fontSize: 14,
    color: '#8e8e93',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 20,
  },
  warningBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: 'rgba(255, 107, 107, 0.1)',
    padding: 12,
    borderRadius: 12,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: 'rgba(255, 107, 107, 0.2)',
  },
  warningText: {
    flex: 1,
    fontSize: 12,
    fontWeight: '600',
    color: '#ff6b6b',
    lineHeight: 18,
  },
  deleteModalActions: {
    flexDirection: 'row',
    gap: 12,
  },
  cancelButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
  },
  cancelButtonText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#fff',
  },
  confirmDeleteButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: '#ff6b6b',
    alignItems: 'center',
  },
  confirmDeleteText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#fff',
  },
});

export default SettingsScreen;