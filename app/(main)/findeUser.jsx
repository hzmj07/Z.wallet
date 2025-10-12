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
  TextInput,
  Image,
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";

const quickAccessUsers = [
  { id: 1, name: "Sarah M.", avatar: require("../../assets/profile.png"), color: ['#667eea', '#764ba2'] },
  { id: 2, name: "Ahmed K.", avatar: require("../../assets/profile.png"), color: ['#f093fb', '#f5576c'] },
  { id: 3, name: "Maya J.", avatar: require("../../assets/profile.png"), color: ['#4facfe', '#00f2fe'] },
  { id: 4, name: "Omar H.", avatar: require("../../assets/profile.png"), color: ['#43e97b', '#38f9d7'] },
  { id: 5, name: "Lisa C.", avatar: require("../../assets/profile.png"), color: ['#fa709a', '#fee140'] },
];

const recentTransactions = [
  { id: 1, name: "Hazem Aljasem", phone: "+963 xxx xxx", lastAmount: "150 SY", avatar: require("../../assets/profile.png") },
  { id: 2, name: "Sarah Martinez", phone: "+963 xxx xxx", lastAmount: "450 SY", avatar: require("../../assets/profile.png") },
  { id: 3, name: "Ahmed Hassan", phone: "+963 xxx xxx", lastAmount: "89 SY", avatar: require("../../assets/profile.png") },
];

