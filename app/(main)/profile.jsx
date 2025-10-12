import React, { useState } from "react";
import {
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Share,
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import * as Clipboard from 'expo-clipboard';

const ProfileScreen = () => {
  const router = useRouter();
  const [copiedField, setCopiedField] = useState(null);

  const userInfo = {
    name: "Hazem Aljasem",
    phone: "+90 556 854 949",
    email: "hazem2553hh@gmail.com",
    accountType: "Verified Account",
    walletId: "123456789",
    balance: "300.90",
    avatar: require("../../assets/profile.png"),
  };

  const handleCopy = async (text, field) => {
    await Clipboard.setStringAsync(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Send me money via Z.Wallet\nWallet ID: ${userInfo.walletId}`,
      });
    } catch (error) {
      console.log(error);
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
        <Text style={styles.headerTitle}>Account Details</Text>
        <TouchableOpacity style={styles.editButton}>
          <Ionicons name="create-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Profile Card */}
          <View style={styles.profileCard}>
            <LinearGradient
              colors={['#667eea', '#764ba2']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.profileCardGradient}
            >
              <View style={styles.avatarContainer}>
                <Image
                  style={styles.avatar}
                  source={userInfo.avatar}
                />
                <View style={styles.verifiedBadge}>
                  <Ionicons name="checkmark-circle" size={24} color="#00d4aa" />
                </View>
              </View>
              
              <Text style={styles.profileName}>{userInfo.name}</Text>
              <Text style={styles.profilePhone}>{userInfo.phone}</Text>

              <View style={styles.profileStats}>
                <View style={styles.statItem}>
                  <Text style={styles.statValue}>{userInfo.balance}</Text>
                  <Text style={styles.statLabel}>Balance (SY)</Text>
                </View>
                <View style={styles.statDivider} />
                <View style={styles.statItem}>
                  <Text style={styles.statValue}>{userInfo.accountType === "Verified Account" ? "Verified" : "Basic"}</Text>
                  <Text style={styles.statLabel}>Account Type</Text>
                </View>
              </View>
            </LinearGradient>
          </View>

          {/* Account Information */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Account Information</Text>

            {/* Email */}
            <TouchableOpacity 
              style={styles.infoCard}
              onPress={() => handleCopy(userInfo.email, 'email')}
            >
              <View style={styles.infoIcon}>
                <MaterialCommunityIcons name="email-outline" size={24} color="#667eea" />
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.infoLabel}>Email Address</Text>
                <Text style={styles.infoValue}>{userInfo.email}</Text>
              </View>
              <View style={styles.copyButton}>
                {copiedField === 'email' ? (
                  <Ionicons name="checkmark-circle" size={22} color="#00d4aa" />
                ) : (
                  <Ionicons name="copy-outline" size={20} color="#8e8e93" />
                )}
              </View>
            </TouchableOpacity>

            {/* Wallet ID */}
            <TouchableOpacity 
              style={styles.infoCard}
              onPress={() => handleCopy(userInfo.walletId, 'walletId')}
            >
              <View style={styles.infoIcon}>
                <MaterialCommunityIcons name="wallet-outline" size={24} color="#667eea" />
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.infoLabel}>Wallet ID</Text>
                <Text style={styles.infoValue}>{userInfo.walletId}</Text>
                <Text style={styles.infoDescription}>
                  Share this ID to receive payments
                </Text>
              </View>
              <View style={styles.actionButtons}>
                {copiedField === 'walletId' ? (
                  <View style={styles.iconButton}>
                    <Ionicons name="checkmark-circle" size={22} color="#00d4aa" />
                  </View>
                ) : (
                  <>
                    <TouchableOpacity 
                      style={styles.iconButton}
                      onPress={() => handleCopy(userInfo.walletId, 'walletId')}
                    >
                      <Ionicons name="copy-outline" size={20} color="#8e8e93" />
                    </TouchableOpacity>
                    <TouchableOpacity 
                      style={styles.iconButton}
                      onPress={handleShare}
                    >
                      <Ionicons name="share-social-outline" size={20} color="#8e8e93" />
                    </TouchableOpacity>
                  </>
                )}
              </View>
            </TouchableOpacity>

            {/* Account Type */}
            <View style={styles.infoCard}>
              <View style={styles.infoIcon}>
                <MaterialCommunityIcons name="shield-check-outline" size={24} color="#667eea" />
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.infoLabel}>Account Type</Text>
                <View style={styles.verifiedContainer}>
                  <Text style={styles.infoValue}>{userInfo.accountType}</Text>
                  <View style={styles.verifiedChip}>
                    <Ionicons name="shield-checkmark" size={14} color="#00d4aa" />
                    <Text style={styles.verifiedChipText}>Verified</Text>
                  </View>
                </View>
                <Text style={styles.infoDescription}>
                  Full access to all Z.Wallet features
                </Text>
              </View>
            </View>

            {/* Balance */}
            <View style={styles.balanceCard}>
              <LinearGradient
                colors={['rgba(0, 212, 170, 0.1)', 'rgba(0, 212, 170, 0.05)']}
                style={styles.balanceCardGradient}
              >
                <View style={styles.balanceIcon}>
                  <MaterialCommunityIcons name="cash-multiple" size={28} color="#00d4aa" />
                </View>
                <View style={styles.balanceContent}>
                  <Text style={styles.balanceLabel}>Current Balance</Text>
                  <Text style={styles.balanceValue}>SY {userInfo.balance}</Text>
                  <Text style={styles.balanceDescription}>
                    Available in your wallet
                  </Text>
                </View>
                <TouchableOpacity style={styles.balanceAction}>
                  <Ionicons name="eye-outline" size={24} color="#00d4aa" />
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>

          {/* Linked Services */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Linked Services</Text>

            <TouchableOpacity 
              style={styles.serviceCard}
              onPress={() => router.push("/bank-accounts")}
            >
              <View style={styles.serviceIcon}>
                <MaterialCommunityIcons name="bank-outline" size={24} color="#667eea" />
              </View>
              <View style={styles.serviceContent}>
                <Text style={styles.serviceTitle}>Bank Accounts</Text>
                <Text style={styles.serviceDescription}>
                  Manage linked bank accounts
                </Text>
              </View>
              <View style={styles.serviceBadge}>
                <Text style={styles.serviceBadgeText}>2</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#8e8e93" />
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.serviceCard}
              onPress={() => router.push("/cards")}
            >
              <View style={styles.serviceIcon}>
                <MaterialCommunityIcons name="credit-card-outline" size={24} color="#667eea" />
              </View>
              <View style={styles.serviceContent}>
                <Text style={styles.serviceTitle}>Cards</Text>
                <Text style={styles.serviceDescription}>
                  Virtual and physical cards
                </Text>
              </View>
              <View style={styles.serviceBadge}>
                <Text style={styles.serviceBadgeText}>1</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#8e8e93" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.serviceCard}>
              <View style={styles.serviceIcon}>
                <MaterialCommunityIcons name="shield-account-outline" size={24} color="#667eea" />
              </View>
              <View style={styles.serviceContent}>
                <Text style={styles.serviceTitle}>Security</Text>
                <Text style={styles.serviceDescription}>
                  Two-factor authentication & more
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#8e8e93" />
            </TouchableOpacity>
          </View>

          {/* Quick Actions */}
          <View style={styles.quickActionsSection}>
            <Text style={styles.sectionTitle}>Quick Actions</Text>
            
            <View style={styles.quickActionsGrid}>
              <TouchableOpacity style={styles.quickActionItem}>
                <View style={[styles.quickActionIcon, { backgroundColor: 'rgba(102, 126, 234, 0.1)' }]}>
                  <MaterialCommunityIcons name="qrcode-scan" size={28} color="#667eea" />
                </View>
                <Text style={styles.quickActionText}>My QR</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.quickActionItem}>
                <View style={[styles.quickActionIcon, { backgroundColor: 'rgba(0, 212, 170, 0.1)' }]}>
                  <MaterialCommunityIcons name="history" size={28} color="#00d4aa" />
                </View>
                <Text style={styles.quickActionText}>History</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.quickActionItem}>
                <View style={[styles.quickActionIcon, { backgroundColor: 'rgba(255, 159, 64, 0.1)' }]}>
                  <MaterialCommunityIcons name="file-document-outline" size={28} color="#FF9F40" />
                </View>
                <Text style={styles.quickActionText}>Statements</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.quickActionItem}>
                <View style={[styles.quickActionIcon, { backgroundColor: 'rgba(240, 98, 146, 0.1)' }]}>
                  <MaterialCommunityIcons name="lifebuoy" size={28} color="#F06292" />
                </View>
                <Text style={styles.quickActionText}>Support</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Info Box */}
          <View style={styles.infoBox}>
            <View style={styles.infoBoxIcon}>
              <Ionicons name="information-circle" size={24} color="#667eea" />
            </View>
            <View style={styles.infoBoxContent}>
              <Text style={styles.infoBoxTitle}>Keep Your Account Secure</Text>
              <Text style={styles.infoBoxText}>
                Never share your password or verification codes with anyone
              </Text>
            </View>
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
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
  },
  editButton: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 32,
  },
  profileCard: {
    marginHorizontal: 24,
    marginTop: 8,
    marginBottom: 32,
    shadowColor: '#667eea',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  profileCardGradient: {
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  verifiedBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileName: {
    fontSize: 24,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 4,
  },
  profilePhone: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 24,
  },
  profileStats: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-around',
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.2)',
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  statDivider: {
    width: 1,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
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
  infoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  infoIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(102, 126, 234, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  infoContent: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 12,
    color: '#8e8e93',
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 2,
  },
  infoDescription: {
    fontSize: 11,
    color: '#8e8e93',
    lineHeight: 16,
  },
  copyButton: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  iconButton: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  verifiedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  verifiedChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(0, 212, 170, 0.1)',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
  },
  verifiedChipText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#00d4aa',
  },
  balanceCard: {
    marginTop: 8,
  },
  balanceCardGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(0, 212, 170, 0.2)',
  },
  balanceIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(0, 212, 170, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  balanceContent: {
    flex: 1,
  },
  balanceLabel: {
    fontSize: 12,
    color: '#8e8e93',
    marginBottom: 4,
  },
  balanceValue: {
    fontSize: 22,
    fontWeight: '800',
    color: '#00d4aa',
    marginBottom: 2,
  },
  balanceDescription: {
    fontSize: 11,
    color: '#8e8e93',
  },
  balanceAction: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  serviceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  serviceIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(102, 126, 234, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  serviceContent: {
    flex: 1,
  },
  serviceTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 4,
  },
  serviceDescription: {
    fontSize: 12,
    color: '#8e8e93',
  },
  serviceBadge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#667eea',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  serviceBadgeText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#fff',
  },
  quickActionsSection: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  quickActionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  quickActionItem: {
    width: '23%',
    alignItems: 'center',
  },
  quickActionIcon: {
    width: 64,
    height: 64,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  quickActionText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
  },
  infoBox: {
    flexDirection: 'row',
    backgroundColor: 'rgba(102, 126, 234, 0.05)',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 24,
    borderWidth: 1,
    borderColor: 'rgba(102, 126, 234, 0.2)',
  },
  infoBoxIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(102, 126, 234, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  infoBoxContent: {
    flex: 1,
  },
  infoBoxTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 4,
  },
  infoBoxText: {
    fontSize: 12,
    color: '#8e8e93',
    lineHeight: 18,
  },
});

export default ProfileScreen;