const FindUserScreen = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [focusedField, setFocusedField] = useState(false);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push("/sendMoney");
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
          <Text style={styles.headerTitle}>Send Money</Text>
          <Text style={styles.headerSubtitle}>Find user to send money</Text>
        </View>
        <TouchableOpacity style={styles.scanButton}>
          <MaterialCommunityIcons name="qrcode-scan" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Search Section */}
          <View style={styles.searchSection}>
            <Text style={styles.sectionTitle}>Search User</Text>
            <View style={[
              styles.searchContainer,
              focusedField && styles.searchContainerFocused
            ]}>
              <View style={styles.searchIcon}>
                <Feather name="search" size={20} color="#667eea" />
              </View>
              <TextInput
                style={styles.searchInput}
                placeholder="Phone number or User ID"
                placeholderTextColor="#8e8e93"
                value={searchQuery}
                onChangeText={setSearchQuery}
                onFocus={() => setFocusedField(true)}
                onBlur={() => setFocusedField(false)}
                keyboardType="default"
                returnKeyType="search"
                onSubmitEditing={handleSearch}
              />
              {searchQuery.length > 0 && (
                <TouchableOpacity 
                  onPress={() => setSearchQuery('')}
                  style={styles.clearButton}
                >
                  <Ionicons name="close-circle" size={20} color="#8e8e93" />
                </TouchableOpacity>
              )}
            </View>
            <TouchableOpacity 
              style={styles.searchButton}
              onPress={handleSearch}
              disabled={!searchQuery.trim()}
            >
              <LinearGradient
                colors={
                  searchQuery.trim() 
                    ? ['#667eea', '#764ba2'] 
                    : ['#4a5568', '#2d3748']
                }
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.searchButtonGradient}
              >
                <Feather name="search" size={20} color="#fff" />
                <Text style={styles.searchButtonText}>Search</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          {/* Quick Access */}
          <View style={styles.quickAccessSection}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Quick Access</Text>
              <TouchableOpacity>
                <Text style={styles.seeAllText}>See All</Text>
              </TouchableOpacity>
            </View>
            
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.quickAccessContainer}
            >
              {quickAccessUsers.map((user) => (
                <TouchableOpacity 
                  key={user.id} 
                  style={styles.quickAccessItem}
                  onPress={() => router.push("/sendMoney")}
                >
                  <LinearGradient
                    colors={user.color}
                    style={styles.quickAccessAvatar}
                  >
                    <Image
                      style={styles.quickAccessImage}
                      source={user.avatar}
                    />
                  </LinearGradient>
                  <Text style={styles.quickAccessName}>{user.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* Recent Transactions */}
          <View style={styles.recentSection}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Recent</Text>
              <TouchableOpacity>
                <MaterialCommunityIcons name="history" size={22} color="#667eea" />
              </TouchableOpacity>
            </View>

            {recentTransactions.map((transaction) => (
              <TouchableOpacity 
                key={transaction.id} 
                style={styles.recentItem}
              >
                <View style={styles.recentAvatar}>
                  <Image
                    style={styles.recentAvatarImage}
                    source={transaction.avatar}
                  />
                </View>
                <View style={styles.recentInfo}>
                  <Text style={styles.recentName}>{transaction.name}</Text>
                  <Text style={styles.recentPhone}>{transaction.phone}</Text>
                </View>
                <View style={styles.recentRight}>
                  <Text style={styles.recentAmount}>{transaction.lastAmount}</Text>
                  <Ionicons name="chevron-forward" size={20} color="#8e8e93" />
                </View>
              </TouchableOpacity>
            ))}
          </View>

          {/* Payment Methods */}
          <View style={styles.methodsSection}>
            <Text style={styles.sectionTitle}>Other Methods</Text>
            
            <TouchableOpacity style={styles.methodItem}>
              <View style={styles.methodIcon}>
                <MaterialCommunityIcons name="qrcode-scan" size={24} color="#667eea" />
              </View>
              <View style={styles.methodInfo}>
                <Text style={styles.methodTitle}>Scan QR Code</Text>
                <Text style={styles.methodDescription}>Quick payment via QR</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#8e8e93" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.methodItem}>
              <View style={styles.methodIcon}>
                <MaterialCommunityIcons name="bank-transfer" size={24} color="#667eea" />
              </View>
              <View style={styles.methodInfo}>
                <Text style={styles.methodTitle}>Bank Transfer</Text>
                <Text style={styles.methodDescription}>Send to bank account</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#8e8e93" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.methodItem}>
              <View style={styles.methodIcon}>
                <MaterialCommunityIcons name="cellphone" size={24} color="#667eea" />
              </View>
              <View style={styles.methodInfo}>
                <Text style={styles.methodTitle}>Mobile Money</Text>
                <Text style={styles.methodDescription}>Send to mobile wallet</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#8e8e93" />
            </TouchableOpacity>
          </View>

          {/* Security Info */}
          <View style={styles.securityBox}>
            <View style={styles.securityIcon}>
              <Ionicons name="shield-checkmark" size={20} color="#00d4aa" />
            </View>
            <View style={styles.securityContent}>
              <Text style={styles.securityTitle}>Secure Transfers</Text>
              <Text style={styles.securityText}>
                All transactions are encrypted and protected with advanced security
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
  headerTitleContainer: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 16,
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
  scanButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(102, 126, 234, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 32,
  },
  searchSection: {
    paddingHorizontal: 24,
    marginTop: 8,
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 16,
    paddingHorizontal: 16,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    marginBottom: 16,
  },
  searchContainerFocused: {
    borderColor: '#667eea',
    backgroundColor: 'rgba(102, 126, 234, 0.05)',
  },
  searchIcon: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    height: 52,
    fontSize: 15,
    color: '#fff',
    fontWeight: '500',
  },
  clearButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchButton: {
    shadowColor: '#667eea',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  searchButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 16,
    gap: 8,
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
  },
  quickAccessSection: {
    marginBottom: 32,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  seeAllText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#667eea',
  },
  quickAccessContainer: {
    paddingHorizontal: 24,
    gap: 16,
  },
  quickAccessItem: {
    alignItems: 'center',
    marginRight: 8,
  },
  quickAccessAvatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    padding: 3,
    marginBottom: 8,
  },
  quickAccessImage: {
    width: '100%',
    height: '100%',
    borderRadius: 32,
  },
  quickAccessName: {
    fontSize: 13,
    fontWeight: '600',
    color: '#fff',
  },
  recentSection: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  recentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  recentAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    marginRight: 12,
  },
  recentAvatarImage: {
    width: '100%',
    height: '100%',
  },
  recentInfo: {
    flex: 1,
  },
  recentName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 4,
  },
  recentPhone: {
    fontSize: 12,
    color: '#8e8e93',
  },
  recentRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  recentAmount: {
    fontSize: 13,
    fontWeight: '600',
    color: '#8e8e93',
  },
  methodsSection: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  methodItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  methodIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(102, 126, 234, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  methodInfo: {
    flex: 1,
  },
  methodTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 4,
  },
  methodDescription: {
    fontSize: 12,
    color: '#8e8e93',
  },
  securityBox: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 212, 170, 0.05)',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 24,
    borderWidth: 1,
    borderColor: 'rgba(0, 212, 170, 0.1)',
  },
  securityIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 212, 170, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  securityContent: {
    flex: 1,
  },
  securityTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 4,
  },
  securityText: {
    fontSize: 12,
    color: '#8e8e93',
    lineHeight: 18,
  },
});

export default FindUserScreen;